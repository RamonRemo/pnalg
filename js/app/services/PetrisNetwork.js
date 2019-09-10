function petrisNetwork(event) {
    event.preventDefault();

    var aux;
    var height = 176;
    
    let element = document.querySelector('#area-codigo').children.length;
    let canvas = document.querySelector('canvas');

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (canvas.getContext) {

        for (let i = 1; i < (element + 1); i++) {
            newState();
            height = aux + 225;

            if (i < element) {
                newArrow(aux);
            }

        }
    }

    function newState() {
        let ctx = canvas.getContext('2d');

        let circle = new Path2D();
        circle.moveTo(300, (height - 101));
        circle.arc(275, (height - 101), 25, 0, 2 * Math.PI);

        ctx.fillRect(275, (height - 76), 1, 70);

        ctx.beginPath();
        ctx.moveTo(275, (height - 2));
        ctx.lineTo(265, (height - 16));
        ctx.moveTo(277, (height - 2));
        ctx.lineTo(285, (height - 16));
        ctx.stroke();

        let rectangle = new Path2D();
        rectangle.rect(225, (height), 100, 25);

        ctx.stroke(circle);
        ctx.stroke(rectangle);

        aux = height;
    }

    function newArrow(height) {
        let ctx = canvas.getContext('2d');

        ctx.fillRect(275, (height + 25), 1, 70);

        ctx.beginPath();
        ctx.moveTo(275, (height + 98));
        ctx.lineTo(265, (height + 85));
        ctx.moveTo(275, (height + 98));
        ctx.lineTo(285, (height + 85));
        ctx.stroke();
    }
}