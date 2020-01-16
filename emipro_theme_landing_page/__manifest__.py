{
    #Module information
    'name': 'Emipro Theme Landing Page',
    'category': 'eCommerce',
    'summary': 'This app contains provide the separate page for category and brand.',
    'version': '1.0.0',
    'license': 'OPL-1',
    'depends':['emipro_theme_brand'],

    'data': [
        'views/product_landing_page.xml',
    ],

    #Odoo Store Specific
    'images': [
	'static/description/emipro_theme_brand.jpg',
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'https://www.emiprotechnologies.com',
    'maintainer': 'Emipro Technologies Pvt. Ltd.',

    # Technical
    'installable': True,
    'auto_install': False,
    'price': 0.00,
    'currency': 'EUR',
}
