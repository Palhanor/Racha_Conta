//        APLICA O VALOR DIVIDIDO PARA OS CLIENTES ESCOLHIDOS
        var pegarOValorDaAreaComOPrecoDividido2 = document.getElementsByClassName("areaDoValorDividido");
        function aplicaOPrecoAosClientesSelecionados(areaDoPreco, postagemProduto, displayParaSelecionar, listaDeUsuarios) {
            
            var valorDoProduto = Number(areaDoPreco.innerHTML);
            var resultadoDaDivisao = valorDoProduto/contadorDeQuantosClientes;
            for (i = 0; i < contadorCliente; i++) {
               
                    if (listaDeUsuarios[i] != null) {
                        var resultado = Number(pegarOValorDaAreaComOPrecoDividido2[i].innerHTML) + resultadoDaDivisao;
                        pegarOValorDaAreaComOPrecoDividido2[i].innerHTML = resultado.toFixed(2);
                        contadorDeQuantosClientes = 0;
                        }
                    if ((listaDeUsuarios[i] !== listaDeUsuarios[0]) || (listaDeUsuarios[0] == 0)) {
                        postagemProduto.style.backgroundColor = "#cbc5c5";
                    }
                }
            corpo.removeChild(displayParaSelecionar);
        }