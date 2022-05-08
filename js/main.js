var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    }
    else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});


function ShowMessage() {   
    document.getElementById("show").style.display = "block";
    var x = document.getElementById("Textarea").value;
    document.getElementById("demo").innerHTML ="Your message is: <br>"+ x;

}


var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




