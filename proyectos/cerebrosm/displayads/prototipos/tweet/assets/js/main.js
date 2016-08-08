function animationPrimerCanvasText(canvas, dashLen, speed, txt, x, y, font, lineWidth, color){
  var ctx = document.getElementById(canvas).getContext("2d");
  var dashLen = dashLen, dashOffset = dashLen, speed = speed, txt = txt, x = x, i = 0;
  ctx.font = font;ctx.lineWidth = lineWidth; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;ctx.strokeStyle = ctx.fillStyle = color;
  (function topText() {
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, y);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(topText);             // animate
    else {
      ctx.fillText(txt[i], x, y);                               // fill final letter
      dashOffset = dashLen;                                      // prep next char
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
      ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
      ctx.rotate(Math.random() * 0.005);                         // random rotation
      if (i < txt.length) requestAnimationFrame(topText);
    }
  })();
}
function animationSegundoCanvasText(canvas, dashLen, speed, txt, x, y, font, lineWidth, color){
  var ctx = document.getElementById(canvas).getContext("2d");
  var dashLen = dashLen, dashOffset = dashLen, speed = speed, txt = txt, x = x, i = 0;
  ctx.font = font;ctx.lineWidth = lineWidth; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;ctx.strokeStyle = ctx.fillStyle = color;
  (function topText() {
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, y);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(topText);             // animate
    else {
      ctx.fillText(txt[i], x, y);                               // fill final letter
      dashOffset = dashLen;                                      // prep next char
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
      ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
      ctx.rotate(Math.random() * 0.005);                         // random rotation
      if (i < txt.length) requestAnimationFrame(topText);
    }
  })();
}
function animationTerceroCanvasText(canvas, dashLen, speed, txt, x, y, font, lineWidth, color){
  var ctx = document.getElementById(canvas).getContext("2d");
  var dashLen = dashLen, dashOffset = dashLen, speed = speed, txt = txt, x = x, i = 0;
  ctx.font = font;ctx.lineWidth = lineWidth; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;ctx.strokeStyle = ctx.fillStyle = color;
  (function topText() {
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, y);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(topText);             // animate
    else {
      ctx.fillText(txt[i], x, y);                               // fill final letter
      dashOffset = dashLen;                                      // prep next char
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
      ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
      ctx.rotate(Math.random() * 0.005);                         // random rotation
      if (i < txt.length) requestAnimationFrame(topText);
    }
  })();
}
function animationCuartoCanvasText(canvas, dashLen, speed, txt, x, y, font, lineWidth, color){
  var ctx = document.getElementById(canvas).getContext("2d");
  var dashLen = dashLen, dashOffset = dashLen, speed = speed, txt = txt, x = x, i = 0;
  ctx.font = font;ctx.lineWidth = lineWidth; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;ctx.strokeStyle = ctx.fillStyle = color;
  (function topText() {
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, y);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(topText);             // animate
    else {
      ctx.fillText(txt[i], x, y);                               // fill final letter
      dashOffset = dashLen;                                      // prep next char
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
      ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
      ctx.rotate(Math.random() * 0.005);                         // random rotation
      if (i < txt.length) requestAnimationFrame(topText);
    }
  })();
}

/*
 * Timeout to trigger page_1_1
 */
setTimeout(function(){
   page_1();
}, 3000);

function page_1(){
  var page_1 = document.getElementById('page_1');
  page_1.addEventListener("animationend", callback_1, false);
  page_1.addEventListener("webkitAnimationEnd", callback_1, false);
  page_1.addEventListener("oanimationend", callback_1, false);
  page_1.addEventListener("MSAnimationEnd", callback_1, false);
  page_1.className = "page_1 animated";
}

function callback_1() {
  var page_1 = document.getElementById('page_1');
  page_1.className = 'page_1 hidden';

  /*
   * Call to animation canvas
   */
  animationPrimerCanvasText("first-layer", 300, 10, "#Molletes", 30, 60, "30px Comic Sans MS, cursive, TSCu_Comic, sans-serif", 3, "#444444");
  animationSegundoCanvasText("second-layer", 300, 12, "#Guacamole", 10, 110, "40px Comic Sans MS, cursive, TSCu_Comic, sans-serif", 3, "#3b94d9");
  animationTerceroCanvasText("third-layer", 300, 20, "#Chilango #exóticos", 40, 160, "20px Comic Sans MS, cursive, TSCu_Comic, sans-serif", 3, "#111111");
  animationCuartoCanvasText("fourth-layer", 300, 20, "#conócelos", 20, 210, "32px Comic Sans MS, cursive, TSCu_Comic, sans-serif", 3, "#111111");

  /*
   * Timeout to trigger page_1_2
   */
   setTimeout(function(){
      page_1_1();
   }, 5000);

}

function page_1_1(){
  var page_1_1 = document.getElementById('page_1_1');
  page_1_1.addEventListener("animationend", callback_1_1, false);
  page_1_1.addEventListener("webkitAnimationEnd", callback_1_1, false);
  page_1_1.addEventListener("oanimationend", callback_1_1, false);
  page_1_1.addEventListener("MSAnimationEnd", callback_1_1, false);
  page_1_1.className = "page_1_1 animated";
}

function callback_1_1() {
  var page_1_1 = document.getElementById('page_1_1');
  page_1_1.className = 'page_1_1 hidden';
  var page_1_2 = document.getElementById('page_1_2');
  page_1_2.className = 'page_1_2 visible';
}
