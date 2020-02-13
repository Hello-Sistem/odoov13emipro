# -*- coding: utf-8 -*-

import logging
import uuid

from odoo import api, models, fields

class ResUsers(models.Model):
    _inherit = 'res.users'

    def _get_default_access_token(self):
        return str(uuid.uuid4())

    is_validate = fields.Boolean(string='Validate User')
    redirect_url = fields.Char('redirect_url')
    access_token = fields.Char('Security Token', copy=False, default=_get_default_access_token)
    user_role = fields.Selection([('l1', "L1 User"), ('l2', "L2 User"), ('l3', "L3 User")],related='partner_id.user_role',readonly=False)

    @api.onchange('user_role')
    def update_user_role(self):
        if self.user_role:
            self.partner_id.user_role = self.user_role


    
