

//Bubble movement

function bubbleMove(itemRef) {
    'use strict';
    var randomNumber1 = Math.floor(Math.random() * ($(window).width() - 150)),
        randomNumber2 = Math.floor(Math.random() * 1000);// for differenciating between Speeds
    itemRef.offset({
        "left": randomNumber1,
        "top": $(window).height()
    }).show().animate({
        top: -100
    }, 4500 - randomNumber2, 'linear', function () {
        bubbleMove(itemRef);
    });
}
bubbleMove($("#bubble1Id"));
bubbleMove($("#bubble2Id"));
bubbleMove($("#bubble3Id"));





//Bubble fadding Out effect 

function bubbleClick(itemRef) {
    'use strict';
    itemRef.click(function () {
        itemRef.stop(true);
        itemRef.fadeOut(1000, "linear", function () {
            bubbleMove(itemRef);
        });
    });
}
bubbleClick($("#bubble1Id"));
bubbleClick($("#bubble2Id"));
bubbleClick($("#bubble3Id"));




// fish movements

function move(itemRef) {
    'use strict';
    itemRef.animate({
        left: Math.floor(Math.random() * ($(window).width() - 150)),
        top: Math.floor(Math.random() * ($(window).height() - 150))
    }, 3500, function () {
        move(itemRef);
    });
}
move($("#fish1Id"));
move($("#fish2Id"));




// goldfish double click focus effect

$("#fish1Id").on("dblclick", function () {
    'use strict';
    $("#fish1Id").css({
        "width": "+=100",
        "height": "+=100"
    });
    setInterval(function () {
        $("#fish1Id").css({
            "width": "250px",
            "height": "250px"
        });
    }, 2000);
});




// goldfish moving to click position

$(window).on("click", function () {
    var x = event.screenX,
        y = event.screenY;
    $("#fish1Id").stop();
    $("#fish1Id").animate({
        left: x - 140,// -140 and -170 for making it for accentric
        top: y - 170
    }, 500, function () {
        move($("#fish1Id"));
    });
});




//// Bluefish escape

(function blueFishEscape() {
    'use strict';
    $("#fish2Id").on("mouseenter", function () {
        $("#fish2Id").stop();
        $(this).animate({
            left: Math.floor(Math.random() * ($(window).width() - 150)),
            top: Math.floor(Math.random() * ($(window).height() - 150))
        }, 500, function () {
            move($("#fish2Id"));
        });
    });
}());
