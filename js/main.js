var vars = {
    topline:{},
    main:{
        img:$(".body--main-img"),
        cover:$(".body--main-img-cover"),
    },
    buttons:{
        yes: $(".body--button--correct"),
        no: $(".body--button--wrong"),
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
function getImg () {
let numb = getRandomInt(0,100) ;
if (numb < 10) {
    numb = "00"+numb;
}
else if (numb < 100) {
    numb = "0"+numb;
}

return   numb + ".jpg";
}
  // vars.main.img[0].src = vars.main.img[0].src.slice(-7)

//   setInterval(function() {
//       console.log(getImg());
//   }, 100) 