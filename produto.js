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
// ===== CARRINHO =====
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const carrinhoEl = document.getElementById("carrinho");
const overlay = document.getElementById("carrinhoOverlay");
const btnAbrir = document.getElementById("abrirCarrinho");
const btnFechar = document.getElementById("fecharCarrinho");
const carrinhoItens = document.getElementById("carrinhoItens");
const carrinhoTotal = document.getElementById("carrinhoTotal");
const contadorCarrinho = document.getElementById("contadorCarrinho");

// Abrir/fechar
btnAbrir?.addEventListener("click", () => {
  carrinhoEl.classList.add("active");
  overlay.classList.add("active");
});
btnFechar?.addEventListener("click", fecharCarrinho);
overlay?.addEventListener("click", fecharCarrinho);

function fecharCarrinho() {
  carrinhoEl.classList.remove("active");
  overlay.classList.remove("active");
}

// Adicionar ao carrinho
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    e.preventDefault();
    const url = new URL(e.target.href);
    const id = url.searchParams.get("id");
    adicionarAoCarrinho(id);
  }
});

function adicionarAoCarrinho(id) {
  const produto = produtosData.find(p => p.id === id);
  const existente = carrinho.find(item => item.id === id);

  if (existente) {
    existente.qtd++;
  } else {
    carrinho.push({ ...produto, qtd: 1 });
  }

  salvarCarrinho();
  atualizarCarrinhoUI();
}

function removerItem(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho();
  atualizarCarrinhoUI();
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizarCarrinhoUI() {
  carrinhoItens.innerHTML = "";
  let total = 0;
  let quantidadeTotal = 0;

  carrinho.forEach(item => {
    const precoNumerico = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    total += precoNumerico * item.qtd;
    quantidadeTotal += item.qtd;

    carrinhoItens.innerHTML += `
            <div class="carrinho-item">
                <strong>${item.titulo}</strong>
                <p>${item.qtd}x ${item.preco}</p>
                <button onclick="removerItem('${item.id}')">Remover</button>
            </div>
        `;
  });

  carrinhoTotal.textContent =
    "R$ " + total.toFixed(2).replace(".", ",");
  contadorCarrinho.textContent = quantidadeTotal;
}

atualizarCarrinhoUI();