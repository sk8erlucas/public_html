$(document).ready(function() {
	$('.form-email-top #btn_enviar').click(function(e) {
        e.preventDefault();
        var name = $('.form-email-top #name').val(),
            email = $('.form-email-top #email').val(),
            message = $('.form-email-top #message').val();

        $('.form-email-top .invalid-field').removeClass('invalid-field');

        if (name == '') {
            $('.form-email-top #name').addClass('invalid-field');
            return false;
        }

        if (email == '') {
            $('.form-email-top #email').addClass('invalid-field');
            return false;
        }

        if (message == '') {
            $('.form-email-top #message').addClass('invalid-field');
            return false;
        }

        $.ajax({
            url: 'services/contact.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                message: message
            },
            beforeSend: function() {
                $('.form-email-top .sub').hide();
                $('.form-email-top #btn_enviar').html('Enviando...');
                $('.form-email-top #btn_enviar').attr('disabled', 'disabled');
            },
            success: function(response) {
                response = JSON.parse(response);
                if (response.error) {
                    $('.form-email-top .sub').html('<div class="msg-error">' +  response.error + '</div>');
                } else {
                    $('.form-email-top #name').val('');
                    $('.form-email-top #email').val('');
                    $('.form-email-top #message').val('');
                    $('.form-email-top .sub').html('<div class="msg-success">' +  response.success + '</div>');
                    gtag_report_conversion();
                }

                $('.form-email-top .sub').show();
                $('.form-email-top #btn_enviar').html('Enviar');
                $('.form-email-top #btn_enviar').removeAttr('disabled');
            },
            error: function(res) {
                $('.form-email-top .sub').html('<div class="msg-error">Ocurrio un error al enviarnos la consulta. Por favor intenta nuevamente o escribinos directamente a info@pluribol.com.ar</div>');
                $('.form-email-top .sub').show();
            }
        });

        return false;
    });

    $('.form-email-bottom #btn_enviar').click(function(e) {
        e.preventDefault();
        var name = $('.form-email-bottom #name').val(),
            email = $('.form-email-bottom #email').val(),
            message = $('.form-email-bottom #message').val();

        $('.form-email-bottom .invalid-field').removeClass('invalid-field');

        if (name == '') {
            $('.form-email-bottom #name').addClass('invalid-field');
            return false;
        }

        if (email == '') {
            $('.form-email-bottom #email').addClass('invalid-field');
            return false;
        }

        if (message == '') {
            $('.form-email-bottom #message').addClass('invalid-field');
            return false;
        }

        $.ajax({
            url: 'services/contact.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                message: message
            },
            beforeSend: function() {
                $('.form-email-bottom .sub').hide();
                $('.form-email-bottom #btn_enviar').html('Enviando...');
                $('.form-email-bottom #btn_enviar').attr('disabled', 'disabled');
            },
            success: function(response) {
                response = JSON.parse(response);
                if (response.error) {
                    $('.form-email-bottom .sub').html('<div class="msg-error">' +  response.error + '</div>');
                } else {
                    $('.form-email-bottom #name').val('');
                    $('.form-email-bottom #email').val('');
                    $('.form-email-bottom #message').val('');
                    $('.form-email-bottom .sub').html('<div class="msg-success">' +  response.success + '</div>');
                    gtag_report_conversion();
                }

                $('.form-email-bottom .sub').show();
                $('.form-email-bottom #btn_enviar').html('Enviar');
                $('.form-email-bottom #btn_enviar').removeAttr('disabled');
            },
            error: function(res) {
                $('.form-email-bottom .sub').html('<div class="msg-error">Ocurrio un error al enviarnos la consulta. Por favor intenta nuevamente o escribinos directamente a info@pluribol.com.ar</div>');
                $('.form-email-bottom .sub').show();
            }
        });

        return false;
    });
});