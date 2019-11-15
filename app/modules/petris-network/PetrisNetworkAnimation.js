function petrisNetworkAnimation(arrayMessage) {
    let arrayElements = [];
    let arrayElementsId = [];
    let y = 50;
    let clearY = 0;
    let animationY = 50;
    let flag = false;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    captureOfVariables();

    for (let i = 0; i < arrayMessage.length + 1; i++) {
        setTimeout(function timer() {
            if (i == arrayMessage.lengt) {
                clearStateWithoutTrasition(clearY);
                return;
            }

            if (arrayMessage[i] === 'FIMSE') {
                clearStateWithoutTrasition(clearY);
                document.querySelector(`#${arrayElementsId[i-2]}`).classList.remove('tracer');
                y = y - 25;
                flag = false;

                return;
            }

            if (!arrayMessage[i]) {
                clearStateWithoutTrasition(clearY);
                return;
            }

            if (i > 1) {
                pageScroll(animationY);
                animationY = animationY + 175;
                document.querySelector(`#${arrayElementsId[i-2]}`).classList.remove('tracer');
            }

            if (i > 0 && i != arrayMessage.length - 1) {
                let component = document.querySelector(`#${arrayElementsId[i-1]}`);
                component.classList.add("tracer");
            }

            refreshScreen(arrayMessage[i]);
        }, i * 1500);
    }

    function refreshScreen(message) {
        if (message === "SE") {
            flag = true;

            cleanScreen(270, clearY);
            cleanScreen(185, clearY);

            stateTransition(275, y, 5);
            clearY = y;
            y = y + 163;

            return;
        }

        if (flag) {
            cleanScreen(270, clearY);
            cleanScreen(185, clearY);

            stateTransition(190, y, 5);
            clearY = y;
            y = y + 175;

            return;
        }

        cleanScreen(270, clearY);
        cleanScreen(185, clearY);

        stateTransition(275, y, 5);
        clearY = y;
        y = y + 175;
    }

    function clearStateWithoutTrasition(clearY) {
        if (!flag) {
            cleanScreen(185, clearY);
            cleanScreen(270, clearY);

            return;
        }

        cleanScreen(270, clearY);
        cleanScreen(185, clearY);
    }

    function stateTransition(x, y, raio) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, y, raio, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = 'black';
        context.closePath();
    }

    function cleanScreen(x, clearY) {
        context.clearRect(x - 2, clearY - 10, 16, 16);
    }

    function captureOfVariables() {
        let elements = $('#area-codigo-simulador').children();

        for (element of elements) {
            arrayElements.push(element);
        }

        arrayElements.forEach(element => {
            if (Utils.regexTestPetri(element.id)) {
                arrayElementsId.push(element.id);
            }
        });
    }
}

function pageScroll(height) {
    $('#container').animate({ scrollTop: height }, 1000);
}