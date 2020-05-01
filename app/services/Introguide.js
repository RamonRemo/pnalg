function introguide(event) {
    event.preventDefault()

    let introguide = introJs();

    introguide.setOptions({
        steps: [{
            element: '#step0',
            intro: `Use as teclas ⇨ e ⇦ para navegar ou pressione ESC para sair 
                        do AJUDA imediatamente. 👨🏽‍🏫`,
            position: 'top'
        },
        {
            element: '#step1',
            intro: `Na <b>ÁREA 1</b> temos todos os componentes arrastáveis para criação 
                        do algoritmo e de seu modelo. 👨🏽‍🏫`,
            position: 'right'
        },
        {
            element: '#step2',
            intro: `Na <b>ÁREA 2</b> será construído o algoritmo. Tal construção é feita 
                        arrastando-se os comandos da <b>ÁREA 1</b> para a <b>ÁREA 2</b>. <br><br>Para excluir 
                        os comandos, deve-se arrastá-los de volta da <b>ÁREA 2</b> para a <b>ÁREA 1</b>. 👨🏽‍🏫`,
            position: 'right'
        },
        {
            element: '#step3',
            intro: `Na <b>ÁREA 3</b> será mostrado o algoritmo gerado. 👨🏽‍🏫`,
            position: 'right'
        },
        {
            element: '#step4',
            intro: `Ao clicar neste botão, será mostrado o algoritmo e seu respectivo 
                        modelo para a realização de simulações. 👨🏽‍🏫`,
            position: 'top'
        }
        ],

        nextLabel: 'Próximo',
        prevLabel: 'Anterior',
        skipLabel: 'Fechar',
        doneLabel: 'Concluir',
        showStepNumbers: false
    });

    introguide.start();
}