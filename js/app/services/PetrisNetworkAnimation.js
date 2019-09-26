function petrisNetworkAnimation(canvas, context) {
    var y = 75;
    var height = 75;

    setInterval(refreshScreen, 2000);

    function refreshScreen() {
        cleanScreen(y);
        stateTransition(275, y, 5);
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

    function cleanScreen(y) {
        context.clearRect(270, height - 5, 10, 10);
    }
}