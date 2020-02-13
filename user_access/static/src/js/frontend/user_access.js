odoo.define('user_access.user_access_js', function(require) {
    'use strict';

    var ajax = require('web.ajax');
    var publicWidget = require('web.public.widget');
    var session = require('web.session');

     publicWidget.registry.te_brand_slider = publicWidget.Widget.extend({
        selector: "#wrapwrap",
        events: {
            'click .te_send_quote_button': 'sendQuote',
            'click .te_send_portal_quote_button': 'sendPortalQuote',
            'click .te_cart_send_quote': 'cartSendQuote',
        },
        start: function () {
            self = this;
            self.hideAddToCart();
        },
        sendPortalQuote: function() {
            $(".te_error_msg").html("");
            var order_id = $(".te_send_portal_quote_button").attr('order-id');
            $(".ept_custom_ajax_form .o_website_form_input").removeClass('is-invalid');
            var email = $(".ept_custom_ajax_form .o_website_form_input").val();
            var content = $(".ept_custom_ajax_form .o_composer_text_field").val();
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var validate = regex.test(email);
            if(validate)
            {
                ajax.jsonRpc('/send_portal_quote', 'call', {'email': email,'content':content,'order_id':order_id}).then(function (data) {
                    if(data)
                    {
                        $(".te_success_msg").html("Your Quotation has been sent successfully.");
                    }else {
                        $(".ept_custom_ajax_form .o_website_form_input").addClass('is-invalid');
                        $(".te_error_msg").html("Please enter valid email address.");
                    }
                });

            }else {
                if(email)
                {
                     $(".ept_custom_ajax_form .o_website_form_input").addClass('is-invalid');
                     $(".te_error_msg").html("Please enter valid email address.");
                }else {
                    $(".ept_custom_ajax_form .o_website_form_input").addClass('is-invalid');
                    $(".te_error_msg").html("Please enter required field.");
                }
            }
        },
        sendQuote: function() {
             $(".te_error_msg").html("");
             $(".ept_custom_ajax_form .o_website_form_input").removeClass('is-invalid');
             var email = $(".ept_custom_ajax_form .o_website_form_input").val();
             var content = $(".ept_custom_ajax_form .o_composer_text_field").val();
             var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
             var validate = regex.test(email);
             if(validate)
             {
                ajax.jsonRpc('/send_quote', 'call', {'email': email,'content':content}).then(function (data) {
                    if(data)
                    {
                        window.location.href = window.location.origin+'/create_order_quote';
                    }else {
                        $(".ept_custom_ajax_form .o_website_form_input").addClass('is-invalid');
                        $(".te_error_msg").html("Please enter valid email address.");
                    }
                });
             }else {
                if(email)
                {
                     $(".ept_custom_ajax_form .o_website_form_input").addClass('is-invalid');
                     $(".te_error_msg").html("Please enter valid email address.");
                }else {
                    $(".ept_custom_ajax_form .o_website_form_input").addClass('is-invalid');
                    $(".te_error_msg").html("Please enter required field.");
                }

             }
        },
        hideAddToCart: function() {
            var user = session.user_id
            if (user == false)
            {
                $(document).find(".fa-shopping-cart").parent().remove();
            }
        },
        cartSendQuote: function() {
            $('.ept_custom_ajax_form').toggle('slow');
        }
    });
});