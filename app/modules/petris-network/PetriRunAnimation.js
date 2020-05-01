var listPetris = new ListPetris();
var aux;
var stack = [];

function petriRunAnimation() {
    let elementsId = getElementsId();
    listPetris = new ListPetris();

    animation();

    async function animation() {
        restartAnimation();

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

    async function newAnimation(petri, idx, command, sleep) {
        if (!command) {
            return false;
        }

        if (command === 'FIMSE') {
            petri.flag = false;
            petri.noSkipsConditionalDeviation = true;

            await addStracking(sleep, petri, idx);
            return true;
        }

        if (idx < commands.length - 1) {
            if (!petri.noSkipsConditionalDeviation) {
                return true;
            }

            if (idx > 0) {
                await addStracking(sleep, petri, idx);
            }

            return true;
        }

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