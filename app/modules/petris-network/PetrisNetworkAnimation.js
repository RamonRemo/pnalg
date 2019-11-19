function petrisNetworkAnimation(arrayCommand) {
    let arrayElements = [];
    let arrayElementsId = [];
    let y = 50;
    let clearY = 0;
    let height = 0;
    let flag = false;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    document.querySelector('tbody').innerHTML = '';

    captureOfVariables();

    animation();

    async function animation() {
        let idx = 0;
        let result;

        while (true) {
            result = await newAnimation(idx, arrayCommand[idx]).then(
                await CommonUtils.sleep(1500)
            );

            if (result) {
                idx++;
                continue;
            }

            break;
        }
    }

    async function newAnimation(idx, command) {
        if (idx % 2 === 0 && idx < arrayCommand.length - 2) {
            AnimationComponent.pageScroll(height);
            height = height + 225;
        }

        if (!command) {
            AnimationComponent.clearStateWithoutTrasition(clearY, flag, context);
            return false;
        }

        if (command === 'FIMSE') {
            AnimationComponent.clearStateWithoutTrasition(clearY, flag, context);
            document.querySelector(`#${arrayElementsId[idx - 2]}`).classList.remove('tracer');

            y = y - 25;
            flag = false;

            return true;
        }

        if (idx > 1) {
            document
                .querySelector(`#${arrayElementsId[idx - 2]}`)
                .classList.remove('tracer');
        }

        if (idx > 0 && idx < arrayCommand.length - 1) {
            document
                .querySelector(`#${arrayElementsId[idx - 1]}`)
                .classList.add('tracer');

            refreshScreen(command);

            await CommonUtils.sleep(200);
            await stracking(arrayElementsId[idx - 1]);

            return true;
        }

        refreshScreen(command);

        return true;
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
            if (CommonUtils.regexTestPetri(element.id)) {
                arrayElementsId.push(element.id);
            }
        });
    }
}