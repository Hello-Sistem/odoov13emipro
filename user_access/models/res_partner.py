# -*- coding: utf-8 -*-

import logging
import uuid

from odoo import models, fields

class ResPartner(models.Model):
    _inherit = 'res.partner'

    user_role = fields.Selection([('l1', "L1 User"), ('l2', "L2 User")],related='user_ids.user_role')

