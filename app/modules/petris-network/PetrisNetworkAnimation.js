var listPetris = new ListPetris();

function petrisNetworkAnimation(startOrStep) {
    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    let arrayElementsId = captureOfVariables();

    if (startOrStep == 'start') {
        document.querySelector('tbody').innerHTML = '';

        listPetris = new ListPetris();
        animation();

        return;
    }

    step();


    async function animation() {
        let petri = new Petris(50, 0, 0, false, true, 0);
        let result;

        while (true) {
            result = await newAnimation(
                petri,
                petri.idx,
                arrayCommand[petri.idx],
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
            arrayCommand[listPetris._petri._idx],
            0
        );

        if (result) {
            listPetris._petri.idx++;
        }

        if (arrayCommand.length == listPetris._petri._idx) {
            listPetris = new ListPetris();
            document.querySelector('tbody').innerHTML = '';
        }
    }

    async function newAnimation(petri, idx, command, sleep) {
        if (idx % 2 === 0 && idx < arrayCommand.length - 2) {
            AnimationComponent.pageScroll(petri);
            petri.height = petri.height + 225;
        }

        if (!command) {
            AnimationComponent.clearStateWithoutTrasition(petri, context);
            return false;
        }

        if (command === 'FIMSE') {
            AnimationComponent.clearStateWithoutTrasition(petri, context);
            document.querySelector(`#${arrayElementsId[idx - 2]}`).classList.remove('tracer');

            petri.y = petri.y - 25;
            petri.flag = false;
            petri.noSkipsConditionalDeviation = true;

            return true;
        }

        if (idx > 1) {
            document
                .querySelector(`#${arrayElementsId[idx - 2]}`)
                .classList.remove('tracer');
        }

        if (idx > 0 && idx < arrayCommand.length - 1) {
            if (!petri.noSkipsConditionalDeviation) {
                skipState(petri);
                return true;
            }

            document
                .querySelector(`#${arrayElementsId[idx - 1]}`)
                .classList.add('tracer');

            refreshScreen(petri, command);

            await CommonUtils.sleep(sleep);
            petri.noSkipsConditionalDeviation = await stracking(arrayElementsId[idx - 1]);

            if (!petri.noSkipsConditionalDeviation) {
                petri.flag = false;
            }

            return true;
        }

        refreshScreen(petri, command);

        return true;
    }

    function refreshScreen(petri, message) {
        if (message === 'SE') {
            petri.flag = true;

            AnimationComponent.cleanScreen(270, petri, context);
            AnimationComponent.cleanScreen(185, petri, context);
            AnimationComponent.stateTransition(275, petri, 5, context);

            petri.clearY = petri.y;
            petri.y = petri.y + 163;

            return;
        }

        if (petri.flag) {
            AnimationComponent.cleanScreen(270, petri, context);
            AnimationComponent.cleanScreen(185, petri, context);
            AnimationComponent.stateTransition(190, petri, 5, context);

            petri.clearY = petri.y;
            petri.y = petri.y + 175;

            return;
        }

        AnimationComponent.cleanScreen(270, petri, context);
        AnimationComponent.cleanScreen(185, petri, context);
        AnimationComponent.stateTransition(275, petri, 5, context);

        petri.clearY = petri.y;
        petri.y = petri.y + 175;
    }

    function skipState(petri) {
        AnimationComponent.cleanScreen(270, petri, context);
        AnimationComponent.cleanScreen(185, petri, context);

        petri.clearY = petri.y;
        petri.y = petri.y + 175;
    }

    function captureOfVariables() {
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