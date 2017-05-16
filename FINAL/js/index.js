var slideIndex = 0;
var sliding = true;
var validtid;
var progress = 0;
var messageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    setMessage();
    changeBar(0);
    validtid = setInterval(carousel, 40);
});

function setMessage() {
    var x = document.getElementsByClassName("front-message"); 
    var previous = messageIndex - 1;
    if (previous < 0) previous = 6;     
    x[messageIndex].className += " picked";
    x[previous].className = "front-message";
    messageIndex++;
    if (messageIndex > 6) messageIndex = 0;
}

function staticMessage(index) {
    var x = document.getElementsByClassName("front-message");
    var currentMsg = slideIndex;
    if (currentMsg != index) {
        x[index].className += " picked";
        x[currentMsg].className = "front-message";
    }
    messageIndex = index;
}

function carousel() {
    progress++;
    var n = document.getElementsByClassName("progress");
    
    n[slideIndex].style.width = progress + "%";

    if (progress == 100) {
        setMessage();
    }

    if (sliding && progress == 100) {
        var x = document.getElementsByClassName("slides");
        var y = document.getElementsByClassName("slidecopy");
        
        if (slideIndex == 6) {
            changeBar(0);
        }
        else {
            changeBar(slideIndex + 1)
        }

        progress = 0;
        for (var i = 0; i < n.length; i++) {
            n[i].style.width = 0;
        }

        slideIndex++;
        if (slideIndex >= x.length) { slideIndex = 0; }
    }    
}

function pick(bar) {
    clearInterval(validtid);
    validtid = false;
    var n = document.getElementsByClassName("progress");
    for (var i = 0; i < n.length; i++) {
        n[i].style.width = 0;
    }
    staticMessage(bar);
    changeBar(bar);
    slideIndex = bar;
    console.log(slideIndex);
}

function changeBar(bar) {
    var x = document.getElementsByClassName("progress");
    for (var i = 0; i < x.length; i++) {
        if (i == bar) {
            x[i].style.width = "100%";
        }
    }
    changeSlide(bar);
}

function changeSlide(num) {
    var x = document.getElementsByClassName("slides");
    var y = document.getElementsByClassName("slidecopy");
    currentSlide = slideIndex;
    for (var i = 0; i < x.length; i++) {
        if (i == num) {
            x[i].className = "slides current";
        }
        else {
            x[i].className = "slides next";
        }
    }
    for (var i = 0; i < y.length; i++) {
        if (i == currentSlide) {
            y[i].style.display = "block";
        }
        else {
            y[i].style.display = "none";
        }
    }    
}

function goBack() {
    if (slideIndex == 0) {
        pick(6);
    }
    else {
        pick(slideIndex - 1);
    }
}

function goNext() {
    if (slideIndex == 6) {
        pick(0);
    }
    else {
        pick(slideIndex + 1);
    }
}

function goTo() {
    window.location.href = "./" + pages[slideIndex] + ".html";
}
