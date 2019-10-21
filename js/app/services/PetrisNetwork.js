var arrayMessage = [];

function petrisNetwork(event) {
    event.preventDefault();

    let arrayElements = [];
    arrayMessage = [];
    let height = 0;
    let y = 176;
    let flag = false;
    let startingPositionIfNot = 0;
    let depth = 0;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    var downscaleFactor = 0.88;
    context.scale(downscaleFactor, downscaleFactor);

    captureOfVariables();

    if (canvas.getContext) {
        for (let i = 0; i <= arrayMessage.length; i++) {
            let message = arrayMessage[i];

            if (!message) {
                return;
            }

            let variablesIF = newState(message);
            y = height + 225;

            if (!arrayMessage[i + 1]) {
                return;
            }

            if (i < arrayMessage.length) {
                if (variablesIF) {
                    if (arrayMessage[i + 1] === 'FIMSE') {
                        newArrowEndIF(height);
                        drawArrowComponentIfNot(startingPositionIfNot, depth);
                        depth = 0;
                    } else {
                        newArrowIF(height);
                        depth++;
                    }
                } else {
                    if (variablesIF === false) {
                        newArrow(height);
                    }
                }
            }
        }
    }

    function newState(message) {
        if (message === "SE") {
            flag = true;
        }

        if (message === 'FIMSE') {
            flag = false;
            return;
        }

        if (!flag) {
            newStateOfVariables(message);
            return false;
        } else {
            newStateOfVariablesIF(message);
            return true;
        }
    }

    function newStateOfVariables(message) {
        let ctx = canvas.getContext('2d');

        let circle = newCircle();

        newArrow();

        let rectangle = newRectangle();

        ctx.stroke(circle);
        ctx.stroke(rectangle);

        height = y;

        function newCircle() {
            let circle = new Path2D();

            circle.moveTo(300, (y - 101));
            circle.arc(275, (y - 101), 25, 0, 2 * Math.PI);

            return circle;
        }

        function newArrow() {
            ctx.fillRect(275, (y - 76), 1, 70);

            ctx.beginPath();
            ctx.moveTo(275, (y - 2));
            ctx.lineTo(265, (y - 16));
            ctx.moveTo(277, (y - 2));
            ctx.lineTo(285, (y - 16));
            ctx.stroke();
            ctx.closePath();
        }

        function newRectangle() {
            let rectangle = new Path2D();

            rectangle.rect(227, y, 100, 25);

            newMessage(ctx, message, 275);

            return rectangle;
        }
    }

    function newStateOfVariablesIF(message) {
        let ctx = canvas.getContext('2d');
        let circle;

        if (message === 'SE') {
            circle = newCircle();
            newArrowFunctionIf();
        } else {
            circle = newCircleIF()
            newArrow();
        }

        let rectangle = newRectangle();

        ctx.stroke(circle);
        ctx.stroke(rectangle);

        height = y;

        function newCircle() {
            let circle = new Path2D();

            circle.moveTo(300, (y - 101));
            circle.arc(275, (y - 101), 25, 0, 2 * Math.PI);

            return circle;
        }

        function newArrowFunctionIf() {
            ctx.fillRect(275, (y - 76), 1, 10);

            ctx.beginPath();
            ctx.moveTo(275, (y - 66));
            ctx.lineTo(355, (y - 66));
            ctx.moveTo(355, (y - 66));
            ctx.lineTo(355, (y - 10));
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(355, (y - 2));
            ctx.lineTo(345, (y - 16));
            ctx.moveTo(355, (y - 2));
            ctx.lineTo(365, (y - 16));
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(275, (y - 66));
            ctx.lineTo(190, (y - 66));
            ctx.moveTo(190, (y - 66));
            ctx.lineTo(190, (y - 10));
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(190, (y - 2));
            ctx.lineTo(180, (y - 16));
            ctx.moveTo(190, (y - 2));
            ctx.lineTo(200, (y - 16));
            ctx.stroke();
            ctx.closePath();

            startingPositionIfNot = y + 25;

            let rectangleIfNo = newRectangleIfNo();
            ctx.stroke(rectangleIfNo);
        }

        function newArrow() {
            ctx.fillRect(190, (y - 76), 1, 70);

            ctx.beginPath();
            ctx.moveTo(190, (y - 2));
            ctx.lineTo(180, (y - 16));
            ctx.moveTo(190, (y - 2));
            ctx.lineTo(200, (y - 16));
            ctx.stroke();
            ctx.closePath();
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

            newMessage(ctx, message, 190);

            return rectangle;
        }

        function newRectangleIfNo() {
            let rectangle = new Path2D();

            rectangle.rect(307, y, 100, 25);

            newMessage(ctx, "SE NAO", 355);

            return rectangle;
        }
    }

    function newMessage(ctx, message, x) {
        ctx.font = '10pt Arial';
        ctx.fillStyle = 'black';
        switch (message) {
            case 'DECLARE':
                ctx.fillText(message, (x - 31.5), (y + 17.2));
                break;

            case 'ATRIBUICAO':
                ctx.fillText(message, (x - 39.5), (y + 17.2));
                break;

            case 'LEIA':
                ctx.fillText(message, (x - 15.5), (y + 17.2));
                break;

            case 'EXIBA':
                ctx.fillText(message, (x - 17.5), (y + 17.2));
                break;

            case 'SE':
                ctx.fillText(message, (x - 9.5), (y + 17.2));
                break;

            default:
                ctx.fillText(message, (x - 22), (y + 17.2));
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

    function newArrowIF(y) {
        let ctx = canvas.getContext('2d');

        ctx.fillRect(190, (y + 25), 1, 70);

        ctx.beginPath();
        ctx.moveTo(190, (y + 98));
        ctx.lineTo(180, (y + 85));
        ctx.moveTo(190, (y + 98));
        ctx.lineTo(200, (y + 85));
        ctx.stroke();
        ctx.closePath();
    }

    function newArrowEndIF(y) {
        let ctx = canvas.getContext('2d');

        ctx.fillRect(190, (y + 24), 1, 10);
        ctx.fillRect(275, (y + 34), 1, 60);

        ctx.beginPath();
        ctx.moveTo(190, (y + 34));
        ctx.lineTo(275, (y + 34));
        ctx.moveTo(275, (y + 34));
        ctx.lineTo(275, (y + 34));
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(275, (y + 98));
        ctx.lineTo(265, (y + 85));
        ctx.moveTo(275, (y + 98));
        ctx.lineTo(285, (y + 85));
        ctx.stroke();
        ctx.closePath();
    }

    function drawArrowComponentIfNot(y, h) {
        let ctx = canvas.getContext('2d');

        if (h > 1) {
            h = h * 229;
        } else {
            h = h * 234;
        }

        ctx.fillRect(355, y, 1, h);

        ctx.beginPath();
        ctx.moveTo(355, (y + h));
        ctx.lineTo(275, (y + h));
        ctx.moveTo(275, (y + h));
        ctx.lineTo(275, (y + h));
        ctx.stroke();
        ctx.closePath();
    }

    function captureOfVariables() {
        let elements = document.querySelector('#area-codigo').children;

        for (element of elements) {
            arrayElements.push(element.children);
        }

        arrayElements.forEach(element => {
            for (value of element) {
                if (Utils.regexTest(value.id)) {
                    arrayMessage.push(Utils.regexTest(value.id));
                }
            }
        });
    }
}

function startNetwork() {
    petrisNetworkAnimation(arrayMessage);
}