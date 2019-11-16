function petrisNetworkAnimation(arrayMessage) {
    let arrayElements = [];
    let arrayElementsId = [];
    let y = 50;
    let clearY = 0;
    let height = 0;
    let flag = false;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    captureOfVariables();

    for (let i = 0; i < arrayMessage.length + 1; i++) {
        setTimeout(function timer() {
            if (i % 2 == 0) {
                AnimationComponent.pageScroll(height);
                height = height + 225;
            }

            if (!arrayMessage[i]) {
                AnimationComponent.clearStateWithoutTrasition(clearY, flag, context);
                return;
            }

            if (arrayMessage[i] === 'FIMSE') {
                AnimationComponent.clearStateWithoutTrasition(clearY, flag, context);
                document.querySelector(`#${arrayElementsId[i-2]}`).classList.remove('tracer');

                y = y - 25;
                flag = false;

                return;
            }

            if (i > 1) {
                document.querySelector(`#${arrayElementsId[i-2]}`).classList.remove('tracer');
            }

            if (i > 0 && i != arrayMessage.length - 1) {
                let component = document.querySelector(`#${arrayElementsId[i-1]}`);
                component.classList.add('tracer');
            }

            refreshScreen(arrayMessage[i]);
        }, i * 1500);
    }

    function refreshScreen(message) {
        if (message === 'SE') {
            flag = true;

            AnimationComponent.cleanScreen(270, clearY, context);
            AnimationComponent.cleanScreen(185, clearY, context);
            AnimationComponent.stateTransition(275, y, 5, context);

            clearY = y;
            y = y + 163;

            return;
        }

        if (flag) {
            AnimationComponent.cleanScreen(270, clearY, context);
            AnimationComponent.cleanScreen(185, clearY, context);
            AnimationComponent.stateTransition(190, y, 5, context);

            clearY = y;
            y = y + 175;

            return;
        }

        AnimationComponent.cleanScreen(270, clearY, context);
        AnimationComponent.cleanScreen(185, clearY, context);
        AnimationComponent.stateTransition(275, y, 5, context);

        clearY = y;
        y = y + 175;
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