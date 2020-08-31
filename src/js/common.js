$(document).ready(function() {

    // Слайдер примеров машин
    $('.js--examples-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        prevArrow: $('.js--examples-slider_prev'),
        nextArrow: $('.js--examples-slider_next'),
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // Аккордеон сравнения способов продажи
    $('.js--accordion__item').on('click', function(){
        $(this).toggleClass('active');
    });

    // Табы документов
    $('.js--documents-list__item').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        $(this).closest('.js--documents').find('.js--documents-photos__item').removeClass('active');
        $(this).closest('.js--documents').find('.js--documents-photos__item').eq($(this).index()).addClass('active');
    });

    // Параллакс
    // $('.js--ways-of-selling').parallax({imageSrc: '../img/ways-of-selling-background.png'});

    // Модалка
    function openModal() {
        $.fancybox.open($('#delay-form'));
    }
    
    setTimeout(() => {
        if (counter == 0) {
            openModal();
            counter = 1;
        }
    }, 45000);

    let examplesOfJobs = $('.js--examples-of-jobs');
    let counter = 0;

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        var offset = examplesOfJobs.offset().top + examplesOfJobs.height();
        //Если скролл до начала елемента
        // let offset = $element.offset().top
        
        if (scroll > offset && counter == 0) {
            openModal()
            counter = 1;
        }
    });

    // Маска для ввода телефона в формах
    function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
        // 
        // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +	 bugfix by: Michael White (http://crestidg.com)
    
        var i, j, kw, kd, km;
    
        // input sanitation & defaults
        if( isNaN(decimals = Math.abs(decimals)) ){
            decimals = 0;
        }
        if( dec_point == undefined ){
            dec_point = ",";
        }
        if( thousands_sep == undefined ){
            thousands_sep = " ";
        }
    
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    
        if( (j = i.length) > 3 ){
            j = j % 3;
        } else{
            j = 0;
        }
    
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    
    
        return km + kw + kd;
    }
    
        
        [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
        
    });
});