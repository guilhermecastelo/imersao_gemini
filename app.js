function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesqusisa = document.getElementById("campo-pesquisa").value;

    if (campoPesqusisa == "") {
        section.innerHTML = "<p>Informe o nome de algum país no campo de pesquisa.</p>";
        return;
    }

    campoPesqusisa = campoPesqusisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let cont = 0; cont < paises.length; cont++) {

        nome = paises[cont].nome.toLowerCase();
        descricao = paises[cont].descricao.toLowerCase();
        tags = paises[cont].tags.toLowerCase();

        if (nome.includes(campoPesqusisa) || descricao.includes(campoPesqusisa) || tags.includes(campoPesqusisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <img class="icon-flag" src="images/${paises[cont].bandeira}">
                    ${paises[cont].nome}
                </h2>
                <p class="descricao-meta">
                    ${paises[cont].descricao}
                </p>
                <a href="https://pt.wikipedia.org/wiki/${paises[cont].nome}" target="_blank">Saiba mais</a>
            </div>
            `
        }
    }

    if (resultados == "") {
        resultados = "<p>Não foram encontradas informações para o país pesquisado.</p>";
    }

    section.innerHTML = resultados;
}