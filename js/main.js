var vars = {
    topline: {},
    minMax: {
        min: 0,
        max: 11
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
    library: new Object
};


$.ajax({
    dataType: "json",
    url: 'js/99.json',
    success: function (d) {
        vars.library = d
    }
});



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function is99() {
    return Object.keys(vars.library[0]).length < 102;
}

function getImg() {

    var numb = getRandomInt(vars.minMax.min, vars.minMax.max);
    // 999?
    if (!is99()) {
        if (numb < 10) {
            numb = "00" + numb;
        } else if (numb < 100) {
            numb = "0" + numb;
        }
    } else {
        if (numb < 10) {
            numb = "0" + numb;
        }
    }
    return numb;
}


function imgDigitsToName(digits) {
    return vars.library[0][digits];
}

function imgDigitsToPath(digits) {
    if (is99()) {
        vars.main.img[0].src = "./img/low/000.jpg";
        return vars.main.img[0].src.slice(0, vars.main.img[0].src.length - 7) + digits + ".jpg"
    } else {
        vars.main.img[0].src = "./img/low/00.jpg";
        return vars.main.img[0].src.slice(0, vars.main.img[0].src.length - 6) + digits + ".jpg"
    }
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

    console.log(
        imageDigits,
        imgDigitsToName(imageDigits),
        imgDigitsToPath(imageDigits),
        showDigits(imageDigits)
    );

    $(vars.main.img).attr('src', imgDigitsToPath(imageDigits));

    setTimeout(function () {
        $(vars.main.img).attr('alt', imgDigitsToName(imageDigits));
    }, 1000);

    return true;
}

function redMoves(winlose) {
    if (winlose == "win") {
        $(vars.scores.red).width($(vars.scores.red).width() - 2);
    } else {
        $(vars.scores.red).width($(vars.scores.red).width() + 2);
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
vars.buttons.no.click(function () {
    btnCliecked("lose", "no");
});
vars.buttons.yes.click(function () {
    btnCliecked("win", "yes");
});


vars.main.cover.click(function () {
    $(this).hide();
});
vars.main.img.click(function () {
    $(vars.main.cover).show();
});


// start App;
setTimeout(() => {
    change();
}, 2e3);