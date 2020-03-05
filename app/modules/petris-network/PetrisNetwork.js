var commands = [];

function petrisNetwork(event) {
    event.preventDefault();

    commands = [];
    let elements = [];
    let height = 0;
    let y = 50;
    let flag = false;
    let context = null;
    let canvas = null;

    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(0.80, 0.80);

    setCommands();

    if (!context) {
        return;
    }

    for (let i = 0; i <= commands.length; i++) {
        if (!commands[i]) {
            continue;
        }

        let variablesIF = newState(commands[i]);

        if (!commands[i + 1]) {
            continue;
        }

        if (!variablesIF) {
            if (variablesIF === false) {
                y = StateComponent.newArrow(275, y, context);
                y = y + 25;
            }

            continue;
        }

        if (commands[i + 1] === 'FIMSE') {
            y = StateComponent.newArrowEndIf(y, height, context);
            continue;
        }

        y = StateComponent.newArrow(190, y, context);
        y = y + 25;
    }

    function newState(command) {
        if (command === 'SE') {
            flag = true;

            y = StateComponent.newStateComponentIf(y, context, command);
            height = y;

            return true;
        }

        if (command === 'FIMSE') {
            flag = false;
            return;
        }

        if (!flag) {
            y = StateComponent.newStateComponent(y, context, command);
            return false;
        }

        y = StateComponent.newStateInternalCommandsIf(y, context, command);

        return true;
    }

    function setCommands() {
        let codes = document.querySelector('#pseudocode-area').children;

        for (code of codes) {
            elements.push(code.children);
        }

        elements.forEach(element => {
            for (value of element) {
                if (CommonUtils.regexTest(value.id)) {
                    commands.push(CommonUtils.regexTest(value.id));
                }
            }
        });

        commands.push("FIM");
    }
}

function startNetwork() {
    petrisNetworkAnimation('start');
}