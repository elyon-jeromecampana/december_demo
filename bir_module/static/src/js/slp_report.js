// SAWT Report
odoo.define('bir_module.SLPReport', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var SLPReport = AbstractAction.extend({
	contentTemplate: 'slp_report',

	start: function(){
        var current = get_current();
        this.$("#slp_param").val(current);
        
		this._rpc({
            model: 'account.move',
            method: 'SLS_SLP_report',
            args: ['', current, 'in_invoice'],
        }).then(function(data){
        	$("#slp_table").html(construct_slp(data));
        });
	},

	events: {
        "keypress #slp_param": function(e){
            if(e.which == 13){
                var current = this.$("#slp_param").val();

                this._rpc({
                    model: 'account.move',
                    method: 'SLS_SLP_report',
                    args: ['', current, 'in_invoice'],
                }).then(function(data){
                    $("#slp_table").html(construct_slp(data));
                });
            }
        },

        "click #export_slp": function(){
            var current = this.$("#slp_param").val();

            // this._rpc({
            //     model: 'account.move',
            //     method: 'export_sawt_map',
            //     args: ['', current, 'sawt'],
            // }).then(function(data){
            //     alert(data)
            // });
        },
    },
});

core.action_registry.add('slp_report_page', SLPReport);

return {
    SLPReport: SLPReport,
};

});
