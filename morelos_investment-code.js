window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        }
    });
})

$(document).ready(function() {
  $('#perro').lightSlider({
      item:1,
      slideMargin: 20,
      speed:500,
      auto:false,
      loop:false,
      onSliderLoad: function() {
          $('#image-gallery').removeClass('cS-hidden');
      }  
  });

  $('#gato').lightSlider({
    item:1,
    slideMargin: 20,
    speed:500,
    auto:false,
    loop:false,
    onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
    }  
  });

  $('#raton').lightSlider({
    item:1,
    slideMargin: 20,
    speed:500,
    auto:false,
    loop:false,
    onSliderLoad: function() {
      $('#image-gallery').removeClass('cS-hidden');
    }  
  });
});

/* ===== FUNCIONES DE CAMBIO DE COLONIA ===== */

/* FUNCIONES PARA COL BICENTENARIO */

$( "#col-Bicentenario" ).click(function() {

  /* Cambio de imágenes del carousel */

  $("#img01").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-01").text("Fotografía de la colonia")
  
  $("#img02").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-02").text("Fotografía de la colonia")
  
  $("#img03").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-03").text("Fotografía de la colonia")
  
  $("#img04").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-04").text("Fotografía de la colonia")
  
  $("#img05").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-05").text("Fotografía de la colonia")
  
  $("#img06").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-06").text("Fotografía de la colonia")
  
  $("#img07").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-07").text("Fotografía de la colonia")
  
  $("#img08").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-08").text("Fotografía de la colonia")
  
  $("#img09").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-09").text("Fotografía de la colonia")
  
  /* $("#img10").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"}); */

  /* Cambio de características */

  $("#v-superficie").html("250m<sup>2</sup>");
  $("#v-precioMetro").html("$400<sup>mxn</sup>");
  $("#v-precioTotal").html("$100,000<sup>mxn</sup>");
  $("#v-ubicacion").text("Xoxocotla");

  /* Cambio de descripción */

  $("#v-descHigh").text("Residencial · Comercial");
  $("#v-colName").text("Bicentenario");
  $("#v-colDesc").text("La colonia Bicentenario, ubicada en Xoxocotla, Morelos, se encuentra a un costado de la autopista Cuernavaca-Chilpancingo con accesos a la carretera federal Cuernavaca-Taxco y la carretera federal Alpuyeca-Jojutla que entronca con el circuito de Tequesquitengo. Por su ubicación, cuenta con un alto potencial de desarrollo residencial y comercial.");

  /* Cambio de cotización */

  $("#v-cotHigh").text("Contáctanos para conocer nuestras promociones");
  $("#v-cotDesc").text("Con nuestro sistema de financiamiento directo te damos la oportunidad de pagar tu lote en 3, 6, 9 y hasta 12 mensualidades con aumentos mínimos sobre el precio de contado dependiendo del plazo que elijas.");

  $("#v-pago1m").text("$10,000");
  $("#v-mens1m").text("$90,000");

  $("#v-pago3m").text("$10,500");
  $("#v-mens3m").text("$31,500");

  $("#v-pago6m").text("$11,000");
  $("#v-mens6m").text("$16,500");

  $("#v-pago9m").text("$11,500");
  $("#v-mens9m").text("$11,500");

  $("#v-pago12m").text("$12,000");
  $("#v-mens12m").text("$9,000");

});

/* FUNCIONES PARA COL LOMA LINDA */

$( "#col-LomaLinda" ).click(function() {

  /* Cambio de imágenes del carousel */

  $("#img01").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-01").text("Fotografía de la colonia")
  
  $("#img02").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-02").text("Fotografía de la colonia")
  
  $("#img03").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-03").text("Fotografía de la colonia")
  
  $("#img04").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-04").text("Fotografía de la colonia")
  
  $("#img05").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-05").text("Fotografía de la colonia")
  
  $("#img06").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-06").text("Fotografía de la colonia")
  
  $("#img07").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-07").text("Fotografía de la colonia")
  
  $("#img08").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-08").text("Fotografía de la colonia")
  
  $("#img09").attr({src:"./recursos/photos/arboleda/arboleda3.jpg"});
  $("#img-p-09").text("Fotografía de la colonia")
  
  /* $("#img10").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"}); */

  /* Cambio de características */

  $("#v-superficie").html("200m<sup>2</sup>");
  $("#v-precioMetro").html("$400<sup>mxn</sup>");
  $("#v-precioTotal").html("$80,000<sup>mxn</sup>");
  $("#v-ubicacion").text("Xoxocotla");

  /* Cambio de descripción */

  $("#v-descHigh").text("Residencial · Comercial");
  $("#v-colName").text("Loma Linda");
  $("#v-colDesc").text("Por su ubicación en la zona turística de Morelos, la colonia Loma Linda brinda a sus adquirientes grandes oportunidades de desarrollo comercial y residencial, otorgando a estas inversiones alto potencial de plusvalía. Loma Linda se encuentra ubicada a un costado de la carretera federal Cuernavaca-Taxco y la carretera a Coatetelco, a unos minutos del centro de Alpuyeca.");

  /* Cambio de cotización */

  $("#v-pago1m").text("$8,000");
  $("#v-mens1m").text("$72,000");

  $("#v-pago3m").text("$8,400");
  $("#v-mens3m").text("$25,200");

  $("#v-pago6m").text("$8,800");
  $("#v-mens6m").text("$13,200");

  $("#v-pago9m").text("$9,200");
  $("#v-mens9m").text("$9,200");

  $("#v-pago12m").text("$9,600");
  $("#v-mens12m").text("$7,200");

});

/* FUNCIONES PARA COL ARBOLEDA DEL SUR */

$( "#col-Arboleda" ).click(function() {

  /* Cambio de imágenes del carousel */

  $("#img01").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-01").text("Fotografía de la colonia")
  
  $("#img02").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-02").text("Fotografía de la colonia")
  
  $("#img03").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-03").text("Fotografía de la colonia")
  
  $("#img04").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-04").text("Fotografía de la colonia")
  
  $("#img05").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-05").text("Fotografía de la colonia")
  
  $("#img06").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-06").text("Fotografía de la colonia")
  
  $("#img07").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-07").text("Fotografía de la colonia")
  
  $("#img08").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-08").text("Fotografía de la colonia")
  
  $("#img09").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"});
  $("#img-p-09").text("Fotografía de la colonia")
  
  /* $("#img10").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"}); */

  /* Cambio de características */

  $("#v-superficie").html("200m<sup>2</sup>");
  $("#v-precioMetro").html("$600<sup>mxn</sup>");
  $("#v-precioTotal").html("$120,000<sup>mxn</sup>");
  $("#v-ubicacion").text("Xoxocotla");

  /* Cambio de descripción */

  $("#v-descHigh").text("Quintas · Residencial");
  $("#v-colName").text("Arboleda del Sur");
  $("#v-colDesc").text("Arboleda del Sur apunta a ser una de las colonias más exclusivas de toda la zona turística de Morelos. El urbanismo actual presenta la construcción de quintas y residencias de alto nivel en una colonia con un circuito principal que conecta con la carretera federal Cuernavaca-Taxco.");

  /* Cambio de cotización */

  $("#v-pago1m").text("$12,000");
  $("#v-mens1m").text("$108,000");

  $("#v-pago3m").text("$12,600");
  $("#v-mens3m").text("$37,800");

  $("#v-pago6m").text("$13,200");
  $("#v-mens6m").text("$19,800");

  $("#v-pago9m").text("$13,800");
  $("#v-mens9m").text("$13,800");

  $("#v-pago12m").text("$14,400");
  $("#v-mens12m").text("$10,800");

});

/* FUNCIONES PARA COL VISTA HERMOSA */

$( "#col-VistaHermosa" ).click(function() {

  /* Cambio de imágenes del carousel */

  $("#img01").attr({src:"./recursos/photos/arboleda/arboleda4.jpg"});
  $("#img-p-01").text("Fotografía de la colonia")
  
  $("#img02").attr({src:"./recursos/photos/arboleda/arboleda5.jpg"});
  $("#img-p-02").text("Fotografía de la colonia")
  
  $("#img03").attr({src:"./recursos/photos/arboleda/arboleda6.jpg"});
  $("#img-p-03").text("Fotografía de la colonia")
  
  $("#img04").attr({src:"./recursos/photos/arboleda/arboleda7.jpg"});
  $("#img-p-04").text("Fotografía de la colonia")
  
  $("#img05").attr({src:"./recursos/photos/arboleda/arboleda4.jpg"});
  $("#img-p-05").text("Fotografía de la colonia")
  
  $("#img06").attr({src:"./recursos/photos/arboleda/arboleda5.jpg"});
  $("#img-p-06").text("Fotografía de la colonia")
  
  $("#img07").attr({src:"./recursos/photos/arboleda/arboleda6.jpg"});
  $("#img-p-07").text("Fotografía de la colonia")
  
  $("#img08").attr({src:"./recursos/photos/arboleda/arboleda7.jpg"});
  $("#img-p-08").text("Fotografía de la colonia")
  
  $("#img09").attr({src:"./recursos/photos/arboleda/arboleda8.jpg"});
  $("#img-p-09").text("Fotografía de la colonia")
  
  /* $("#img10").attr({src:"./recursos/photos/arboleda/arboleda2.jpg"}); */

  /* Cambio de características */

  $("#v-superficie").html("200m<sup>2</sup>");
  $("#v-precioMetro").html("$800<sup>mxn</sup>");
  $("#v-precioTotal").html("$160,000<sup>mxn</sup>");
  $("#v-ubicacion").text("Xoxocotla");

  /* Cambio de descripción */

  $("#v-descHigh").text("Quintas · Residencial");
  $("#v-colName").text("Vista Hermosa");
  $("#v-colDesc").text("A un costado del afamado hotel Hacienda Vista Hermosa, y a tan solo 1km de la laguna de Tequesquitengo, la colonia Vista Hermosa, con entrada por una de las carreteras federales más importantes de todo el estado de Morelos, ofrece el lugar ideal para el desarrollo residencial, casas de descanso y quintas de nivel superior.");

  /* Cambio de cotización */

  $("#v-pago1m").text("$16,000");
  $("#v-mens1m").text("$144,000");

  $("#v-pago3m").text("$16,800");
  $("#v-mens3m").text("$50,400");

  $("#v-pago6m").text("$17,600");
  $("#v-mens6m").text("$26,400");

  $("#v-pago9m").text("$18,400");
  $("#v-mens9m").text("$18,400");

  $("#v-pago12m").text("$19,200");
  $("#v-mens12m").text("$14,400");

});