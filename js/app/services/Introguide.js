$(function () {

    let introguide = introJs();

    introguide.setOptions({
        steps: [
            {
                element: '#step0',
                intro: 'Esta visita guiada explicará a interface do sistema CPNAlg. <br> <br> Use as teclas de seta para navegar ou pressione ESC para sair do tour imediatamente. 👨🏽‍🏫',
                position: 'top'
            },
            {
                element: '#step1',
                intro: 'Definir texto explicativo para area com foco',
                position: 'right'
            },
            {
                element: '#step2',
                intro: 'Definir texto explicativo para area com foco',
                position: 'right'
            },
            {
                element: '#step3',
                intro: 'Definir texto explicativo para area com foco',
                position: 'right'
            },
            {
                element: '#step4',
                intro: 'É uma pseudolinguaguem que permite ao programador pensar no problema em si e não no equipamento que irá executar o algoritmo',
                position: 'left'
            },
            {
                element: '#step5',
                intro: 'Clique em "Simular" para visualizar graficamente a estrutura e funcionamento do algoritmo. <br> <br> Utilizamos a Rede de Petri para que você possa entender melhor o funcionamento de um algoritmo.',
                position: 'top'
            }
        ],

        nextLabel: "Próximo",
        prevLabel: "Anterior",
        skipLabel: "Pular",
        doneLabel: "Concluir"

    });

    introguide.start();
});