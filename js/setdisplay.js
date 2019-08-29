window.onload = function () {

    var btn = document.getElementById("setbtn");
    var color = btn.style.fontSize;


    btn.onmousedown = function () {

        btn.style.fontSize=19;

    }
    btn.onmouseup = function () {

       btn.style.backgroundColor = color;
    };

}