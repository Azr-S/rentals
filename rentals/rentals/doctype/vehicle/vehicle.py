# Copyright (c) 2024, azhar and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class vehicle(WebsiteGenerator):
	def before_save(self):
		self.title = f"{self.make} {self.model} ,{self.year}"
