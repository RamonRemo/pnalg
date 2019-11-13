$(function() {

    let dicas = introJs();

    dicas.setOptions({
        hints: [{
                element: '#componente-declare',
                hint: `Declaração de variáveis: <br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando <b>DECLARE</b> cria as variáveis que serão usadas no algoritmo.
                        </li>                    
                    </ul>`
            },
            {
                element: '#componente-leia',
                hint: `Entrada de Dados: <br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando <b>LEIA( )</b> faz a leitura de variáveis do usuário.
                        </li>                    
                    </ul>`
            },
            {
                element: '#componente-exiba',
                hint: `Saída de Dados: <br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando <b>EXIBA( )</b> mostra na tela as mensagens.
                        </li>
                    </ul>`
            },
            {
                element: '#componente-atribuicao',
                hint: `Atribuição ( ⇦ ):<br>
                    <ul id='ul-dicas'>
                        <li>
                            O operador de atribuição (⇦), atribui valores para variáveis.
                        </li>
                    </ul>`
            },
            {
                element: '#componente-se',
                hint: `Comando Condicional SE:<br>
                    <ul id='ul-dicas'>
                        <li>
                            O comando SE faz um teste lógico. Caso o resultado seja VERDADEIRO 
                            então os comandos internos ao SE serão executados. Caso contrário, 
                            esses comandos internos serão ignorados.
                        </li>                        
                    </ul>`
            }
        ],

        hintPosition: 'middle-right',
        hintButtonLabel: "Fechar"
    });

    dicas.addHints();
});