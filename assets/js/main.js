$(document).ready(function(){
    'use strict';
    /*===================== loading_code =====================*/
    $(window).ready(function(){
        $('.loading').delay(7000).fadeToggle(600, function(){
            $('body').css('overflow' , 'visible');
        });
    });
    /*===================== loading_code =====================*/
    /*===================== TopUpButton_code =====================*/
    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $('.up').css('opacity', '1')
        }
        else{
            $('.up').css('opacity', '0')
        }
    });
    $('.up').click(function () {
        $('html , body').animate({
           scrollTop : 0
        },1500); 
     });
     /*===================== TopUpButton_code =====================*/
     /*===================== bootstrap-carousel_code =====================*/
    $('.carousel').carousel({
        interval: 5000
    });
    /*===================== bootstrap-carousel_code =====================*/
    /*===================== owel-carousel_code =====================*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    /*===================== owel-carousel_code =====================*/
    /*===================== header_code =====================*/
    $('.header').height($(window).height());
    /*===================== header_code =====================*/
    /*===================== media-query-navbar_code =====================*/
   if(window.matchMedia('(max-width: 768px)').matches)
   {
       $('.nav-bar nav').height($(window).height());
       $('.main_par').click(function(){
       $('.icon_div').toggleClass('active');
       $('.nav-bar nav').toggleClass('show_nav');
       $('.nav-bar nav ul').fadeToggle(200);
   });
   }
   /*===================== media-query-navbar_code =====================*/
   /*===================== navbar-toggle-class_code =====================*/
   $(window).scroll(function(){
        if($(this).scrollTop() > 60)
        {
            $('.nav-bar nav').addClass('fixed')
        }
        else
        {
            $('.nav-bar nav').removeClass('fixed')
        }
   });
   /*===================== navbar-toggle-class_code =====================*/
   /*===================== side-navbar-toggle-class_code =====================*/
   $(window).scroll(function(){
        if($(this).scrollTop() > 60)
        {
            $('.nav-bar .main_par').addClass('main-par-fixed');

        }
        else
        {
            $('.nav-bar .main_par').removeClass('main-par-fixed')
        }
    });
    /*===================== side-navbar-toggle-class_code =====================*/
    /*===================== navbar-listTag-toggle-class_code =====================*/   
    $('nav ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    /*===================== navbar-listTag-toggle-class_code =====================*/
    /*===================== navbar-animation_code =====================*/
    $('nav ul li a').click(function(){
        $('html , body').animate({
            scrollTop:$('#' + $(this).data('scroll')).offset().top - 1
        }, 1500);
    });
    /*===================== navbar-animation_code =====================*/
    /*===================== navbar-class-toggle-byScroll_code =====================*/
    if ($('.nav-bar nav').index) {
		$(window).scroll(function(){
            var scrollPos = $(window).scrollTop();
			$('.nav-bar nav ul li a').each(function () {
				var currLink = $(this);
				var refElement = $('#' + currLink.data('scroll'));
				if (refElement.offset().top - 50 <= scrollPos) {
					$('.nav-bar nav ul li').removeClass("active");
					currLink.closest('.nav-bar nav ul li').addClass("active");
				}
			});
		});
    }
    /*===================== navbar-class-toggle-byScroll_code =====================*/
    /*===================== main-home-popUp-modal_code =====================*/
    $('.home-modal .modal-home').delay(20000).show(5000, function(){
        $('.home-modal .fade').css('opacity','1')
    });
    $('.home-modal .close-home-modal').click(function(){
        $('.home-modal .modal-home').fadeToggle(300)
    });
    /*===================== main-home-popUp-modal_code =====================*/
    /*===================== change-language_code =====================*/ 
    var arrlang =
        {
            'en' :
            {
                'home':'home',
                'camp':'campaign',
                'about':'about',
                'contact':'contact us',
                'news' : 'news',
                'client':'our clients',
                'heading':'welcome..',
                'call':'call us',
                'con':'contact'
            },
            'ar' : 
            {
                'home':'الرئيسية',
                'camp':'الحزمة',
                'about':'حولنا',
                'contact':'اتصل بنا',
                'news' : 'الاخبار',
                'client':'عملائنا',
                'heading':'..مرحبا',
                'call':'اتصل بنا',
                'con':'تواصل معنا'
            },
            'sp' :
            {
                'home':'El principal',
                'camp':'Campaña',
                'about':'acerca de',
                'contact':'contacto',
                'news' : 'Noticias',
                'client':'clientela',
                'heading':'bienvenido..',
                'call':'llámanos',
                'con':'contacto'
            }
        }
        $   ('.trans').click(function(){
            var lang  = $(this).attr('id');
            $('.lang').each(function(){
                $(this).text(arrlang[lang][$(this).attr('key')]);
                $('.next').attr('href' , 'ourclient.html' + '#' + lang);
        }); 
    });
    /*===================== change-language_code =====================*/
});
/*===================== contact-us-form-validation_code =====================*/
    var nameInput = document.getElementById('Name'),
        subjectInput = document.getElementById('Subject'),
        emailInput = document.getElementById('Email'),
        passwordInput = document.getElementById('Password'),
        textareaInput = document.getElementById('Textarea');
        nameInput.onkeyup = function ()
        {
            var name = document.getElementById('Name').value,
                nameInput = document.getElementById('Name'),
                nameReg = /^[A-Za-z0-9]{5,30}$/;
            if(nameReg.test(name))
                {
                    nameInput.style.border = '2px solid rgba(23, 23, 23, 0.72)';
                    document.getElementById('NameError').innerHTML = ' ';
                    document.getElementById('btn').onclick = function ()
                        {
                            return true;
                        }
                }
            else if(!nameReg.test(name))
                {
                    nameInput.style.border = '2px solid blue';
                    document.getElementById('NameError').innerHTML = 'Name is valid';
                    document.getElementById('btn').onclick = function ()
                        {
                            return false;
                        }
                }    
        };
        subjectInput.onkeyup = function ()
        {
            var subject = document.getElementById('Subject').value,
                subjectInput = document.getElementById('Subject'),
                subjectReg = /^[A-Za-z]{3,30}$/;
            if(subjectReg.test(subject))
                {
                    subjectInput.style.border = '2px solid rgba(23, 23, 23, 0.72)';
                    document.getElementById('SubjectError').innerHTML = ' ';
                    document.getElementById('btn').onclick = function ()
                        {
                            return true;
                        }
                }
            else if(!subjectReg.test(subject))
                {
                    subjectInput.style.border = '2px solid blue';
                    document.getElementById('SubjectError').innerHTML = 'subject is valid';
                    document.getElementById('btn').onclick = function ()
                        {
                            return false;
                        }
                }    
        };
        emailInput.onkeyup = function ()
        {
            var email = document.getElementById('Email').value,
                emailInput = document.getElementById('Email'),
                emailReg = /^[A-Za-z_]{3,}[0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{3,}$/;
            if(emailReg.test(email))
                {
                    emailInput.style.border = '2px solid rgba(23, 23, 23, 0.72)';
                    document.getElementById('EmailError').innerHTML = ' ';
                    document.getElementById('btn').onclick = function ()
                        {
                            return true;
                        }
                }
            else if(!emailReg.test(email))
                {
                    emailInput.style.border = '2px solid blue';
                    document.getElementById('EmailError').innerHTML = 'email is valid';
                    document.getElementById('btn').onclick = function ()
                        {
                            return false;
                        }
                }    
        };
        passwordInput.onkeyup = function ()
        {
            var password = document.getElementById('Password').value,
                passwordInput = document.getElementById('Password'),
                passwordReg = /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{8,16}$/;
            if(passwordReg.test(password))
                {
                    passwordInput.style.border = '2px solid rgba(23, 23, 23, 0.72)';
                    document.getElementById('PasswordError').innerHTML = ' ';
                    document.getElementById('btn').onclick = function ()
                        {
                            return true;
                        }
                }
            else if(!passwordReg.test(password))
                {
                    passwordInput.style.border = '2px solid blue';
                    document.getElementById('PasswordError').innerHTML = 'password is valid';
                    document.getElementById('btn').onclick = function ()
                        {
                            return false;
                        }
                }    
        };
        textareaInput.onkeyup = function ()
        {
            var textarea = document.getElementById('Textarea').value,
                textareaInput = document.getElementById('Textarea'),
                textareaReg = /^[A-Za-z0-9]{5,}$/;
            if(textareaReg.test(textarea))
                {
                    textareaInput.style.border = '2px solid rgba(23, 23, 23, 0.72)';
                    document.getElementById('textareaError').innerHTML = ' ';
                    document.getElementById('btn').onclick = function ()
                        {
                            return true;
                        }
                }
            else if(!textareaReg.test(textarea))
                {
                    textareaInput.style.border = '2px solid blue';
                    document.getElementById('textareaError').innerHTML = 'textarea is valid';
                    document.getElementById('btn').onclick = function ()
                        {
                            return false;
                        }
                }    
        };
function validation () {
    var name = document.getElementById('Name').value,
        nameInput = document.getElementById('Name'),
        subject = document.getElementById('Subject').value,
        subjectInput = document.getElementById('Subject'),
        email = document.getElementById('Email').value,
        emailInput = document.getElementById('Email'),
        password = document.getElementById('Password').value,
        passwordInput = document.getElementById('Password'),
        textarea = document.getElementById('Textarea').value,
        textareaInput = document.getElementById('Textarea');
        if(name == false && subject == false && email == false && password == false && textarea == false)
        {
            nameInput.style.border = '3px solid #00bd2e';
            document.getElementById('NameError').innerHTML = 'Name is required';
            subjectInput.style.border = '3px solid #00bd2e';
            document.getElementById('SubjectError').innerHTML = 'subject is required';
            emailInput.style.border = '3px solid #00bd2e';
            document.getElementById('EmailError').innerHTML = 'email is required';
            passwordInput.style.border = '3px solid #00bd2e';
            document.getElementById('PasswordError').innerHTML = 'password is required';
            textareaInput.style.border = '3px solid #00bd2e';
            document.getElementById('textareaError').innerHTML = 'textarea is required';
            return false;
        }
        /*
        else if (name == true || subject == true || email == true || password == true || textarea == true)
        {
            nameInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            document.getElementById('NameError').innerHTML = ' ';
            subjectInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            document.getElementById('SubjectError').innerHTML = ' ';
            emailInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            document.getElementById('EmailError').innerHTML = ' ';
            passwordInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            document.getElementById('PasswordError').innerHTML = ' ';
            textareaInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            document.getElementById('textareaError').innerHTML = ' ';
        }
        */
        if(name == false)
            {
                    document.getElementById('NameError').innerHTML = 'Name is required';
                    nameInput.style.border = '3px solid #00bd2e';
                    nameInput.style.backgroundColor = 'rgba(23, 23, 23, 0.72';
                    return false;
            }
        else if(name == true)
            {
                    document.getElementById('NameError').innerHTML = ' ';
                    nameInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
                    return true;
            }
        if(subject == false)
            {
                    document.getElementById('SubjectError').innerHTML = 'subject is required';
                    subjectInput.style.border = '3px solid #00bd2e';
                    subjectInput.style.backgroundColor = 'rgba(23, 23, 23, 0.72';
                    return false;
            }
        else if(subject == true)
            {
                    document.getElementById('SubjectError').innerHTML = ' ';
                    subjectInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }
        if(email == false)
            {
                    document.getElementById('EmailError').innerHTML = 'email is required';
                    emailInput.style.border = '3px solid #00bd2e';
                    emailInput.style.backgroundColor = 'rgba(23, 23, 23, 0.72';
                    return false;
            }
        else if(email == true)
            {
                    document.getElementById('EmailError').innerHTML = ' ';
                    emailInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }
        if(password == false)
            {
                    document.getElementById('PasswordError').innerHTML = 'password is required';
                    passwordInput.style.border = '3px solid #00bd2e';
                    passwordInput.style.backgroundColor = 'rgba(23, 23, 23, 0.72';
                    return false;
            }
        else if(password == true)
            {
                    document.getElementById('PasswordError').innerHTML = ' ';
                    passwordInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }
        if(textarea == false)
            {
                    document.getElementById('textareaError').innerHTML = 'textarea is required';
                    textareaInput.style.border = '3px solid #00bd2e';
                    textareaInput.style.backgroundColor = 'rgba(23, 23, 23, 0.72';
                    return false;
            }
        else if(textarea == true)
            {
                    document.getElementById('textareaError').innerHTML = ' ';
                    textareaInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }                
    };
/*===================== contact-us-form-validation_code =====================*/
/*===================== signIn-popUp-modal-form-validation_code =====================*/
function validateSignIn(){
    var mail = document.getElementById('signInMail').value;
    var mailInput = document.getElementById('signInMail');
    var paswwrd = document.getElementById('signInPassword').value;
    var paswwrdInput  = document.getElementById('signInPassword');
    var mailReg = /^[A-Za-z_]{3,}[0-9]{0,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{3,}$/;
    var paswwrdReg = /^(?=.*[0-9])(?=.*[a-z])[A-Za-z0-9]{8,16}$/;
    if(mail == true)
    {
        if(mailReg.test(mail))
            {
                document.getElementById('mailError').innerHTML = ' ';
                mailInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }
            else
            {
                document.getElementById('mailError').innerHTML = 'Email or Username is valid ';
                mailInput.style.borderColor = '#f0151f';
                return false;
            }
    }
    else
        {
            document.getElementById('mailError').innerHTML = 'Email or Username is valid ';
            mailInput.style.borderColor = '#f0151f';
            return false;
        }
    if(paswwrd == true)
    {
        if(paswwrdReg.test(paswwrd))
            {
                document.getElementById('passError').innerHTML = ' ';
                paswwrdInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }
            else
            {
                document.getElementById('passError').innerHTML = 'password is valid'
                paswwrdInput.style.borderColor = '#f0151f';
                return false;
            }
    }
    else
        {
            document.getElementById('passError').innerHTML = 'password is valid'
            paswwrdInput.style.borderColor = '#f0151f';
            return false;
        }
}
/*===================== signIn-popUp-modal-form-validation_code =====================*/
/*===================== signUp-popUp-modal-form-validation_code =====================*/
function validateSignUp(){
    var userName = document.getElementById('UsernameSignUp').value;
    var userNameinput = document.getElementById('UsernameSignUp');
    var EmailS = document.getElementById('EmailSignUp').value;
    var EmailSinput = document.getElementById('EmailSignUp');
    var passCreate = document.getElementById('passwordSignUp').value;
    var passCreateInput = document.getElementById('passwordSignUp');
    var confirmPass = document.getElementById('ConfirmPassSignUp').value;
    var confirmPassInput =document.getElementById('ConfirmPassSignUp');
    var userNameReg = /^[A-Za-z0-9]{3,30}$/;
    var EmailSREG = /^[A-Za-z_]{3,}[0-9]{0,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{3,}$/;
    var passReg = /^(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/;
    if(userName ==  true)
    {
        if(userNameReg.test(userName))
            {
                document.getElementById('UserError').innerHTML = '';
                userNameinput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }
            else 
            {
                document.getElementById('UserError').innerHTML = 'UserName Is Valid';
                userNameinput.style.borderColor = '#f0151f';
                return false;
            }
    }
    else 
    {
        document.getElementById('UserError').innerHTML = 'UserName Is Valid';
        userNameinput.style.borderColor = '#f0151f';
        return false;
    }
    if(EmailS == true)
    {
        if(EmailSREG.test(EmailS))
        {
            document.getElementById('EmaiilError').innerHTML = '';
            EmailSinput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
        }
        else 
        {
            document.getElementById('EmaiilError').innerHTML = 'Email Is Valid';
            EmailSinput.style.borderColor = '#f0151f';
            return false;
        }    
    }
    else 
        {
            document.getElementById('EmaiilError').innerHTML = 'Email Is Valid';
            EmailSinput.style.borderColor = '#f0151f';
            return false;
        }
    if(passCreate == true)
    {
        if(passReg.test(passCreate))
        {
            document.getElementById('pasError').innerHTML = '';
            passCreateInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
        }
        else 
        {
            document.getElementById('pasError').innerHTML = 'Password Is Valid';
            passCreateInput.style.borderColor = '#f0151f';
            return false;
        }
    }    
    else 
        {
            document.getElementById('pasError').innerHTML = 'Password Is Valid';
            passCreateInput.style.borderColor = '#f0151f';
            return false;
        }
    if(confirmPass == true)
    {
        if(confirmPass != passCreate)
            {
                document.getElementById('confirmPassError').innerHTML = 'Password Is Not Same';
                confirmPassInput.style.borderColor = '#f0151f';
                return false;
            }
            else
            {
                document.getElementById('confirmPassError').innerHTML = '';
                confirmPassInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
            }    
    }
    else
        {
            document.getElementById('confirmPassError').innerHTML = '';
            confirmPassInput.style.borderColor = 'rgba(23, 23, 23, 0.72)';
        }    
}
/*===================== signUp-popUp-modal-form-validation_code =====================*/