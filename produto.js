document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const produtoId = params.get("id");

  const produto = produtosData.find(p => p.id === produtoId);

  if (produto) {

    document.getElementById("produtoTitulo").textContent = produto.titulo;
    document.getElementById("produtoDescricao").textContent = produto.descricao;
    document.getElementById("produtoPreco").textContent = produto.preco;
    document.getElementById("produtoImagem").src = produto.imagem;

    const btnAmostra = document.getElementById("btnAmostra");

    btnAmostra.addEventListener("click", () => {
      const modal = document.getElementById("modalAmostra");
      const modalImg = document.getElementById("modalImagem");
      modalImg.src = produto.amostra;
      modal.classList.add("active");
    });

    document.querySelector(".modal-close").addEventListener("click", () => {
      document.getElementById("modalAmostra").classList.remove("active");
    });

    document.querySelector(".modal-overlay").addEventListener("click", () => {
      document.getElementById("modalAmostra").classList.remove("active");
    });

  } else {
    document.getElementById("produtoTitulo").textContent = "Produto não encontrado";
  }

});