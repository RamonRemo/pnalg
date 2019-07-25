$(function () {
    var introguide = introJs();
    introguide.setOptions({
        steps: [
            {
                element: document.querySelector("#step0"),
                intro: 'Esta visita guiada explicará a interface do sistema CPNAlg. <br> <br> Use as teclas de seta para navegar ou pressione ESC para sair do tour imediatamente. 👨🏽‍🏫',
                position: 'bottom'
            },
            {
                element: document.querySelector("#step1"),
                intro: 'Definir texto explicativo para area com foco',
                position: 'right'
            },
            {
                element: document.querySelector("#step2"),
                intro: 'Definir texto explicativo para area com foco',
                position: 'right'
            },
            {
                element: document.querySelector("#step3"),
                intro: 'Definir texto explicativo para area com foco',
                position: 'left'
            },
            {
                element: document.querySelector("#step4"),
                intro: 'Clique em "Simular" para visualizar graficamente a estrutura e funcionamento do algoritmo. <br> <br> Utilizamos a Rede de Petri para que você possa entender melhor o funcionamento de um algoritmo.',
                position: 'top'
            }
        ]
    });
    introguide.start();
});