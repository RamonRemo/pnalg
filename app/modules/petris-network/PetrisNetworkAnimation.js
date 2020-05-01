var listPetris = new ListPetris();
var aux;
var stack = [];

function petrisNetworkAnimation(run) {
    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    let elementsId = getElementsId();

    if (run == 'start') {
        document.querySelector('tbody').innerHTML = '';
        listPetris = new ListPetris();
        animation();

        return;
    }

    if (listPetris._petri.clearY === 0) {
        document.querySelector('tbody').innerHTML = '';
    }

    step();

    async function animation() {
        let petri = new Petris(50, 0, 0, false, true, 0);
        let result;

        while (true) {
            result = await newAnimation(
                petri,
                petri.idx,
                commands[petri.idx],
                0
            );

            if (result) {
                petri.idx++;
                continue;
            }

            break;
        }
    }

    async function step() {
        let result;

        result = await newAnimation(
            listPetris._petri,
            listPetris._petri._idx,
            commands[listPetris._petri._idx],
            0
        );

        if (result) {
            listPetris._petri.idx++;
        }

        if (commands.length == listPetris._petri._idx) {
            aux = listPetris._petri.clearY;

            listPetris = new ListPetris();
        }
    }

    async function newAnimation(petri, idx, command, sleep) {
        if (idx % 2 === 0 && idx < commands.length - 2) {
            AnimationComponent.pageScroll(petri);
            petri.height = petri.height + 220;
        }

        if (idx === 0) {
            petri.clearY = aux;
            AnimationComponent.cleanScreen(stack, command);
            petri.clearY = 0;
        }

        if (!command) {
            return false;
        }

        if (command === 'FIMSE') {
            AnimationComponent.cleanScreen(stack, command);
            document.querySelector(`#${elementsId[idx - 1]}`).classList.remove('tracer');

            petri.y = petri.y - 25;
            petri.flag = false;
            petri.noSkipsConditionalDeviation = true;
            
            await addStracking(sleep, petri, idx);
            return true;
        }

        if (idx > 0) {
            document
                .querySelector(`#${elementsId[idx - 1]}`)
                .classList.remove('tracer');
        }

        if (idx < commands.length - 1) {
            if (!petri.noSkipsConditionalDeviation) {
                skipState(petri, command);
                return true;
            }

            document
                .querySelector(`#${elementsId[idx]}`)
                .classList
                .add('tracer');

            refreshScreen(petri, command);

            if (idx > 0) {
                await addStracking(sleep, petri, idx);
            }

            return true;
        }

        refreshScreen(petri, command);

        if (command == 'FIM') {
            await addStracking(sleep, petri, idx);
        }

        return true;
    }

    async function addStracking(sleep, petri, idx) {
        await CommonUtils.sleep(sleep);

        petri.noSkipsConditionalDeviation = await stracking(elementsId[idx - 1]);

        if (!petri.noSkipsConditionalDeviation) {
            petri.flag = false;
        }
    }

    function refreshScreen(petri, command) {
        if (command === 'SE') {
            petri.flag = true;

            AnimationComponent.cleanScreen(stack, command);
            AnimationComponent.stateTransition(275, petri, 5, context, command);

            petri.clearY = petri.y;
            petri.y = petri.y + 163;

            return;
        }

        if (petri.flag) {
            AnimationComponent.cleanScreen(stack, command);
            AnimationComponent.stateTransition(190, petri, 5, context, command);

            petri.clearY = petri.y;
            petri.y = petri.y + 175;

            return;
        }

        AnimationComponent.cleanScreen(stack, command);
        AnimationComponent.stateTransition(275, petri, 5, context, command);

        petri.clearY = petri.y;
        petri.y = petri.y + 175;
    }

    function skipState(petri, command) {
        AnimationComponent.cleanScreen(stack, command);

        petri.clearY = petri.y;
        petri.y = petri.y + 175;
    }

    function getElementsId() {
        let elements = $('#pseudocode-area-simulation').children();
        let arrayElements = [];

        for (element of elements) {
            arrayElements.push(element);
        }

        let arrayElementsId = [];

        arrayElements.forEach(element => {
            if (CommonUtils.regexTestPetri(element.id)) {
                arrayElementsId.push(element.id);
            }
        });

        return arrayElementsId;
    }
}