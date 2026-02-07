document.addEventListener("DOMContentLoaded", () => {

    // DADOS DOS PRODUTOS
    const produtosData = [
        { id: "album-numeros", titulo: "Álbum de Números Naturais", descricao: "Atividade interativa.", preco: "R$ 4,50", imagem: "img/produto1.jpg", amostra: "img/amostra1.jpg" },
        { id: "explosao-potencias", titulo: "Explosão de Potências", descricao: "Jogo para fixação.", preco: "R$ 4,50", imagem: "img/produto2.jpg", amostra: "img/amostra2.jpg" },
        { id: "bingo-matematico", titulo: "Bingo Matemático", descricao: "Bingo educativo.", preco: "R$ 6,00", imagem: "img/produto3.jpg", amostra: "img/amostra3.jpg" },
        { id: "quebra-cabeca", titulo: "Quebra-cabeça Matemático", descricao: "Aprenda com diversão.", preco: "R$ 5,50", imagem: "img/produto4.jpg", amostra: "img/amostra4.jpg" },
        { id: "tabuada-interativa", titulo: "Tabuada Interativa", descricao: "Fixação prática.", preco: "R$ 3,50", imagem: "img/produto5.jpg", amostra: "img/amostra5.jpg" },
        { id: "jogo-decimais", titulo: "Jogo de Decimais", descricao: "Casas decimais brincando.", preco: "R$ 4,00", imagem: "img/produto6.jpg", amostra: "img/amostra6.jpg" },
        { id: "geometria-fun", titulo: "Geometria Fun", descricao: "Atividades de geometria.", preco: "R$ 5,00", imagem: "img/produto7.jpg", amostra: "img/amostra7.jpg" },
        { id: "matematica-logica", titulo: "Matemática Lógica", descricao: "Desafios de raciocínio.", preco: "R$ 6,50", imagem: "img/produto8.jpg", amostra: "img/amostra8.jpg" }
    ];

    const produtosList = document.getElementById("produtosCarrossel");

    // CRIA OS CARDS
    produtosData.forEach(p => {
        const card = document.createElement("div");
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

    // MODAL
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    const closeBtn = modal.querySelector(".modal-close");
    const overlay = modal.querySelector(".modal-overlay");

    produtosList.addEventListener("click", e => {
        if (e.target.classList.contains("btn-amostra")) {
            modalImg.src = e.target.dataset.amostra;
            modal.classList.add("active");
        }
    });

    function fecharModal() {
        modal.classList.remove("active");
        modalImg.src = "";
    }

    closeBtn.addEventListener("click", fecharModal);
    overlay.addEventListener("click", fecharModal);

    // CARROSSEL SIMPLES
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let scrollIndex = 0;
    const gap = 20; // gap do CSS

    prevBtn.addEventListener("click", () => {
        if (scrollIndex > 0) scrollIndex--;
        atualizarCarrossel();
    });

    nextBtn.addEventListener("click", () => {
        if (scrollIndex < produtosData.length - 3) scrollIndex++;
        atualizarCarrossel();
    });

    function atualizarCarrossel() {
        const cardWidth = produtosList.children[0].offsetWidth + gap;
        produtosList.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
    }

});