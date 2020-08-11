// JavaScript source code
$(document).ready(function () {
    //to allow only number not any symbols
    $(document).on('keypress', ':input[type="number"]', function (num) {
        if (isNaN(num.key)) {
            return false;
        }
    });

    //to active cardtype and to input card number, when PaymentMode checked
    $('input[name="PaymentMode"]').click(function () {
        if ($('#card').is(":checked")) {
            $('input[name="CardType"]').removeAttr("disabled");
             alert("Please selct your card type");
        } else {
                $('input[name="CardType"]').attr("disabled", "disabled");
                }
    })
    $('input[name="CardType"]').click(function () {
        if ($('#card').is(":checked")) {
            $("#CardNumber").removeAttr("disabled");
           
            $("#CardNumber").focus();
            alert("Enter your 16-digit card number");

        } else {
            $("#CardNumber").attr("disabled", "disabled");
            $('#CardNumber').val('');

        }
    })
    //to active coupon code
    $('input[name="couponCheckbox"]').click(function () {
        if ($('#couponCheckbox').is(":checked")) {
            $("#CouponCode").removeAttr("disabled");
            $("#CouponCode").focus();
            alert('Enter the coupon code')
        } else {
            $("#CouponCode").attr("disabled", "disabled");
            $('#CouponCode').val('');

        }
    });
    


    // submit button pressed and not card no entered
    $('#submitBtn').click(function () {
        var number = $("#CardNumber").val();
        var result = $('#result');
        var resultText=''

        
        if ($('#card').is(':checked') && number.length <= 0) {
            alert("Please Enter your full  16-digit card number");
        }else if ($('#card').is(':checked')) {
            if (($('#CardNumber').val().length) < 16) {
                resultText += "**Please enter complete card number**";
                result.text(resultText)
            } else {
                resultText = '';
                result.text(resultText)
            }
            
            
        }// when coupon code is empty
        else if ($('#couponCheckbox').is(':checked')) {
            if (($('#CouponCode').val().length) <= 0) {
                resultText += "**Please enter coupon Code**";
                result.text(resultText)
            } else {
                resultText = '';
                result.text(resultText)
            }
           
        }
        
        
    }); 
   
    $('#submitBtn').click(function () {

        var result = $('#result');
        var resultText = ''
        if ($('#couponCheckbox').is(':checked')) {
            if (($('#CouponCode').val().length) <= 0) {
                resultText += "**Please enter coupon Code**";
                result.text(resultText)
            } else {
                resultText = '';
                result.text(resultText)
            }

        }
    });
    
   // tried for give a space in card number
    $('#CardNumber').on('keypress blur',function () {
        var num = $('#CardNumber').val();
        var numtxt = '' + num;
        var realresult = '';
        var result = numtxt.replace(/^(.{4})(.{4})(.*)$/, "$1 $2 $3");
        realresult += result;
        $(this).text(realresult);
    })
    // alerting if input text and number is blank
    $('#submitBtn').click(function () {
        var result = $('#result')
        if (($('input[type="text"]').val().length) <= 0) {
            $('input[type="text"]').addClass("intro");
            resultText = "**Please fill all the required details**";
            result.text(resultText)
        } else {
            $('input[type="text"]').removeClass("intro");
            resultText = '';
            result.text(resultText)
        }

    });
    $('#submitBtn').click(function () {
        var result = $('#result')
        if (($('input[type="number"]').val().length) <= 0) {
            $('input[type="number"]').addClass("intro");
            resultText = "**Please fill all the required deatils**";
            result.text(resultText)
        } else {
            $('input[type="number"]').removeClass("intro");
            resultText = '';
            result.text(resultText)
        }

    });
    // alert to select atleast one row select
    $('#submitBtn').click(function () {
        var check = $('.Select').find('input[type=checkbox]:checked').length;
        if (check > 0) {
            return true
        }
        else {
            alert("Please Select At least one  Topic ");
            
        }
    });
    
   
    




});
