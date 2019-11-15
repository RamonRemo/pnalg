var arrayMessage = [];

function petrisNetwork(event) {
    event.preventDefault();

    arrayMessage = [];
    let arrayElements = [];
    let height = 176;
    let y = 176;
    let flag = false;
    let startingPositionIfNot = 0;
    let depth = 0;
    let context = null;
    let canvas = null;
    let downscaleFactor = 0.88;

    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(downscaleFactor, downscaleFactor);

    captureOfVariables();

    if (!context) {
        return;
    }

    for (let i = 0; i <= arrayMessage.length; i++) {
        if (!arrayMessage[i]) {
            continue;
        }

        let variablesIF = newState(arrayMessage[i]);
        y = height + 225;

        if (!arrayMessage[i + 1]) {
            continue;
        }

        if (!variablesIF) {
            if (variablesIF === false) {
                newArrow(height);
            }

            continue;
        }

        if (arrayMessage[i + 1] === 'FIMSE') {
            newArrowEndIF(height);
            drawArrowComponentIfNot(startingPositionIfNot, depth);
            depth = 0;

            continue;
        }

        newArrowIF(height);
        depth++;
    }

    function newState(message) {
        if (message === "SE") {
            flag = true;
        }

        if (message === 'FIMSE') {
            flag = false;
            return;
        }

        if (flag) {
            newStateOfVariablesIF(message);
            return true;
        }

        newStateOfVariables(message);

        return false;
    }

    function newStateOfVariables(message) {
        let circle = newCircle();
        context.stroke(circle);

        newArrow();

        let rectangle = newRectangle();
        context.stroke(rectangle);

        height = y;

        function newCircle() {
            let circle = new Path2D();

            circle.moveTo(300, (y - 101));
            circle.arc(275, (y - 101), 25, 0, 2 * Math.PI);

            return circle;
        }

        function newArrow() {
            context.fillRect(275, (y - 76), 1, 70);

            context.beginPath();
            context.moveTo(275, (y - 2));
            context.lineTo(265, (y - 16));
            context.moveTo(277, (y - 2));
            context.lineTo(285, (y - 16));
            context.stroke();
            context.closePath();
        }

        function newRectangle() {
            let rectangle = new Path2D();

            rectangle.rect(227, y, 100, 25);

            newMessage(context, message, 275);

            return rectangle;
        }
    }

    function newStateOfVariablesIF(message) {
        let circle;

        if (message === 'SE') {
            circle = newCircle();
            newArrowFunctionIf();
        } else {
            circle = newCircleIF()
            newArrow();
        }

        let rectangle = newRectangle();

        context.stroke(circle);
        context.stroke(rectangle);

        height = y;

        function newCircle() {
            let circle = new Path2D();

            circle.moveTo(300, (y - 101));
            circle.arc(275, (y - 101), 25, 0, 2 * Math.PI);

            return circle;
        }

        function newArrowFunctionIf() {
            context.fillRect(275, (y - 76), 1, 10);

            context.beginPath();
            context.moveTo(275, (y - 66));
            context.lineTo(355, (y - 66));
            context.moveTo(355, (y - 66));
            context.lineTo(355, (y - 10));
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(355, (y - 2));
            context.lineTo(345, (y - 16));
            context.moveTo(355, (y - 2));
            context.lineTo(365, (y - 16));
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(275, (y - 66));
            context.lineTo(190, (y - 66));
            context.moveTo(190, (y - 66));
            context.lineTo(190, (y - 10));
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(190, (y - 2));
            context.lineTo(180, (y - 16));
            context.moveTo(190, (y - 2));
            context.lineTo(200, (y - 16));
            context.stroke();
            context.closePath();

            startingPositionIfNot = y + 25;

            let rectangleIfNo = newRectangleIfNo();
            context.stroke(rectangleIfNo);
        }

        function newArrow() {
            context.fillRect(190, (y - 76), 1, 70);

            context.beginPath();
            context.moveTo(190, (y - 2));
            context.lineTo(180, (y - 16));
            context.moveTo(190, (y - 2));
            context.lineTo(200, (y - 16));
            context.stroke();
            context.closePath();
        }

        function newCircleIF() {
            let circle = new Path2D();

            circle.moveTo(215, (y - 101));
            circle.arc(190, (y - 101), 25, 0, 2 * Math.PI);

            return circle;
        }

        function newRectangle() {
            let rectangle = new Path2D();

            rectangle.rect(142, y, 100, 25);

            newMessage(context, message, 190);

            return rectangle;
        }

        function newRectangleIfNo() {
            let rectangle = new Path2D();

            rectangle.rect(307, y, 100, 25);

            newMessage(context, "SE NAO", 355);

            return rectangle;
        }
    }

    function newMessage(context, message, x) {
        context.font = '10pt Arial';
        context.fillStyle = 'black';

        switch (message) {
            case 'DECLARE':
                context.fillText(message, (x - 31.5), (y + 17.2));
                break;

            case 'ATRIBUICAO':
                context.fillText(message, (x - 39.5), (y + 17.2));
                break;

            case 'LEIA':
                context.fillText(message, (x - 15.5), (y + 17.2));
                break;

            case 'EXIBA':
                context.fillText(message, (x - 17.5), (y + 17.2));
                break;

            case 'SE':
                context.fillText(message, (x - 9.5), (y + 17.2));
                break;

            case 'FIM':
                context.fillText(message, (x - 9.5), (y + 17.2));
                break;

            default:
                context.fillText(message, (x - 20), (y + 17.2));
                break;
        }
    }

    function newArrow(y) {
        context.fillRect(275, (y + 25), 1, 70);

        context.beginPath();
        context.moveTo(275, (y + 98));
        context.lineTo(265, (y + 85));
        context.moveTo(275, (y + 98));
        context.lineTo(285, (y + 85));
        context.stroke();
    }

    function newArrowIF(y) {
        context.fillRect(190, (y + 25), 1, 70);

        context.beginPath();
        context.moveTo(190, (y + 98));
        context.lineTo(180, (y + 85));
        context.moveTo(190, (y + 98));
        context.lineTo(200, (y + 85));
        context.stroke();
        context.closePath();
    }

    function newArrowEndIF(y) {
        context.fillRect(190, (y + 24), 1, 10);
        context.fillRect(275, (y + 34), 1, 60);

        context.beginPath();
        context.moveTo(190, (y + 34));
        context.lineTo(275, (y + 34));
        context.moveTo(275, (y + 34));
        context.lineTo(275, (y + 34));
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(275, (y + 98));
        context.lineTo(265, (y + 85));
        context.moveTo(275, (y + 98));
        context.lineTo(285, (y + 85));
        context.stroke();
        context.closePath();
    }

    function drawArrowComponentIfNot(y, h) {
        if (h > 1) {
            h = h * 229;
        } else {
            h = h * 234;
        }

        context.fillRect(355, y, 1, h);

        context.beginPath();
        context.moveTo(355, (y + h));
        context.lineTo(275, (y + h));
        context.moveTo(275, (y + h));
        context.lineTo(275, (y + h));
        context.stroke();
        context.closePath();
    }

    function captureOfVariables() {
        let elements = document.querySelector('#area-codigo').children;

        for (element of elements) {
            arrayElements.push(element.children);
        }

        arrayMessage.push("INICIO");

        arrayElements.forEach(element => {
            for (value of element) {
                if (Utils.regexTest(value.id)) {
                    arrayMessage.push(Utils.regexTest(value.id));
                }
            }
        });

        arrayMessage.push("FIM");
    }
}

function startNetwork() {
    petrisNetworkAnimation(arrayMessage);
}