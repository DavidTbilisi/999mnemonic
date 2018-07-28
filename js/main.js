var vars = {
    topline: {},
    minMax: {
        min: 0,
        max: 11,
        minimum: $("#min"),
        maximum: $("#max")
    },
    main: {
        img: $(".body--main-img"),
        cover: $(".body--main-img-cover"),
    },
    buttons: {
        yes: $(".body--button--correct"),
        no: $(".body--button--wrong"),
    },
    scores: {
        win: 1,
        lose: 1,
        red: $(".body--red")
    },
    library: {}
};
<<<<<<< HEAD


$.ajax({
    dataType: "json",
    url: 'js/99.json',
    success: function (d) {
        vars.library = d[0];
    }
});



=======
>>>>>>> parent of a5ae233... done
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function is99() {
    return Object.keys(vars.library).length < 102;
}

function addZeros(numb) {
    numb = numb < 10 ? "00" + numb : "0" + numb;
    return numb;
}

function getImg() {
<<<<<<< HEAD

    var numb, 
    iMin = vars.minMax.minimum,
    iMax = vars.minMax.maximum;
var inputMinIsEmpty = iMin.val() === "";
var inputMaxIsEmpty = iMax.val() === "";
var localMinIsEmpty = localStorage.minimum == undefined;
var localMaxIsEmpty = localStorage.maximum == undefined;
var numb = getRandomInt(vars.minMax.min, vars.minMax.max);

    // 999?
    if (!is99()) {
        if (numb < 10) {
            numb = "00" + numb;
        } else if (numb < 100) {
            numb = "0" + numb;
        }
    } else {
        numb = getRandomInt(vars.minMax.minimum.val(), vars.minmax.maximum.val());
        localStorage.minimum = vars.minmax.minimum.val();
        localStorage.maximum = vars.minmax.maximum.val();
        // console.warn('from inputs');
        if (numb < 10) {
            numb = "0" + numb;
        }
=======
    var numb, 
        iMin = vars.minMax.minimum, 
        iMax = vars.minMax.maximum;


    let  inputMinIsEmpty = iMin.val() === "";
    let  inputMaxIsEmpty = iMax.val() === "";

    let localMinIsEmpty = localStorage.minimum == undefined;
    let localMaxIsEmpty = localStorage.maximum == undefined;

    
    // console.log('inputMinIsEmpty? - ', inputMinIsEmpty);
    // console.log('inputMaxIsEmpty? - ', inputMaxIsEmpty);

    // console.log('localMinIsEmpty? - ', localMinIsEmpty);
    // console.log('localMaxIsEmpty? - ', localMaxIsEmpty);


    
        // setting min max of inputs;
        if(inputMinIsEmpty && inputMaxIsEmpty) {
            if ( localMinIsEmpty && localMinIsEmpty){
                numb = getRandomInt(vars.minMax.min, vars.minMax.max);
                console.warn('from default parameters');
            }else{
                numb = getRandomInt(localStorage.minimum, localStorage.maximum);
                console.warn('from localStorage');
                iMin.val(localStorage.minimum);
                iMax.val(localStorage.maximum);
            }
          
        } else{
            numb = getRandomInt(iMin.val(), iMax.val());
            localStorage.minimum = iMin.val();
            localStorage.maximum = iMax.val();
            console.warn('from inputs');
        }
    // begin from 00 -s 
    if (numb < 10) {
        numb = "00" + numb;
    }
    else if (numb < 100) {
        numb = "0" + numb;
>>>>>>> parent of a5ae233... done
    }
    return numb;
}


function imgDigitsToName(digits) {
    return vars.library[digits];
}

function imgDigitsToPath(digits) {
<<<<<<< HEAD
    var src = vars.main.img[0].src;
    return src.slice(0, src.length - 7) + digits + ".jpg";
}


=======
    return vars.main.img[0].src.slice(0, vars.main.img[0].src.length - 7) + digits + ".jpg";
}
>>>>>>> parent of a5ae233... done
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
<<<<<<< HEAD

    console.log(
        imageDigits,
        imgDigitsToName(imageDigits),
        imgDigitsToPath(imageDigits),
        showDigits(imageDigits)
    );

=======
    console.log(imageDigits, imgDigitsToName(imageDigits), imgDigitsToPath(imageDigits), showDigits(imageDigits));
>>>>>>> parent of a5ae233... done
    $(vars.main.img).attr('src', imgDigitsToPath(imageDigits));

    setTimeout(function () {
        $(vars.main.img).attr('alt', imgDigitsToName(imageDigits));
    }, 1000);

    return true;
}

function delElements(className) {
    $(className).remove();
}


function redMoves(winlose) {
    var red = vars.scores.red;
    if (winlose == "win") {
        $(red).width($(red).width() - 2);
    } else {
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
<<<<<<< HEAD
vars.buttons.no.click(function () {
    btnCliecked("lose", "no");
});
vars.buttons.yes.click(function () {
    btnCliecked("win", "yes");
});


=======
vars.buttons.no.click(function () { btnCliecked("lose", "no"); });
vars.buttons.yes.click(function () { btnCliecked("win", "yes"); });
>>>>>>> parent of a5ae233... done
vars.main.cover.click(function () {
    $(this).hide();
});
vars.main.img.click(function () {
    $(vars.main.cover).show();
});
vars.buttons.learn.click(function () {
    appendImages('.learn', vars.minMax.minimum.val(), vars.minMax.maximum.val());
});
vars.buttons.remLearn.click(function () {
    delElements('.img-to-remove');
});

// start App;
setTimeout(() => {
    change();
}, 2e3);