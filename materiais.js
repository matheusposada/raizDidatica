document.addEventListener("DOMContentLoaded", () => {
    const produtosData = [
        { id: "album-numeros", titulo: "Álbum de Números Naturais", descricao: "Atividade interativa.", preco: "R$ 4,50", imagem: "imagens/produtos/produto1.jpg", amostra: "imagens/amostras/amostra1.jpg" },
        { id: "explosao-potencias", titulo: "Explosão de Potências", descricao: "Jogo para fixação.", preco: "R$ 4,50", imagem: "imagens/produtos/produto2.jpg", amostra: "imagens/amostras/amostra2.jpg" },
        { id: "bingo-matematico", titulo: "Bingo Matemático", descricao: "Bingo educativo.", preco: "R$ 6,00", imagem: "imagens/produtos/produto3.jpg", amostra: "imagens/amostras/amostra3.jpg" },
        { id: "quebra-cabeca", titulo: "Quebra-cabeça Matemático", descricao: "Aprenda com diversão.", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "tabuada-interativa", titulo: "Tabuada Interativa", descricao: "Fixação prática.", preco: "R$ 3,50", imagem: "imagens/produtos/produto5.jpg", amostra: "imagens/amostras/amostra5.jpg" },
        { id: "jogo-decimais", titulo: "Jogo de Decimais", descricao: "Casas decimais brincando.", preco: "R$ 4,00", imagem: "imagens/produtos/produto6.jpg", amostra: "imagens/amostras/amostra6.jpg" },
        { id: "geometria-fun", titulo: "Geometria Fun", descricao: "Atividades de geometria.", preco: "R$ 5,00", imagem: "imagens/produtos/produto7.jpg", amostra: "imagens/amostras/amostra7.jpg" },
        { id: "matematica-logica", titulo: "Matemática Lógica", descricao: "Desafios de raciocínio.", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" }
    ];

    const produtosList = document.getElementById("produtosCarrossel");
    const inputBusca = document.getElementById("buscaProdutos");

    // --- Cria os cards ---
    produtosData.forEach(p => {
        const card = document.createElement("article");
        card.className = "produto-card";
        card.innerHTML = `
            <img src="${p.imagem}" alt="${p.titulo}">
            <h4>${p.titulo}</h4>
            <p class="descricao">${p.descricao}</p>
            <p class="preco">${p.preco}</p>
            <button class="btn btn-amostra" data-amostra="${p.amostra}">Ver amostra</button>
            <a href="produto.html?id=${p.id}" class="btn btn-comprar">Ver detalhes</a>
        `;
        produtosList.appendChild(card);
    });

    // --- Modal ---
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    const closeBtn = modal.querySelector(".modal-close");
    const overlay = modal.querySelector(".modal-overlay");

    function fecharModal() {
        modal.classList.remove("active");
        modalImg.src = "";
    }

    closeBtn.addEventListener("click", fecharModal);
    overlay.addEventListener("click", fecharModal);

    document.querySelectorAll(".btn-amostra").forEach(botao => {
        botao.addEventListener("click", () => {
            modalImg.src = botao.dataset.amostra;
            modal.classList.add("active");
        });
    });

    // --- Busca em tempo real ---
    inputBusca.addEventListener("input", () => {
        const termo = inputBusca.value.toLowerCase();
        produtosList.querySelectorAll(".produto-card").forEach(card => {
            const titulo = card.querySelector("h4").innerText.toLowerCase();
            const descricao = card.querySelector(".descricao").innerText.toLowerCase();
            card.style.display = (titulo.includes(termo) || descricao.includes(termo)) ? "flex" : "none";
        });
    });
});