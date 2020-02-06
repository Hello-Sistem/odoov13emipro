# -*- coding: utf-8 -*-

import logging
import uuid

from odoo import api, fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    user_role = fields.Selection([('l1', "L1 User"), ('l2', "L2 User")],related='user_ids.user_role',readonly=False)

    @api.onchange('user_role')
    def update_user_role(self):
        if self.user_role and self.parent_id.user_id:
            self.parent_id.user_id.user_role = self.user_role


