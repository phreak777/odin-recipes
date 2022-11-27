function changeColor(e) {
    x = e.target;
    console.log(x);
    x.style.backgroundColor != 'red' ? x.style.backgroundColor = 'red' : x.style.backgroundColor = 'black';
    console.log(e);
}

window.onload = function() {
    const test = document.querySelector('#test');
    test.addEventListener('mouseover', this.changeColor)

    const container = document.querySelector('#grid-container');

    function drawSquares() {
        for (let i = 0; i < 256 ; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.id = i;
            pixel.setAttribute('onmouseover', 'changeColor()');
            pixel.addEventListener('mouseover', this.changeColor);
            container.appendChild(pixel);
        };
    }

    drawSquares()
}