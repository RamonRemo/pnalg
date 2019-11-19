var arrayCommand = [];

function petrisNetwork(event) {
    event.preventDefault();

    arrayCommand = [];
    let arrayElements = [];
    let height = 0;
    let y = 50;
    let flag = false;
    let context = null;
    let canvas = null;
    let downscaleFactor = 0.80;

    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(downscaleFactor, downscaleFactor);

    captureOfVariables();

    if (!context) {
        return;
    }

    for (let i = 0; i <= arrayCommand.length; i++) {
        if (!arrayCommand[i]) {
            continue;
        }

        let variablesIF = newState(arrayCommand[i]);

        if (!arrayCommand[i + 1]) {
            continue;
        }

        if (!variablesIF) {
            if (variablesIF === false) {
                y = StateComponent.newArrow(275, y, context);
                y = y + 25;
            }

            continue;
        }

        if (arrayCommand[i + 1] === 'FIMSE') {
            y = StateComponent.newArrowEndIf(y, height, context);
            continue;
        }

        y = StateComponent.newArrow(190, y, context);
        y = y + 25;
    }

    function newState(message) {
        if (message === 'SE') {
            flag = true;

            y = StateComponent.newStateComponentIf(y, context, message);
            height = y;

            return true;
        }

        if (message === 'FIMSE') {
            flag = false;
            return;
        }

        if (!flag) {
            y = StateComponent.newStateComponent(y, context, message);
            return false;
        }

        y = StateComponent.newStateInternalCommandsIf(y, context, message);

        return true;
    }

    function captureOfVariables() {
        let elements = document.querySelector('#pseudocode-area').children;

        for (element of elements) {
            arrayElements.push(element.children);
        }

        arrayCommand.push('INICIO');

        arrayElements.forEach(element => {
            for (value of element) {
                if (CommonUtils.regexTest(value.id)) {
                    arrayCommand.push(CommonUtils.regexTest(value.id));
                }
            }
        });

        arrayCommand.push('FIM');
    }
}

function startNetwork() {
    petrisNetworkAnimation(arrayCommand);
}