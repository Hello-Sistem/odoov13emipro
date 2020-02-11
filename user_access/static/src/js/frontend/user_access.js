odoo.define('user_access.user_access_js', function(require) {
    'use strict';

    var ajax = require('web.ajax');
    var publicWidget = require('web.public.widget');
    var session = require('web.session');

//    $(document).on('click', '.te_signup', function(){
//        $("#registerPopup").modal();
//        $('body').find('.modal-backdrop').css('position','relative');
//    });

     publicWidget.registry.te_brand_slider = publicWidget.Widget.extend({
        selector: "#wrapwrap",
        events: {
            'click .te_send_quote_button': 'sendQuote',
        },
        start: function () {
            self = this;
            self.hideAddToCart();
        },
        sendQuote: function() {
             $(".te_error_msg").html("");
             var email = $(".ept_custom_ajax_form .o_website_form_input").val();
             var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
             var validate = regex.test(email);
             if(validate)
             {
                ajax.jsonRpc('/send_quote', 'call', {'email': email}).then(function (data) {
                    if(data)
                    {
                        window.location.href = window.location.origin+'/create_order_quote';
                    }else {
                        $(".te_error_msg").html("User has no access....");
                    }
                });
             }else {
                $(".te_error_msg").html("error..");
                console.log("error");
             }
        },
        hideAddToCart: function() {
            var user = session.user_id
            if (user == false)
            {
                $(document).find(".fa-shopping-cart").parent().remove();
            }
        }
    });
});