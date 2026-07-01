// Funcao para buscar CEP
function buscarCep() {
    var cep = document.getElementById("cep").value;
    var resultado = document.getElementById("resultado-cep");

    if (cep == "") {
        resultado.innerHTML = "Digite um CEP.";
        return;
    }

    resultado.innerHTML = "Buscando...";

    fetch("https://brasilapi.com.br/api/cep/v1/" + cep)
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error("CEP nao encontrado");
            }
            return resposta.json();
        })
        .then(function(dados) {
            resultado.innerHTML =
                "<b>CEP:</b> " + dados.cep + "<br>" +
                "<b>Estado:</b> " + dados.state + "<br>" +
                "<b>Cidade:</b> " + dados.city + "<br>" +
                "<b>Bairro:</b> " + (dados.neighborhood || "-") + "<br>" +
                "<b>Rua:</b> " + (dados.street || "-");
        })
        .catch(function(erro) {
            resultado.innerHTML = "Erro: " + erro.message;
        });
}

// Funcao para buscar dominio no Registro BR
function buscarDominio() {
    var dominio = document.getElementById("dominio").value;
    var resultado = document.getElementById("resultado-dominio");

    if (dominio == "") {
        resultado.innerHTML = "Digite um dominio.";
        return;
    }

    resultado.innerHTML = "Buscando...";

    fetch("https://brasilapi.com.br/api/registrobr/v1/" + dominio)
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error("Dominio nao encontrado");
            }
            return resposta.json();
        })
        .then(function(dados) {
            resultado.innerHTML =
                "<b>Dominio:</b> " + dados.fqdn + "<br>" +
                "<b>Status:</b> " + dados.status + "<br>" +
                "<b>Publicacao:</b> " + (dados.publication_status || "-") + "<br>" +
                "<b>Expira em:</b> " + (dados.expires_at || "-");
        })
        .catch(function(erro) {
            resultado.innerHTML = "Erro: " + erro.message;
        });
}

// Funcao para buscar cotacao do Cambio
function buscarCambio() {
    var moeda = document.getElementById("moeda").value.toUpperCase();
    var data = document.getElementById("data-cambio").value;
    var resultado = document.getElementById("resultado-cambio");

    if (moeda == "" || data == "") {
        resultado.innerHTML = "Preencha a moeda e a data.";
        return;
    }

    resultado.innerHTML = "Buscando...";

    fetch("https://brasilapi.com.br/api/cambio/v1/cotacao/" + moeda + "/" + data)
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error("Cotacao nao encontrada. Verifique se e dia util.");
            }
            return resposta.json();
        })
        .then(function(dados) {
            var cotacao = dados.cotacoes[0];
            resultado.innerHTML =
                "<b>Moeda:</b> " + dados.moeda + "<br>" +
                "<b>Data:</b> " + dados.data + "<br>" +
                "<b>Compra:</b> R$ " + cotacao.cotacao_compra + "<br>" +
                "<b>Venda:</b> R$ " + cotacao.cotacao_venda + "<br>" +
                "<b>Boletim:</b> " + cotacao.tipo_boletim;
        })
        .catch(function(erro) {
            resultado.innerHTML = "Erro: " + erro.message;
        });
}
