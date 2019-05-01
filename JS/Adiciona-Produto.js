//ADICIONA UM NOVO PRODUTO (COM SEU PREÇO)
        var contadorProduto = 0;
        function addProdutoFunction() {
            var nomeProduto = document.getElementById("nomeProduto");
            var precoProduto = document.getElementById("precoProduto");
            
            if ((nomeProduto.value != "") && (precoProduto.value != "") && (!isNaN(precoProduto.value))) {
                var postagemProduto = document.createElement("div");
                var dadosDoProduto = document.createElement("div");
                var areaDoPreco = document.createElement("div");
                
                listaProdutosContainer.appendChild(postagemProduto);
                postagemProduto.classList.add("postagemProduto");
                postagemProduto.addEventListener("click", function() {
                    selecionarClientes(areaDoPreco, postagemProduto);
                });
                postagemProduto.appendChild(dadosDoProduto);
                dadosDoProduto.classList.add("dadosDoProduto");
                postagemProduto.appendChild(areaDoPreco);
                areaDoPreco.classList.add("areaDoPreco");
                
                dadosDoProduto.innerHTML += contadorProduto+1 + " - " + nomeProduto.value;
                areaDoPreco.innerHTML = precoProduto.value;
                
                nomeProduto.value = "";
                precoProduto.value = "";
                contadorProduto++;
                }
        }