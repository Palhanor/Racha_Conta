//        SELECIONA QUAIS/QUANTOS CLIENTES CONSUMIRAM O PRODUTO
        var contadorDeQuantosClientes = 0;
        var pegarONomeDoCliente = document.getElementsByClassName("dadosDoCliente");
        function selecionarClientes(areaDoPreco, postagemProduto) {
            
            var displayParaSelecionar = document.createElement("div");
            
            corpo.appendChild(displayParaSelecionar);
            displayParaSelecionar.classList.add("displayParaSelecionar");
            
            var itemJaClicado = [];
            var listaDeUsuarios = [];
            for (i = 0; i < contadorCliente; i++) {
                itemJaClicado[i] = false;
                var botaoDaOpcao = document.createElement("button");
                displayParaSelecionar.appendChild(botaoDaOpcao);
                botaoDaOpcao.innerHTML = i+1 + " - " + pegarONomeDoCliente[i].innerHTML;
                botaoDaOpcao.classList.add("botaoParaSelecionar");
                botaoDaOpcao.style.display = "block";
                botaoDaOpcao.addEventListener("click", function() {
                    var pegarPosicaoDoUsuario = this.innerHTML.charAt(0);
                    if (itemJaClicado[pegarPosicaoDoUsuario-1] == false) {
                        contadorDeQuantosClientes++;
                        this.style.backgroundColor = "#ff3c1a";
                        listaDeUsuarios[pegarPosicaoDoUsuario-1] = pegarPosicaoDoUsuario-1;
                        itemJaClicado[pegarPosicaoDoUsuario-1] = true;
                        }
                    else {
                        this.style.backgroundColor = "#FF6347";
                        contadorDeQuantosClientes--;
                        itemJaClicado[pegarPosicaoDoUsuario-1] = false;
                        listaDeUsuarios[pegarPosicaoDoUsuario-1] = null;
                    }
                });
            }
            
            var aplicarEmTodos = document.createElement("button");
            displayParaSelecionar.appendChild(aplicarEmTodos);
            aplicarEmTodos.innerHTML = "Todos";
            aplicarEmTodos.classList.add("botaoParaSelecionar");
            aplicarEmTodos.addEventListener("click", function() {
                funcaoDeAplicarEmTodos(areaDoPreco, postagemProduto, displayParaSelecionar);
            });
            
            var aplicar = document.createElement("button");
            displayParaSelecionar.appendChild(aplicar);
            aplicar.innerHTML = "Aplicar";
            aplicar.classList.add("botaoParaSelecionar");
            aplicar.addEventListener("click", function() {
                aplicaOPrecoAosClientesSelecionados(areaDoPreco, postagemProduto, displayParaSelecionar, listaDeUsuarios);
            });
            
            var fecharOpcoesDeClientes = document.createElement("button");
            displayParaSelecionar.appendChild(fecharOpcoesDeClientes);
            fecharOpcoesDeClientes.innerHTML = "Fechar";
            fecharOpcoesDeClientes.classList.add("botaoParaSelecionar");
            fecharOpcoesDeClientes.addEventListener("click", function() {
                corpo.removeChild(displayParaSelecionar);
                contadorDeQuantosClientes = 0;
            });
        }