// Form 2307
odoo.define('bir_module._2307Form', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var _2307Form = AbstractAction.extend({
	contentTemplate: 'form_2307_page',

	start: function(){
        var current = get_current();
        this.$("#_2307_month").val(current);
        
		this._rpc({
            model: 'account.move',
            method: 'fetch_BP',
            args: [''],
        }).then(function(data){
            $("#_2307_partner").append(construct_partners(data));
        });
	},

	events: {
        "click #print_2307": function(){
            var current = this.$("#_2307_month").val();
            var BP = this.$("#_2307_partner").find(":selected").val();
            
            var self = this;

            this._rpc({
                model: 'account.move',
                method: 'x_2307_forms',
                args: ['', {'month': current, 'id': BP}],
            }).then(function(data){
                self.do_action(data);
            });
        }
    },
});

core.action_registry.add('form_2307_page', _2307Form);

return {
    _2307Form: _2307Form,
};

});

// Form 2550M
odoo.define('bir_module._2550MForm', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var _2550MForm = AbstractAction.extend({
    contentTemplate: 'form_2550M_page',

    start: function(){
        var current = get_current();
        this.$("#_2550M_month").val(current);
        
        this._rpc({
            model: 'account.move',
            method: 'fetch_BP',
            args: [''],
        }).then(function(data){
            $("#_2550M_partner").append(construct_partners(data));
        });
    },

    events: {
        "click #print_2550M": function(){
            var current = this.$("#_2550M_month").val()

            var self = this;

            this._rpc({
                model: 'account.move',
                method: 'x_2550_print_action',
                args: ['', {'month': current, 'trans': '2550M'}],
            }).then(function(data){
                self.do_action(data);
            });
        }
    },
});

core.action_registry.add('form_2550M_page', _2550MForm);

return {
    _2550MForm: _2550MForm,
};

});

// Form 2550Q
odoo.define('bir_module._2500QForm', function(require) {
"use strict";

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');
var Widget = require('web.Widget');

var _2500QForm = AbstractAction.extend({
    contentTemplate: 'form_2550Q_page',

    start: function(){
        var current = get_current();
        this.$("#_2550Q_month").val(current);
        
        this._rpc({
            model: 'account.move',
            method: 'fetch_BP',
            args: [''],
        }).then(function(data){
            $("#_2550Q_partner").append(construct_partners(data));
        });
    },

    events: {
        "click #print_2550Q": function(){
            var current = this.$("#_2550Q_month").val()

            var self = this;
            
            this._rpc({
                model: 'account.move',
                method: 'x_2550_print_action',
                args: ['', {'month': current, 'trans': '2550Q'}],
            }).then(function(data){
                self.do_action(data);
            });
        }
    },
});

core.action_registry.add('form_2550Q_page', _2500QForm);

return {
    _2500QForm: _2500QForm,
};

});