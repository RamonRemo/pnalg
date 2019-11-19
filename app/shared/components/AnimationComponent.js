class AnimationComponent {

    constructor() {
        throw new Error('AnimationComponent não pode ser instanciada');
    }

    static clearStateWithoutTrasition(clearY, flag, context) {
        if (!flag) {
            this.cleanScreen(185, clearY, context);
            this.cleanScreen(270, clearY, context);

            return;
        }

        this.cleanScreen(270, clearY, context);
        this.cleanScreen(185, clearY, context);
    }

    static stateTransition(x, y, raio, context) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, y, raio, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = 'black';
        context.closePath();
    }

    static cleanScreen(x, clearY, context) {
        context.clearRect(x - 2, clearY - 10, 16, 16);
    }

    static pageScroll(height) {
        $('#container').animate({ scrollTop: height }, 1000);
    }
}