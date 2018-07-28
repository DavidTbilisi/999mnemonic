var vars = {
    topline: {},
    minMax: {
        min: 0,
        max: 11,
        minimum: $("#min"),
        maximum: $("#max"),
    },
    main: {
        img: $(".body--main-img"),
        cover: $(".body--main-img-cover"),
    },
    buttons: {
        yes: $(".body--button--correct"),
        no: $(".body--button--wrong"),
        learn: $(".body--topline--learn"),
        remLearn: $(".learn"),
    },
    scores: {
        win: 1,
        lose: 1,
        red: $(".body--red")
    },
    library: {}
};

$.get('js/999.json', function(d){vars.library = d[0];});


function addZeros(numb) {
    numb = numb<10? "00" + numb : "0" + numb;
    return numb;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function getImg() {
    var numb, iMin = vars.minMax.minimum, iMax = vars.minMax.maximum;
    var inputMinIsEmpty = iMin.val() === "";
    var inputMaxIsEmpty = iMax.val() === "";
    var localMinIsEmpty = localStorage.minimum == undefined;
    var localMaxIsEmpty = localStorage.maximum == undefined;
    // // console.log('inputMinIsEmpty? - ', inputMinIsEmpty);
    // // console.log('inputMaxIsEmpty? - ', inputMaxIsEmpty);
    // // console.log('localMinIsEmpty? - ', localMinIsEmpty);
    // // console.log('localMaxIsEmpty? - ', localMaxIsEmpty);
    // setting min max of inputs;
    if (inputMinIsEmpty && inputMaxIsEmpty) {
        if (localMinIsEmpty && localMinIsEmpty) {
            numb = getRandomInt(vars.minMax.min, vars.minMax.max);
            // console.warn('from default parameters');
        }
        else {
            numb = getRandomInt(localStorage.minimum, localStorage.maximum);
            // console.warn('from localStorage');
            iMin.val(localStorage.minimum);
            iMax.val(localStorage.maximum);
        }
    }
    else {
        numb = getRandomInt(iMin.val(), iMax.val());
        localStorage.minimum = iMin.val();
        localStorage.maximum = iMax.val();
        // console.warn('from inputs');
    }
    // begin from 00 -s 
    numb = addZeros(numb);
    return numb;
}
function imgDigitsToName(digits) {
    return vars.library[digits];
}
function imgDigitsToPath(digits) {
    var src = vars.main.img[0].src;

    return src.slice(0, src.length - 7) + digits + ".jpg";
}
function generateArray(from, to) {
    var element = [];
    for (var index = from; index <= to; index++) {
        index = addZeros(index);
        element.push(index);
    }
    return element;
}
function generateImageLinks(from, to) {
    var links = [];
    var arr = generateArray(from, to);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        links.push(imgDigitsToPath(i));
    }
    return links;
}
function appendImages(elem, min, max) {
    var images = generateImageLinks(min, max);
    for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
        var image = images_1[_i];
        $(elem).append("<img class='img-to-remove' src='" + image + "'>");
    }
    // console.log(min, max, images);
}
function delElements(className) {
    $(className).remove();
}
function incScore(a) {
    return vars.scores[a]++;
}
function showScores(a, b) {
    $(vars.buttons[a]).html(b);
}
function showDigits(digits) {
    $(vars.main.cover).html(digits);
}
function change() {
    var imageDigits = getImg();
    // console.log(
    // imageDigits,
        imgDigitsToName(imageDigits),
        imgDigitsToPath(imageDigits),
        showDigits(imageDigits);
        
    $(vars.main.img).attr('src', imgDigitsToPath(imageDigits));
    setTimeout(function () {
        $(vars.main.img).attr('alt', imgDigitsToName(imageDigits));
    }, 1000);
    return true;
}
function redMoves(winlose) {
    var red = vars.scores.red;
    if (winlose == "win") {
        $(red).width($(red).width() - 2);
    }
    else {
        $(red).width($(red).width() + 2);
    }
}
function btnCliecked(winlose, yesno) {
    change();
    var wlScore = incScore(winlose);
    showScores(yesno, wlScore);
    redMoves(winlose);
    vars.main.cover.show();
}
// button Events
vars.buttons.no.click(function () { btnCliecked("lose", "no"); });
vars.buttons.yes.click(function () { btnCliecked("win", "yes"); });
vars.buttons.learn.click(function () { appendImages('.learn', vars.minMax.minimum.val(), vars.minMax.maximum.val()); });
vars.buttons.remLearn.click(function () { delElements('.img-to-remove'); });
vars.main.cover.click(function () {
    $(this).hide();
});
change();
//# sourceMappingURL=main.js.map
