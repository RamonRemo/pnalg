function petrisNetwork(event) {
    event.preventDefault();

    var arrayElements = [];
    var arrayMessage = [];
    var amount = 0;
    var height = 0;
    var y = 176;

    let elements = document.querySelector('#area-codigo').children;
    for (element of elements) {
        arrayElements.push(element.children);
        amount += element.children.length - 1;
    }

    arrayElements.forEach(element => {
        for (value of element) {
            if (Utils.regexTest(value.id)) {
                arrayMessage.push(Utils.regexTest(value.id));
            }
        }
    });

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (canvas.getContext) {
        for (let i = 1; i < (amount + 1); i++) {
            var message = arrayMessage[i - 1];
            newState(message);

            y = height + 225;
            if (i < amount) {
                newArrow(height);
            }
        }
    }

    function newState(message) {
        let ctx = canvas.getContext('2d');

        let circle = new Path2D();
        circle.moveTo(300, (y - 101));
        circle.arc(275, (y - 101), 25, 0, 2 * Math.PI);

        ctx.fillRect(275, (y - 76), 1, 70);

        ctx.beginPath();
        ctx.moveTo(275, (y - 2));
        ctx.lineTo(265, (y - 16));
        ctx.moveTo(277, (y - 2));
        ctx.lineTo(285, (y - 16));
        ctx.stroke();

        let rectangle = new Path2D();
        rectangle.rect(225, y, 100, 25);

        newMessage(ctx, message);

        ctx.stroke(circle);
        ctx.stroke(rectangle);

        height = y;
    }

    function newMessage(ctx, message) {
        ctx.font = '10pt Arial';
        ctx.fillStyle = 'black';
        switch (message) {
            case 'DECLARE':
                ctx.fillText(message, 243.5, (y + 17.2));
                break;

            case 'ATRIBUICAO':
                ctx.fillText(message, 235.5, (y + 17.2));
                break;

            case 'LEIA':
                ctx.fillText(message, 259.5, (y + 17.2));
                break;

            case 'EXIBA':
                ctx.fillText(message, 257.5, (y + 17.2));
                break;

            case 'SE':
                ctx.fillText(message, 265.5, (y + 17.2));
                break;
            default:
                break;
        }
    }

    function newArrow(y) {
        let ctx = canvas.getContext('2d');

        ctx.fillRect(275, (y + 25), 1, 70);

        ctx.beginPath();
        ctx.moveTo(275, (y + 98));
        ctx.lineTo(265, (y + 85));
        ctx.moveTo(275, (y + 98));
        ctx.lineTo(285, (y + 85));
        ctx.stroke();
    }
}