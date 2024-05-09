// Menu Mobile
$(".btn__mobile").click(function() {
  $('.navs__container').addClass('active');
});

$(".close__menu__mobile").click(function() {
  $('.navs__container').removeClass('active');
});

$(".nav__menu a").click(function() {
    $('.navs__container').removeClass('active');
});


/*Scroll*/
$('.scroll').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - 100;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});


/*Sticky*/
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('scroll');
    }
    else{
        $('header').removeClass('scroll');
    }
})

/*Counter*/
var a = 0;
$(window).scroll(function () {
    var oTop = $(".container__numeros").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".number").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-to");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 1500,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("pt-br")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("pt-br")
                        );
                    }
                }
            );
        });
        a = 1;
    }
});



/*Slick*/
var areas = {
    init:function(){
        $('.container__areas').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            arrows: false,
            dots: true,
            responsive: [
                  {
                          breakpoint: 767,
                          settings: 'unslick'
                  }
            ]
        });
    }
  }


/*Whatsapp */
function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5524988254644?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }

/*Mask Telefone */
$(function(){
    var behavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
      onKeyPress: function (val, e, field, options) {
          field.mask(behavior.apply({}, arguments), options);
      }
    };
  
    $('#telefone').mask('(00) 0000-00009')
  })