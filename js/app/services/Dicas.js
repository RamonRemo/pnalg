$(function () {

    let dicas = introJs();

    dicas.setOptions({
        hints: [
            {
                element: '#componente-declare',
                hint: `Declaração de variáveis: <br><br>
                    <ul id='ul-dicas'>
                    <li>
                    É um local que armazena um tipo específico de conteúdo<br><br>
                    </li>
                    <li>
                    Contém um valor que se modifica durante a execução de um programa.<br><br>
                    </li>
                    <li>
                    Possue um identificador (nome).<br>
                    </li>
                    </ul>`
            },
            {
                element: '#componente-leia',
                hint: `Entrada de Dados: <br><br>
                    <ul id='ul-dicas'>
                    <li>
                    O comando de leitura é utilizado para receber um dado informado 
                    através do teclado ou outro periférico de entrada de dados.<br><br>
                    </li>
                    <li>
                    Para isso utilizamos o comando:<br> leia(identificador);<br>
                    </li>
                    </ul>`
            },
            {
                element: '#componente-exiba',
                hint: `Saída de Dados: <br><br>
                    <ul id='ul-dicas'>
                    <li>
                    O comando de saída é utilizado para exibir um dado através do monitor 
                    ou outro periférico de saída de dados.<br><br>
                    </li>
                    <li>
                    Para isso utilizamos o comando:<br> exiba("Olá Mundo");<br><br>
                    </li>
                    </ul>`
            },
            {
                element: '#componente-atribuicao',
                hint: `Atribuição de variáveis:<br><br>
                <ul id='ul-dicas'>
                <li>
                O comando de atribuição é utilizado para atribuir um valor à uma variável.
                </li><br>
                <li>
                Para isso usamos o símbolo "←".<br><br>
                </li>
                </ul>`
            },
            {
                element: '#componente-se',
                hint: '...'
            }
        ],

        hintPosition: 'middle-right',
        hintButtonLabel: "Concluir"

    });

    dicas.addHints();
});