function petrisNetworkAnimation(arrayMessage) {
    let arrayElements = [];
    let arrayElementsId = [];
    let y = 75;
    let height = 75;
    let animationY = 75;
    let flag = false;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    captureOfVariables();

    for (let i = 0; i < arrayMessage.length + 1; i++) {
        setTimeout(function timer() {
            if (i > 1) {
                pageScroll(animationY);
                animationY = animationY + 190;
                clearStateWithoutTrasition();
                document.querySelector(`#${arrayElementsId[i-2]}`).classList.remove('tracer');
            }

            if (!arrayMessage[i]) {
                return;
            }

            if (arrayMessage[i] === 'FIMSE') {
                flag = false;
                return;
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

    function clearStateWithoutTrasition() {
        if (!flag) {
            cleanScreen(185);
            cleanScreen(270);
        } else {
            cleanScreen(270);
            cleanScreen(185);
        }
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
        context.clearRect(x - 2, height - 8, 16, 16);
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

        console.log(arrayElementsId)
    }
}

function pageScroll(height) {
    $('#container').animate({ scrollTop: height }, 1000);
}