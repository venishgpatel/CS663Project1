var slideIndex = 1;

showSlide(slideIndex);

function showSlide(n) {
    slideIndex = n;
    var slide = document.getElementsByClassName('slide');
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[n-1].style.display = "block";
    document.getElementsByClassName('next')[0].style.display = "inline";
    document.getElementsByClassName('previous')[0].style.display = "inline";

    if(n == 1) {
        console.log("previous");
        document.getElementsByClassName('previous')[0].style.display = "none";
    }
    if(n == slide.length) {
        console.log("next");
        document.getElementsByClassName('next')[0].style.display = "none";
    }
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}
