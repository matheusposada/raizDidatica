const produtos = {
  "album-numeros": {
    titulo: "Álbum de Números Naturais",
    descricao: "Atividade interativa para trabalhar números naturais.",
    preco: "R$ 4,50",
    imagem: "img/produto1.jpg",
    amostra: "img/amostra1.jpg"
  },
  "explosao-potencias": {
    titulo: "Explosão de Potências",
    descricao: "Jogo para fixação de potências.",
    preco: "R$ 4,50",
    imagem: "img/produto2.jpg",
    amostra: "img/amostra2.jpg"
  },
  "bingo-matematico": {
    titulo: "Bingo Matemático",
    descricao: "Bingo educativo para revisão de conteúdos.",
    preco: "R$ 6,00",
    imagem: "img/produto3.jpg",
    amostra: "img/amostra3.jpg"
  },
  "quebra-cabeca": {
    titulo: "Quebra-cabeça Matemático",
    descricao: "Aprenda com diversão e lógica.",
    preco: "R$ 5,50",
    imagem: "img/produto4.jpg",
    amostra: "img/amostra4.jpg"
  },
  "tabuada-interativa": {
    titulo: "Tabuada Interativa",
    descricao: "Fixação das tabuadas de forma prática.",
    preco: "R$ 3,50",
    imagem: "img/produto5.jpg",
    amostra: "img/amostra5.jpg"
  },
  "jogo-decimais": {
    titulo: "Jogo de Decimais",
    descricao: "Aprenda casas decimais brincando.",
    preco: "R$ 4,00",
    imagem: "img/produto6.jpg",
    amostra: "img/amostra6.jpg"
  },
  "geometria-fun": {
    titulo: "Geometria Fun",
    descricao: "Atividades divertidas de geometria.",
    preco: "R$ 5,00",
    imagem: "img/produto7.jpg",
    amostra: "img/amostra7.jpg"
  },
  "matematica-logica": {
    titulo: "Matemática Lógica",
    descricao: "Desafios para desenvolver o raciocínio.",
    preco: "R$ 6,50",
    imagem: "img/produto8.jpg",
    amostra: "img/amostra8.jpg"
  }
};

// Pega o id da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

if(produtos[produtoId]){
  document.getElementById("produtoTitulo").textContent = produtos[produtoId].titulo;
  document.getElementById("produtoDescricao").textContent = produtos[produtoId].descricao;
  document.getElementById("produtoPreco").textContent = produtos[produtoId].preco;
  document.getElementById("produtoImagem").src = produtos[produtoId].imagem;

  const btnAmostra = document.getElementById("btnAmostra");
  btnAmostra.dataset.amostra = produtos[produtoId].amostra;

  btnAmostra.addEventListener("click", () => {
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    modalImg.src = btnAmostra.dataset.amostra;
    modal.classList.add("active");
  });

  // Fecha modal
  document.querySelector(".modal-close").addEventListener("click", () => {
    document.getElementById("modalAmostra").classList.remove("active");
  });
  document.querySelector(".modal-overlay").addEventListener("click", () => {
    document.getElementById("modalAmostra").classList.remove("active");
  });
} else {
  document.getElementById("produtoTitulo").textContent = "Produto não encontrado";
}