var stackClean = [];

class AnimationComponent {

    constructor() {
        throw new Error('AnimationComponent não pode ser instanciada');
    }

    static stateTransition(x, petri, raio, context, command) {
        stack.push(new StateScreen(x - 5, petri, context, command));

        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, petri.y, raio, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        AnimationComponent.newState(petri, command, context, command);
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
    }

    static cleanScreen(stack) {
        if (Object.keys(stack).length === 0) {
            return;
        }

        let obj = stack.pop();
        obj.context.clearRect(obj.x - 2, obj.petri.clearY - 10, 16, 16);

        AnimationComponent.cleanTracer();
    }

    static cleanTracer() {
        if (Object.keys(stackClean).length === 0) {
            return;
        }

        let obj = stackClean.pop();

        obj.context.lineWidth = 5;
        AnimationComponent.cleanPastState(obj, 'white');

        obj.context.lineWidth = 2;
        AnimationComponent.cleanPastState(obj, 'grey');

        obj.context.fillStyle = 'black';
        obj.context.strokeStyle = 'black';
        obj.context.lineWidth = 1;
    }

    static pageScroll(petri) {
        $('#container').animate({ scrollTop: petri.height }, 1000);
    }

    static newState(petri, command, context) {
        if (Object.keys(petri).length === 0) {
            return;
        }

        if (command === 'FIM') {
            return;
        }

        context.fillStyle = '#00ff00';
        context.strokeStyle = '#00ff00';

        if (!petri.flag) {
            StateComponent.newStateComponentTracer(275, petri.y + 25, context);
            stackClean.push(new StateScreen(275, petri, context, command));
            return;
        }

        if (command === 'SE') {
            StateComponent.newArrowIf(petri.y + 25, context);
            stackClean.push(new StateScreen(190, petri, context, command));
            return;
        }

        StateComponent.newStateComponentTracer(190, petri.y + 25, context);
        stackClean.push(new StateScreen(190, petri, context, command));
    }

    static cleanPastState(obj, color) {
        if (Object.keys(obj).length === 0) {
            return;
        }

        let command = obj.command;
        let context = obj.context;
        let petri = obj.petri;

        context.fillStyle = color;
        context.strokeStyle = color;

        if (command == 'SE') {
            StateComponent.newArrowIf(petri.clearY + 25, context);
            return;
        }

        StateComponent.newStateComponentTracer(obj.x, petri.clearY + 25, context);
    }
}