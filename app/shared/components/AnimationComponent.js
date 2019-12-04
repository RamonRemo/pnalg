class AnimationComponent {

    constructor() {
        throw new Error('AnimationComponent não pode ser instanciada');
    }

    static clearStateWithoutTrasition(petri, context) {
        if (!petri.flag) {
            this.cleanScreen(185, petri.clearY, context);
            this.cleanScreen(270, petri.clearY, context);

            return;
        }

        this.cleanScreen(270, petri.clearY, context);
        this.cleanScreen(185, petri.clearY, context);
    }

    static stateTransition(x, petri, raio, context) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, petri.y, raio, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = 'black';
        context.closePath();
    }

    static cleanScreen(x, petri, context) {
        context.clearRect(x - 2, petri.clearY - 10, 16, 16);
    }

    static pageScroll(petri) {
        $('#container').animate({ scrollTop: petri.height }, 1000);
    }
}