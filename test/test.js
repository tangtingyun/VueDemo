

window.onload = function (params) {

    var b = document.getElementsByClassName("iii");
    console.dir(b);


    var a = b[0];
    console.dir(a);
    console.log(a.attributes);
    console.log(a.attributes["zyf"].key);
    console.log(a.attributes["zyf"].value);
}

function onGap() {
    console.log(arguments);
}


function test() {
    console.log("test");
}