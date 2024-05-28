var isAnimating = false;

document.getElementById("starter").focus();
document.body.addEventListener('onload', focus());

document.addEventListener('mousedown', function(event) {
    if (!isAnimating && !sessionStorage.getItem('animationPlayed')) {
        isAnimating = true;
        showTime();
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13 && !isAnimating && !sessionStorage.getItem('animationPlayed')) {
        isAnimating = true;
        showTime();
    }
});

function showTime() {
    var curtain = document.getElementById("curtain");
    curtain.className = "open";
    
    var scene = document.getElementById("scene");
    scene.className = "expand";
    
    var starter = document.getElementById("starter");
    starter.className = "fade-out";
    
    setTimeout(function() {
        starter.style.display = 'none';
        isAnimating = false;  // Setze isAnimating auf false, sobald die Animation abgeschlossen ist
        sessionStorage.setItem('animationPlayed', 'true'); // Setze den sessionStorage Eintrag, dass die Animation abgespielt wurde

        // Weiterleitung zur Index-Seite
        window.location.href = 'http://fk01dev.arz.oeaw.ac.at/sb/';
    }, 2000);
}
