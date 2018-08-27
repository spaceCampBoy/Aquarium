/*global $ */
//// NO repeat background
$("body").css({
    background: "url(../images/aquarium.jpg)"
});

//////B1//////
var randb1 = Math.floor(Math.random() * 1000);
var randb2 = Math.floor(Math.random() * 1000);
var randb3 = Math.floor(Math.random() * 1000);
(function doB1() {
    'use strict';
    randb1 = Math.floor(Math.random() * 1000);
    $('#bubble1Id').css({
        "left": randb1,
        "top": 690
    }).show().animate({
        top: "+=-800"
    }, 4300, 'linear', doB1);
}());
///Hides when clicked
$("#bubble1Id").click(function () {
    'use strict';
    $("#bubble1Id").hide();
    
});
/////////B2//////
(function doB2() {
    'use strict';
    randb1 = Math.floor(Math.random() * 1000);
    $('#bubble2Id').css({
        "left": randb2,
        "top": 690
    }).show().animate({
        top: "+=-800"
    }, 4900, 'linear', doB2);
}());
$("#bubble2Id").click(function () {
    'use strict';
    $("#bubble2Id").hide();
});
////////B3////////
(function doB3() {
    'use strict';
    randb1 = Math.floor(Math.random() * 1000);
    $('#bubble3Id').css({
        "left": randb3,
        "top": 690
    }).show().animate({
        top: "+=-800"
    }, 4000, 'linear', doB3);
}());
$("#bubble3Id").click(function () {
    'use strict';
    $("#bubble3Id").hide();
});

// the golden fish 
$("#fish1Id").on("dblclick", function () {
    'use strict';
    $("#fish1Id").css({
        "width": "+=100",
        "height": "+=100"
    });
});



// the Blue fish


////   Gold fish moves
(function moveMe() {
    'use strict';
    $("#fish1Id").css({
        "width": 250,
        "height": 250
    }).animate({
        left: Math.floor(Math.random() * 1000),
        top: Math.floor(Math.random() * 600)
    }, 3500, function () {
        moveMe();
    });
    
    
    $("body").on("click", function () {
        var x = event.screenX,
            y = event.screenY;
        $("#fish1Id").stop();
        $("#fish1Id").animate({
            left: x - 140,
            top: y - 170
        }, 500, function () {
            moveMe();
        });
    });
}());


//// Blue fish moves
(function moveMe2() {
    'use strict';
    $("#fish2Id").css({
        "width": 150,
        "height": 150
    }).animate({
        left: Math.floor(Math.random() * 1000),
        top: Math.floor(Math.random() * 600)
    }, 3500, function () {
        moveMe2();
    }).on("mouseenter", function () {
        $("#fish2Id").stop();
        $("#fish2Id").animate({
            left: Math.floor(Math.random() * 1000),
            top: Math.floor(Math.random() * 600)
        }, 500, function () {
            moveMe2();
        });
    });
}());



