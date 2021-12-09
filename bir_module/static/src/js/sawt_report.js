// SAWT Report
odoo.define('bir_module.SAWTReport', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var SAWTReport = AbstractAction.extend({
	contentTemplate: 'sawt_report',

	start: function(){
        var current = get_current();
        this.$("#sawt_param").val(current);
        
		this._rpc({
            model: 'account.move',
            method: 'SAWT_report',
            args: ['', current],
        }).then(function(data){
        	$("#sawt_table").html(construct_sawt(data));
        });
	},

	events: {
        "keypress #sawt_param": function(e){
            if(e.which == 13){
                var current = this.$("#sawt_param").val();

                this._rpc({
                    model: 'account.move',
                    method: 'SAWT_report',
                    args: ['', current],
                }).then(function(data){
                    $("#sawt_table").html(construct_sawt(data));
                });
            }
        },

        "click #export_sawt": function(){
            var current = this.$("#sawt_param").val();

            this._rpc({
                model: 'account.move',
                method: 'export_sawt_map',
                args: ['', current, 'sawt'],
            }).then(function(data){
                alert(data)
            });
        },
    },
});

core.action_registry.add('sawt_report_page', SAWTReport);

return {
    SAWTReport: SAWTReport,
};

});
