$(function() {

    let dicas = introJs();

    dicas.setOptions({
        hints: [{
                element: '#componente-declare',
                hint: `Declaração de variáveis: <br><br>
                    <ul id='ul-dicas'>
                        <li>
                            É um local que armazena um tipo específico de conteúdo
                        </li>
                        <li>
                            Contém um valor que se modifica durante a execução de um programa.
                        </li>
                        <li>
                            Possue um identificador (nome).
                        </li>
                    </ul>`
            },
            {
                element: '#componente-leia',
                hint: `Entrada de Dados: <br><br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando de leitura é utilizado para receber um dado informado 
                            através do teclado ou outro periférico de entrada de dados.
                        </li>
                        <li>
                            Para isso utilizamos o comando:<br> leia(identificador);
                        </li>
                    </ul>`
            },
            {
                element: '#componente-exiba',
                hint: `Saída de Dados: <br><br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando de saída é utilizado para exibir um dado através do monitor 
                            ou outro periférico de saída de dados.
                        </li>
                        <li>
                            Para isso utilizamos o comando:<br> exiba("Olá Mundo");
                        </li>
                    </ul>`
            },
            {
                element: '#componente-atribuicao',
                hint: `Atribuição de variáveis:<br><br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando de atribuição é utilizado para atribuir um valor à uma variável.
                        </li>
                        <li>
                            Para isso usamos o símbolo "←".
                        </li>
                    </ul>`
            },
            {
                element: '#componente-se',
                hint: `Comando de Desvio Condicional:<br><br>
                    <ul id='ul-dicas'>
                        <li>
                            Se o seu resultado for VERDADEIRO, todos os comandos da &lt;sequência-de-comandos&gt;
                            (entre esta linha e a linha com fimse) são executados.
                        </li>
                        <li>
                            Se o resultado for FALSO, estes comandos são desprezados e a execução do algoritmo 
                            continua a partir da primeira linha depois do fimse.
                        </li>
                    </ul>`
            }
        ],

        hintPosition: 'middle-right',
        hintButtonLabel: "Concluir"
    });

    dicas.addHints();
});