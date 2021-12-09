// MAP Report
odoo.define('bir_module.MAPReport', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var MAPReport = AbstractAction.extend({
    contentTemplate: 'map_report',

    start: function(){
        var current = get_current();
        this.$("#map_param").val(current);
        
		this._rpc({
            model: 'account.move',
            method: 'MAP_report',
            args: ['', current],
        }).then(function(data){
        	$("#map_table").html(construct_sawt(data));
        });
    },

    events: {
        "keypress #map_param": function(e){
            if(e.which == 13){
            	var current = this.$("#map_param").val();

                this._rpc({
                    model: 'account.move',
                    method: 'MAP_report',
                    args: ['', current],
                }).then(function(data){
                    $("#map_table").html(construct_sawt(data));
                });
            }
        },

        "click #export_map": function(){
            var current = this.$("#map_param").val();

            this._rpc({
                model: 'account.move',
                method: 'export_sawt_map',
                args: ['', current, 'map'],
            }).then(function(data){
                alert(data)
            });
        },
    },
});

core.action_registry.add('map_report_page', MAPReport);

return {
   MAPReport:MAPReport,
};

});
