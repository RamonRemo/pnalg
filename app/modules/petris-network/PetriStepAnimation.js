var listPetris = new ListPetris();
var aux;
var stack = [];

function petrisNetworkAnimation() {
    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    let elementsId = getElementsId();

    if (listPetris._petri.clearY === 0) {
        restartAnimation();
    }

    step();

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

        if (!command) {
            return false;
        }

        if (command === 'FIM') {
            await refreshTracer(idx, sleep);
            refreshScreen(petri, command);

            return true;
        }

        if (command === 'FIMSE') {
            if (petri.noSkipsConditionalDeviation) {
                await refreshTracer(idx, sleep);
            }

            petri.y = petri.y - 25;
            petri.flag = false;
            petri.noSkipsConditionalDeviation = true;

            return true;
        }

        if (!petri.noSkipsConditionalDeviation) {
            document
                .querySelector(`#${elementsId[idx - 1]}`)
                .classList.remove('tracer');

            skipState(petri, command);

            return true;
        }

        if (command === 'SE') {
            await refreshTracer(idx, sleep);

            petri.noSkipsConditionalDeviation = await addStracking(sleep, idx);

            if (!petri.noSkipsConditionalDeviation) {
                petri.flag = false;
            }

            refreshScreen(petri, command);

            return true;
        }

        await refreshTracer(idx, sleep);
        refreshScreen(petri, command);

        return true;
    }

    async function refreshTracer(idx, sleep) {
        if (idx < commands.length) {
            if (idx > 0) {
                document
                    .querySelector(`#${elementsId[idx - 1]}`)
                    .classList.remove('tracer');

                await addStracking(sleep, idx - 1);
            }

            if (idx < commands.length - 1) {
                document
                    .querySelector(`#${elementsId[idx]}`)
                    .classList.add('tracer');
            }
        }
    }

    async function addStracking(sleep, idx) {
        await CommonUtils.sleep(sleep);

        return await stracking(elementsId[idx]);
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

    function restartAnimation() {
        elementsId.forEach(id => {
            document.querySelector(`#${id}`).classList.remove('tracer');
        });

        AnimationComponent.cleanScreen(stack, elementsId[0]);

        document.querySelector('tbody').innerHTML = '';
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