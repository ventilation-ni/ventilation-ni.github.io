// remember if the navbar is docked
var navbarDocked = false;

// store reference to the navbar element
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', function(event) {

    if(navbarDocked && window.scrollY === 0) {
        navbar.classList.remove('docked');
        navbarDocked = false;
    }
    else if(navbarDocked === false && window.scrollY > 0) {
        navbar.classList.add('docked');
        navbarDocked = true;        
    }
});

// activate attribution modal
$('[attribution-modal]').click(function() {
    $('#attribution-modal').modal('show');
});

// scroll to element with name
$('[scroll-to]').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});