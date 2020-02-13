# -*- coding: utf-8 -*-

import logging
import uuid

from odoo import api, fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    user_role = fields.Selection([('l1', "L1 User"), ('l2', "L2 User"), ('l3', "L3 User")])





