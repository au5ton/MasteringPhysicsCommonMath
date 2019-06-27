// ==UserScript==
// @name         MasteringPhysicsCommonMath
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.masteringphysics.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/mathjs@6.0.1/dist/math.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    window.g = 9.81;
    window.pi = Math.PI;
    window.R = 8.3145; // gas constant
    window.avogadro = 6.0221409e+23;
    window.k = 1.38064852e-23; // boltzmann constant
    window.toDegrees = (angle) => angle * (180/Math.PI);
    window.toRadians = (angle) => angle * (Math.PI / 180);
    window.tan = x => Math.tan(window.toRadians(x));
    window.sin = x => Math.sin(window.toRadians(x));
    window.cos = x => Math.cos(window.toRadians(x));
    window.atan = x => window.toDegrees(Math.atan(x));
    window.asin = x => window.toDegrees(Math.asin(x));
    window.acos = x => window.toDegrees(Math.acos(x));
    window.sq = x => x*x;
    window.pow = (a,b) => Math.pow(a,b);
    window.sqrt = Math.sqrt;
    window.abs = Math.abs;
    window.enot = (n) => n.toExponential();

    waitForKeyElements('.table-assignment tbody', () => {
        let rows = document.querySelectorAll('.table-assignment tbody tr');
        if(!rows) {
            return
        }
        for(let i = 0; i < rows.length; i++) {
            if(rows[i].cells) {
                for(let j = 0; j < rows[i].cells.length; j++) {
                    if(rows[i].cells[j].getAttribute('class') === 'points') {
                        if(!rows[i].cells[j].textContent.includes('Practice')) {
                            rows[i].style = "background-color: rgba(25,200,150,0.15);";
                        }
                        else {
                            rows[i].style = "opacity: 0.25;";
                        }
                    }
                }
            }
        }
    }, true)

    console.log('MasteringPhysicsCommonMath')
})();
