# -*- coding: utf-8 -*-
{
    'name': "BIR Compliance",

    'summary': "BIR Compliance Module",

    'description': """
        Long description of module's purpose
    """,

    'author': "Jerome Campana, Elyon Solutions International Inc.",
    'website': "www.elyon-solutions.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'account', 'web'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/bir_inherit.xml',
        'views/templates.xml',
        'reports/form_2307_transactional.xml',
        'reports/bir_form_2550M.xml',
        'reports/bir_form_2550Q.xml',
        'reports/bir_form_2307.xml',
        'reports/paper_format.xml',
        # 'reports/bir_form_2550M.xml',
        # 'reports/bir_form_2550Q.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
    'assets': {
        'web.assets_backend': [
            '/bir_module/static/src/js/sawt_report.js',
            '/bir_module/static/src/js/map_report.js',
            '/bir_module/static/src/js/collective.js',
            '/bir_module/static/src/js/BIR_forms.js',
            '/bir_module/static/src/js/sls_report.js',
            '/bir_module/static/src/js/slp_report.js',
        ], 
        'web.assets_qweb': [
            "/bir_module/static/src/xml/reports_body.xml",
        ],
    }
}
