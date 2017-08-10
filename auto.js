var data = [
  {
    "id":1,
    "text":"Por entenderme cuando tengo un problema",
  },
  {
    "id":2,
    "text":"Por hacer que este bien con tan solo decir que me quieres",
  },
  {
    "id":3,
    "text":"Por ser la mejor novia que ha existido jamas",
  },
  {
    "id":4,
    "text":"Por haber estado a mi lado cuando mas falta me hacía",
  },
  {
    "id":5,
    "text":"Por creer en mi tanto como yo creo en ti",
  },
  {
    "id":6,
    "text":"Por saber como hacerme sonreír",
  },
  {
    "id":7,
    "text":"Por querer estar conmigo",
  },
  {
    "id":8,
    "text":"Por alegrarme las mañanas con tus buenos días",
  },
  {
    "id":9,
    "text":"Por tus regalos que hacen recordar cuanto te quiero cuando tengo algún problema",
  },
  {
    "id":10,
    "text":"Por ser como eres y por no cambiar, porque eres igual de perfecta que el primer dia",
  },
  {
    "id":11,
    "text":"Por tus mimos que me encantan",
  },
  {
    "id":12,
    "text":"Por tus besos que dicen cuanto me quieres sin necesidad de palabras",
  },
  {
    "id":13,
    "text":"Por acordarte de mi cuando no estoy a tu lado",
  },
  {
    "id":14,
    "text":"Por darme ánimos para conseguir mis metas, que quiero cumplir a tu lado",
  },
  {
    "id":15,
    "text":"Por no tener vergüenza a demostrarme cuanto me quieres",
  },
  {
    "id":16,
    "text":"Por la confianza que tenemos",
  },
  {
    "id":17,
    "text":"Por hacer que los problemas no sean problemas, si no tonterías que se pasan en 10 minutos",
  },
  {
    "id":18,
    "text":"Por enamorarme como lo haces",
  },
  {
    "id":19,
    "text":"Por las promesas que siempre cumples",
  },
  {
    "id":20,
    "text":"Por saber calmarme cuando estoy nervioso o perdido",
  },
  {
    "id":21,
    "text":"Por querer venir a verme siempre una vez más",
  },
  {
    "id":22,
    "text":"Por querer formar parte de mi vida",
  },
  {
    "id":23,
    "text":"Por poder cumplir mis sueños a tu lado",
  },
  {
    "id":24,
    "text":"Por dejarme hacer que estés mejor y verte sonreír",
  },
  {
    "id":25,
    "text":"Por llamarme para aclarar las cosas cuando más hace falta",
  },
  {
    "id":26,
    "text":"Por abrazarme o besarme de la nada",
  },
  {
    "id":27,
    "text":"Por tus escritos que a veces me haces que hacen que el día sea 1000 veces mejor",
  },
  {
    "id":28,
    "text":"Por tu sinceridad y comprensión",
  },
  {
    "id":29,
    "text":"Por dejarme hacer que estés mejor y verte sonreír",
  },
  {
    "id":30,
    "text":"Por hacer las cosas que sabes que me gustan para hacerme feliz",
  },
  {
    "id":31,
    "text":"Por demostrarme que me quieres a mas que a nada como no lo hiciste con nadie",
  },
  {
    "id":32,
    "text":"Por querer que sea parte de tu vida para hacer las cosas juntos",
  },
  {
    "id":33,
    "text":"Por superar cualquier problema que se nos ponga delante",
  },
  {
    "id":34,
    "text":"Cariño te quiero de la misma manera en la que tu me quieres, así que simplemente...",
  },
  {
    "id":35,
    "text":"<b>Te amo por quien eres, y jamás dejaré de hacerlo</b>",
    "final":true,
  }
],
contentStr = "";

data.forEach(function(o){
  if (o.final == true) {
    contentStr += '<!-- tarjeta ' + o.id + ' --><section id="' + o.id + '"><div style="width: 100%; height: 80%;" class="grey lighten-5"><div class="hide-on-med-and-up" style="height: 100%; position: absolute; width: 100%; z-index: 1; opacity: 0.3;"><div class="parallax-container" style="height: 100%;"><div class="parallax"><img src="https://sodge.ml/mar/img/' + o.id + '.jpg"></div></div></div><div class="valign-wrapper" style="width: 100%; height: 100%; z-index: 2;"><div class="container" style="z-index: 3;"><div class="row" style="margin-bottom: 0px; z-index: 4;"><div class="col m8 s12" style="height: 100%;"><center><h4>' + o.text + ' ' + randomHeart() + '</h4></center></div><div class="col m4 hide-on-small-only" style="background-image: url(img/' + o.id + '.jpg); height: 400px; background-size: cover; background-position: center;"><!-- background --></div></div></div></div></div><a data-scroll href="#' + final() +'"><div class="waves-effect" style="height: 20%; width: 100%; z-index: 3; background-color: rgba(0, 0, 0, 0.1)"><div class="valign-wrapper" style="width: 100%; height: 100%;"><div style="width: 100%;"><center><i class="material-icons medium">keyboard_arrow_up</i></center></div></div></div></a></section><!-- tarjeta ' + o.id + ' -->';
  } else {
    contentStr += '<!-- tarjeta ' + o.id + ' --><section id="' + o.id + '"><div style="width: 100%; height: 80%;" class="grey lighten-5"><div class="hide-on-med-and-up" style="height: 100%; position: absolute; width: 100%; z-index: 1; opacity: 0.3;"><div class="parallax-container" style="height: 100%;"><div class="parallax"><img src="https://sodge.ml/mar/img/' + o.id + '.jpg"></div></div></div><div class="valign-wrapper" style="width: 100%; height: 100%; z-index: 2;"><div class="container" style="z-index: 3;"><div class="row" style="margin-bottom: 0px; z-index: 4;"><div class="col m8 s12" style="height: 100%;"><center><h4>' + o.text + ' ' + randomHeart() + '</h4></center></div><div class="col m4 hide-on-small-only" style="background-image: url(img/' + o.id + '.jpg); height: 400px; background-size: cover; background-position: center;"><!-- background --></div></div></div></div></div><a data-scroll href="#' + number(o.id) +'"><div class="waves-effect" style="height: 20%; width: 100%; z-index: 3; background-color: rgba(0, 0, 0, 0.1)"><div class="valign-wrapper" style="width: 100%; height: 100%;"><div style="width: 100%;"><center><i class="material-icons medium">keyboard_arrow_down</i></center></div></div></div></a></section><!-- tarjeta ' + o.id + ' -->';
  }
});
document.getElementById('data').innerHTML = contentStr;

function number(x){
  return x+1;
}

function final(){
  return "presentation";
}

function randomHeart(){
  var heartArray = ['💓', '💗', '💚', '💞', '💙', '💜', '💝', '💖', '💘', '💛', '🖤', '💕', '❤️ ', '🐼'];
  var randEmoji = heartArray[Math.floor(Math.random() * heartArray.length)];
  return randEmoji;
}
