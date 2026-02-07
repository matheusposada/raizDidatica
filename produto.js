document.addEventListener("DOMContentLoaded", () => {

  const produtos = {
    "album-numeros": {
      titulo: "Álbum de Números Naturais",
      descricao: "Material interativo para trabalhar números naturais de forma visual e prática.",
      preco: "R$ 4,50",
      imagem: "img/produto1.jpg",
      amostra: "img/amostra1.jpg"
    }
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const produto = produtos[id];

  if (!produto) {
    alert("Produto não encontrado");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("produtoImagem").src = produto.imagem;
  document.getElementById("produtoTitulo").innerText = produto.titulo;
  document.getElementById("produtoDescricao").innerText = produto.descricao;
  document.getElementById("produtoPreco").innerText = produto.preco;

  // MODAL
  const modal = document.getElementById("modalAmostra");
  const modalImg = document.getElementById("modalImagem");

  document.getElementById("btnAmostra").addEventListener("click", () => {
    modalImg.src = produto.amostra;
    modal.classList.add("active");
  });

  document.querySelector(".modal-close").onclick = () => modal.classList.remove("active");
  document.querySelector(".modal-overlay").onclick = () => modal.classList.remove("active");

});