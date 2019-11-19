class StateComponent {
    constructor() {
        throw new Error('StateComponent não pode ser instanciada');
    }

    static newStateComponent(y, context, message) {
        y = this._newCircle(300, y, context, 275);
        y = this.newArrow(275, y, context);
        y = this._newRectangle(227, y, context, message);

        return y;
    }

    static newStateComponentIf(y, context, message) {
        y = this._newCircle(300, y, context, 275);

        this._parallelLine(297, y + 12.5, context, 'sum');
        let tmp = this.newArrow(360, y - 12.5, context);
        tmp = this._newRectangle(307, tmp, context, 'SE NÃO');

        this._parallelLine(253, y + 12.5, context, 'subtraction');
        y = this.newArrow(190, y - 12.5, context);
        y = this._newRectangle(142, y, context, message);

        return y;
    }

    static newStateInternalCommandsIf(y, context, message) {
        y = this._newCircle(215, y, context, 190);
        y = this.newArrow(190, y, context);
        y = this._newRectangle(142, y, context, message);

        return y;
    }

    static newArrow(x, y, context) {
        context.fillRect(x, y, 1, 50);
        y = y + 50;

        context.beginPath();
        context.moveTo((x + 1), y);
        context.lineTo((x - 10), (y - 15));
        context.moveTo((x + 1), y);
        context.lineTo((x + 10), (y - 15));
        context.stroke();
        context.closePath();

        return y;
    }

    static newArrowEndIf(y, height, context) {
        context.fillRect(190, y, 1, 37.5);
        y = y + 37.5;

        context.beginPath();
        context.moveTo(190, y);
        context.lineTo(253, y);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(360, y);
        context.lineTo(297, y);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(360, height);
        context.lineTo(360, y);
        context.stroke();
        context.closePath();

        return y + 12.5;
    }

    static _newRectangle(x, y, context, message) {
        let rectangle = new Path2D();

        rectangle.rect(x, y, 100, 25);
        context.stroke(rectangle);

        this._newMessage(x, y + 18, context, message);

        return y + 25;
    }

    static _newCircle(x, y, context, arc) {
        let circle = new Path2D();

        circle.moveTo(x, y);
        circle.arc(arc, y, 25, 0, 2 * Math.PI);
        context.stroke(circle);

        return y + 25;
    }

    static _parallelLine(x, y, context, operation) {
        let valueX = CommonUtils.arithmeticOperation(x, 63, operation);

        context.beginPath();
        context.moveTo(x, y - 25);
        context.lineTo(valueX, y - 25);
        context.stroke();
        context.closePath();
    }

    static _newMessage(x, y, context, message) {
        context.font = '10pt Arial';
        context.fillStyle = 'black';

        switch (message) {
            case 'DECLARE':
                context.fillText(message, (x + 16.5), y);
                break;

            case 'ATRIBUICAO':
                context.fillText(message, (x + 8.5), y);
                break;

            case 'LEIA':
                context.fillText(message, (x + 32.5), y);
                break;

            case 'EXIBA':
                context.fillText(message, (x + 28), y);
                break;

            case 'SE':
                context.fillText(message, (x + 38.5), y);
                break;

            case 'SE NÃO':
                context.fillText(message, (x + 28), y);
                break;

            case 'FIM':
                context.fillText(message, (x + 38.5), y);
                break;

            default:
                context.fillText(message, (x + 29), y);
                break;
        }
    }
}