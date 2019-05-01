//        DIVIDE O PREÇO DO PRODUTO IGUALMENTE PARA TODOS OS CLIENTES
        var pegarOValorDaAreaComOPrecoDividido1 = document.getElementsByClassName("areaDoValorDividido");
        function funcaoDeAplicarEmTodos(areaDoPreco, postagemProduto, displayParaSelecionar) {
                var valorDoProduto = Number(areaDoPreco.innerHTML);
                var resultadoDaDivisao = valorDoProduto/contadorCliente;
                for (i = 0; i < contadorCliente; i++) {
                    var resultado = Number(pegarOValorDaAreaComOPrecoDividido1[i].innerHTML) + resultadoDaDivisao;
                    pegarOValorDaAreaComOPrecoDividido1[i].innerHTML = resultado.toFixed(2);
                }
                postagemProduto.style.backgroundColor = "#cbc5c5";
//                foiDividido++;
//                console.log(foiDividido);
                corpo.removeChild(displayParaSelecionar);
        }