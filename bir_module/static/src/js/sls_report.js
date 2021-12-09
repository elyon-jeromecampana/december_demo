// SAWT Report
odoo.define('bir_module.SLSReport', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var SLSReport = AbstractAction.extend({
	contentTemplate: 'sls_report',

	start: function(){
        var current = get_current();
        this.$("#sls_param").val(current);
        
		this._rpc({
            model: 'account.move',
            method: 'SLS_SLP_report',
            args: ['', current, 'out_invoice'],
        }).then(function(data){
            $("#sls_table").html(construct_sls(data));
            // alert(data)
        });
	},

	events: {
        "keypress #sls_param": function(e){
            if(e.which == 13){
                var current = this.$("#sls_param").val();

                this._rpc({
                    model: 'account.move',
                    method: 'SLS_SLP_report',
                    args: ['', current, 'out_invoice'],
                }).then(function(data){
                    $("#sls_table").html(construct_sls(data));
                });
            }
        },

        "click #export_sls": function(){
            var current = this.$("#sls_param").val();

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

core.action_registry.add('sls_report_page', SLSReport);

return {
    SLSReport: SLSReport,
};

});
