/**
 * Created by Administrator on 2017/9/4 0004.
 */




function Email(StrEmail) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(StrEmail=='' || StrEmail==$('.SendEmails').attr('placeholder')){
        alert('The email required.');
        return false;
    }else {
        // return reg.test(str);
        if(reg.test(StrEmail)){
            return true;
        }else {
            alert('Invalid email');
            return false;
        }
    }
}


//send email

$('.btn').click(function () {
    Email($('.SendEmails').val());
});



//login
//sign in
$('.btn-in').click(function () {
    var StrPassword= $('.password1').val();
    var StrPassword2= $('.password2').val();
    if(!Email($('.UserEmail').val())){
        return false;
    }
    if(StrPassword=='' || StrPassword==$('.password1').attr('placeholder')){
        alert('The password required.');
        return false;
    }
    if(StrPassword2 !=StrPassword || StrPassword2==$('.password2').attr('placeholder')){
        alert('Confirm password not match.');
        return false;
    }
});


//sign up
$('.btn-up').click(function () {
    var StrPassword= $('.password').val();
    if(!Email($('.email').val())){
        return false;
    }
    if(StrPassword=='' || StrPassword==$('.password').attr('placeholder')){
        alert('The password required.');
        return false;
    }
});


//忘记密码
$('.forgot-sub').click(function () {
    Email($('.f-email').val());
});


//重置密码
$('.reset-sub').click(function () {
    var StrPassword= $('.r-password1').val();
    var StrPassword2= $('.r-password2').val();
    if(StrPassword=='' || StrPassword==$('.r-password1').attr('placeholder')){
        alert('The password required.');
        return false;
    }
    if(StrPassword2 !=StrPassword || StrPassword2==$('.r-password2').attr('placeholder')){
        alert('Confirm password not match.');
        return false;
    }
});



//dispute
$('.dispute-submit').click(function () {

    var StrDispute=$('.dispute-content').val();
    if(!Email($('.user-email').val())){
        return false;
    }
    if(StrDispute=='' || StrDispute==$('.dispute-content').attr('placeholder')){
        alert('The problem required.');
        return false;
    }
});




//change password
$('.change-submit').click(function () {

   var OldPassword= $('.old-password').val();
   var NewPassword=$('.new-password').val();
   var ConfirmPassword=$('.confirm-password').val();

   if(OldPassword=='' || OldPassword==$('.old-password').attr('placeholder')){
       alert('old password required');
       return false;
   }



    if(NewPassword=='' || NewPassword==$('.new-password').attr('placeholder')){
        alert('The password required.');
        return false;
    }
    if(ConfirmPassword !=NewPassword || ConfirmPassword==$('.confirm-password').attr('placeholder')){
        alert('Confirm password not match.');
        return false;
    }


})
