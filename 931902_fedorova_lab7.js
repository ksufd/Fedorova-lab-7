let input = document.getElementById('numb');

showFigure = class_id =>{
    var val = input.value;
    for (var i = 0; i < val; i++) 
    {  
        var div = document.createElement('div');

        div.setAttribute('class',class_id);
        div.style.top = String(Math.random()*550) + 'px';
        div.style.left = String(Math.random()*1250) + 'px';

    if ( class_id == 'triangle' ){
            var sizeT = String(Math.random()*100+25) + 'px';
            div.style.borderLeftWidth = div.style.borderRightWidth = div.style.borderBottomWidth = sizeT;
            div.addEventListener('click',changeColorForTriangle);
            div.addEventListener('dblclick',dissapearFigure);
        }

    if ( class_id == 'square' ){
            var size = String(Math.random()*100+25) + 'px';
            div.style.width = div.style.height = size;
            div.addEventListener('click',changeColor);
            div.addEventListener('dblclick',dissapearFigure);
        }

    if ( class_id == 'circle' ){
            var size = String(Math.random()*100+25) + 'px';
            div.style.width = div.style.height = size;
            div.addEventListener('click',changeColor);
            div.addEventListener('dblclick',dissapearFigure);
        }
        document.querySelector("body").appendChild(div);
    }
}

changeColorForTriangle = (event) =>
{
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    event.target.style.borderBottomColor = color;
}

changeColor = (event) =>
{
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    event.target.style.background = color;
}

dissapearFigure = (event) =>
{
    event.target.style.display = 'none';
}