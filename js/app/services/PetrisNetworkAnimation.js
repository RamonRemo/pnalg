function petrisNetworkAnimation(arrayMessage) {
    var y = 75;
    var height = 75;
    var flag = false;

    let canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    for (let i = 0; i < arrayMessage.length; i++) {
        setTimeout(function timer() {
            refreshScreen(arrayMessage[i]);
        }, i * 2000);
    }

    function refreshScreen(message) {
        if (message === "SE") {
            flag = true;

            cleanScreen(270);
            stateTransition(275, y, 5);

            y = y + 225;
            return;
        }

        if (message === 'FIMSE') {
            flag = false;
            return;
        }

        if (!flag) {
            cleanScreen(185);
            cleanScreen(270);
            stateTransition(275, y, 5);
        } else {
            cleanScreen(270);
            cleanScreen(185);
            stateTransition(190, y, 5);
        }

        y = y + 225;
    }

    function stateTransition(x, y, raio) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(x, y, raio, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        height = y;
    }

    function cleanScreen(x) {
        context.clearRect(x, height - 5, 10, 10);
    }
}