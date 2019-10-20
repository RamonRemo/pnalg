var arrayElements = [];
var arrayElementsId = [];

function petrisNetworkAnimation(arrayMessage) {
    let y = 75;
    let height = 75;
    let flag = false;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    captureOfVariables();

    for (let i = 0; i < arrayMessage.length; i++) {
        setTimeout(function timer() {
            if (arrayMessage[i] === 'FIMSE') {
                flag = false;
                return;
            }

            let component = document.querySelector(`#${arrayElementsId[i]}`);
            if (i !== 0) {
                document.querySelector(`#${arrayElementsId[i - 1]}`).classList.remove('tracer');
            }

            refreshScreen(arrayMessage[i], component);
        }, i * 1500);
    }

    function refreshScreen(message, component) {
        if (component.classList.contains('fimse')) {
            component.classList.remove('fimse');
        }

        component.classList.add("tracer");

        if (message === "SE") {
            flag = true;

            cleanScreen(270);
            cleanScreen(185);
            stateTransition(275, y, 5);

            y = y + 225;
            return;
        }

        if (!flag) {
            cleanScreen(185);
            cleanScreen(270);
            stateTransition(275, y, 5);
        } else {
            cleanScreen(270);
            cleanScreen(185);
            stateTransition(190, y, 5);
        }

        y = y + 225;
    }

    function stateTransition(x, y, raio) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, y, raio, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        height = y;
    }

    function cleanScreen(x) {
        context.clearRect(x, height - 5, 10, 10);
    }
}

function captureOfVariables() {
    let elements = $('#area-codigo-simulador').children();
    for (element of elements) {
        arrayElements.push(element);
    }

    defineIdElement();
}

function defineIdElement() {
    arrayElements.forEach(element => {
        if (Utils.regexTestPetri(element.id)) {
            arrayElementsId.push(element.id);
        }
    });
}