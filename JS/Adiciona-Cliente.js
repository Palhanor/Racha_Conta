//ADICIONA UM NOVO CLEINTE
        var contadorCliente = 0;
        function addClienteFunction() {
            var nomeCliente = document.getElementById("nomeCliente");
            
            if (nomeCliente.value != "") {
                var containerGeral = document.createElement("div");
                var postagemCliente = document.createElement("div");
                var iconeDoUsuario = document.createElement("div");
                var dadosDoCliente = document.createElement("div");
                var areaDoValorDividido = document.createElement("div");
                
                listaClientesContainer.appendChild(containerGeral);
                containerGeral.style.width = "25%";
                containerGeral.style.padding = "1%";
                containerGeral.style.display = "inline-block";
//                containerGeral.style.float = "left";
                containerGeral.appendChild(postagemCliente);
                postagemCliente.appendChild(iconeDoUsuario);
                iconeDoUsuario.classList.add("iconeDoUsuario");
                iconeDoUsuario.classList.add("fas");
                iconeDoUsuario.classList.add("fa-user");
                postagemCliente.classList.add("postagemCliente");
                postagemCliente.appendChild(dadosDoCliente);
                dadosDoCliente.classList.add("dadosDoCliente");
                postagemCliente.appendChild(areaDoValorDividido);
                areaDoValorDividido.classList.add("areaDoValorDividido");
                
                dadosDoCliente.innerHTML += nomeCliente.value;
                areaDoValorDividido.innerHTML = "0";
                nomeCliente.value = "";
                
                contadorCliente++;
                }
        }