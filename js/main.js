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
return numb;
}
function changeImg(){
  return vars.main.img[0].src.split("000.jpg")[0] + getImg() + ".jpg"
}





