$(function() {

    let introguide = introJs();

    introguide.setOptions({
        steps: [{
                element: '#step0',
                intro: `Esta visita guiada explicará a interface do sistema CPNAlg. <br> <br> 
                Use as teclas de seta para navegar ou pressione ESC para sair do tour imediatamente. 👨🏽‍🏫`,
                position: 'top'
            },
            {
                element: '#step1',
                intro: `Nesta área temos todos os componentes arrastáveis para criação de redes de petri 
                e algoritmos em pseudocódigo. 👨🏽‍🏫`,
                position: 'right'
            },
            {
                element: '#step2',
                intro: `Nesta área podemos soltar os componentes da área anterior, clicando nos componentes
                um formulário será apresentado, inserindo as informações necessárias neste, fazemos a transcrição do formulário em pseudocódigo. 👨🏽‍🏫`,
                position: 'right'
            },
            {
                element: '#step3',
                intro: `Nesta área sera apresentado a transcrição do formulário em pseudocódigo. 👨🏽‍🏫`,
                position: 'right'
            },
            {
                element: '#step4',
                intro: 'Portugol é uma pseudolinguaguem que permite ao programador pensar no problema em si e não no equipamento que irá executar o algoritmo. 👨🏽‍🏫',
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