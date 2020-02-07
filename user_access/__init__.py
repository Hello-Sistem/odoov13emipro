from . import models
from . import controllers

from odoo import api, fields, models, SUPERUSER_ID, _

def pre_init_hook(cr):
   env = api.Environment(cr, SUPERUSER_ID, {})
   print("EPT : Pre Init Hook")
   sale_order_email_tmpl = env['ir.model.data'].search([('module','=','sale'),('model','=','mail.template'),('name','=','email_template_edi_sale')])
   if sale_order_email_tmpl:
       print(sale_order_email_tmpl)
       sale_order_email_tmpl.noupdate = False
