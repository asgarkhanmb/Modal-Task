"use strict";

var modal = document.getElementById('simpleModal');
var btn = document.getElementById('btn');
var closeBtn = document.getElementById('closeBtn');

btn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}