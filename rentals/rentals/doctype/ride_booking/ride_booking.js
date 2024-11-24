// Copyright (c) 2024, azhar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
    refresh(frm) {
        if (frm.doc.status !== "Accepted") {
            frm.add_custom_button("Accept", () => {
                frappe.msgprint("Click Works");
                // Change the status to "Accepted"
                frm.set_value("status", "Accepted");
                frm.save();
            });
        }
    },

    rate(frm){
        //recaculate total
        frm.trigger("update_total_amount");
    },

    update_total_amount(frm){
        let total_d = 0;
        for(let item of frm.doc.items){
            total_d += item.distance
            
        }
        console.log(total_d)
        const amount = frm.doc.rate * total_d
        frm.set_value("total_amount",amount)
    }
});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
    distance(frm ,cdt ,cdn) {
        //listening for change in distanc 
        frm.trigger("update_total_amount");  }
})