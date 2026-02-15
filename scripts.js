document.addEventListener("DOMContentLoaded", () => {
    const produtosData = [
        { id: "escola-area", titulo: "Álbum de área - escola", categoria: "Área", descricao: "Área", preco: "R$ 4,50", imagem: "imagens/produtos/produto1.jpg", amostra: "imagens/amostras/amostra1.jpg" },
        { id: "decomposicao", titulo: "Decomposição em fatores primos - Stitch", categoria: "Decomposição em fatores primos", descricao: "Decomposição em fatores primos", preco: "R$ 4,50", imagem: "imagens/produtos/produto2.jpg", amostra: "imagens/amostras/amostra2.jpg" },
        { id: "desafio-dos-simbolos", titulo: "Desafio dos simbolos", categoria: "Desafios", descricao: "Desafios", preco: "R$ 6,00", imagem: "imagens/produtos/produto3.jpg", amostra: "imagens/amostras/amostra3.jpg" },
        { id: "receitas-despesas", titulo: "Receitas e Despesa", categoria: "Educação Financeira", descricao: "Educação Financeira", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "evolucao-dinheiro", titulo: "Evolução do dinheiro", categoria: "Educação Financeira", descricao: "Educação Financeira", preco: "R$ 3,50", imagem: "imagens/produtos/produto5.jpg", amostra: "imagens/amostras/amostra5.jpg" },
        { id: "produtos-bancarios", titulo: "Produtos bancários", categoria: "Educação Financeira", descricao: "Educação Financeira", preco: "R$ 4,00", imagem: "imagens/produtos/produto6.jpg", amostra: "imagens/amostras/amostra6.jpg" },
        { id: "equacao-aviao", titulo: "Equação do 1º grau - avião", categoria: "Equação 1º grau", descricao: "Equação 1º grau", preco: "R$ 5,00", imagem: "imagens/produtos/produto7.jpg", amostra: "imagens/amostras/amostra7.jpg" },
        { id: "equacao-frutas", titulo: "Frutas abre e fecha", categoria: "Equação 1º grau", descricao: "Equação 1º grau", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "equacoes-1grau", titulo: "Equações do 1º grau", categoria: "Equação 1º grau", descricao: "Equação 1º grau", preco: "R$ 4,50", imagem: "imagens/produtos/produto1.jpg", amostra: "imagens/amostras/amostra1.jpg" },
        { id: "equacao-2grau", titulo: "Equação do 2º grau", categoria: "Equação 2º grau", descricao: "Equação 1º grau", preco: "R$ 4,50", imagem: "imagens/produtos/produto2.jpg", amostra: "imagens/amostras/amostra2.jpg" },
        { id: "expressoes-minions", titulo: "Minions", categoria: "Expressões numéricas", descricao: "Expressões numéricas", preco: "R$ 6,00", imagem: "imagens/produtos/produto3.jpg", amostra: "imagens/amostras/amostra3.jpg" },
        { id: "instrumentos-musicais", titulo: "Instrumentos musicais", categoria: "Expressões numéricas", descricao: "Expressões numéricas", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "identificacao-fracao", titulo: "Identificação de fração", categoria: "Fração", descricao: "Fração", preco: "R$ 3,50", imagem: "imagens/produtos/produto5.jpg", amostra: "imagens/amostras/amostra5.jpg" },
        { id: "bob-esponja", titulo: "Adição e subtração de fração - Bob Esponja", categoria: "Fração", descricao: "Fração", preco: "R$ 4,00", imagem: "imagens/produtos/produto6.jpg", amostra: "imagens/amostras/amostra6.jpg" },
        { id: "pizza", titulo: "Recorte - pizza", categoria: "Fração", descricao: "Fração", preco: "R$ 5,00", imagem: "imagens/produtos/produto7.jpg", amostra: "imagens/amostras/amostra7.jpg" },
        { id: "trilha", titulo: "Trilha - adição e subtração de fração", categoria: "Fração", descricao: "Fração", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "juros-compostos", titulo: "Juros compostos", categoria: "Juros compostos", descricao: "Juros compostos", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "juros-simples", titulo: "Juros simples", categoria: "Juros simples", descricao: "Juros simples", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "linguagem-algebrica", titulo: "Linguagem algébrica", categoria: "Linguagem algébrica", descricao: "Linguagem algébrica", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "abre-fecha", titulo: "Abre e fecha", categoria: "Média, moda e mediana", descricao: "Média, moda e mediana", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "monomios-semelhantes", titulo: "Monômios semelhantes", categoria: "Monômios", descricao: "Monômios", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "notacao-bob-esponja", titulo: "Notação - Bob Esponja", categoria: "Notação científica", descricao: "Notação científica", preco: "R$ 6,50", imagem: "imagens/produtos/produto8.jpg", amostra: "imagens/amostras/amostra8.jpg" },
        { id: "halloween", titulo: "Halloween", categoria: "Números decimais", descricao: "Números decimais", preco: "R$ 4,50", imagem: "imagens/produtos/produto1.jpg", amostra: "imagens/amostras/amostra1.jpg" },
        { id: "ferias", titulo: "Férias", categoria: "Números decimais", descricao: "Números decimais", preco: "R$ 4,50", imagem: "imagens/produtos/produto2.jpg", amostra: "imagens/amostras/amostra2.jpg" },
        { id: "gatinho", titulo: "Gatinho", categoria: "Números decimais", descricao: "Números decimais", preco: "R$ 6,00", imagem: "imagens/produtos/produto3.jpg", amostra: "imagens/amostras/amostra3.jpg" },
        { id: "natal", titulo: "Natal", categoria: "Números decimais", descricao: "Números decimais", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "egito", titulo: "Sistema de numeração egipcio", categoria: "Números egipcios", descricao: "Números egipcios", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "bbb-4operacoes", titulo: "Quatro operações - bbb", categoria: "Números inteiros", descricao: "Números inteiros", preco: "R$ 4,50", imagem: "imagens/produtos/produto1.jpg", amostra: "imagens/amostras/amostra1.jpg" },
        { id: "bbb-adicao-subtracao", titulo: "Adição e subtração - bbb", categoria: "Números inteiros", descricao: "Números inteiros", preco: "R$ 4,50", imagem: "imagens/produtos/produto2.jpg", amostra: "imagens/amostras/amostra2.jpg" },
        { id: "bbb-multiplicacao-divisao", titulo: "Multiplicação e divisão - bbb", categoria: "Números inteiros", descricao: "Números inteiros", preco: "R$ 6,00", imagem: "imagens/produtos/produto3.jpg", amostra: "imagens/amostras/amostra3.jpg" },
        { id: "carnaval", titulo: "Natal", categoria: "Potenciação - carnaval", descricao: "Números inteiros", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "pavao", titulo: "Números inteiros - pavão", categoria: "Números inteiros", descricao: "Números inteiros", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "animais", titulo: "Quatro operações - animais", categoria: "Números naturais", descricao: "Números naturais", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "bbb-4operacoes-naturais", titulo: "Quatro operações (naturais) - bbb", categoria: "Números naturais", descricao: "Números naturais", preco: "R$ 4,50", imagem: "imagens/produtos/produto1.jpg", amostra: "imagens/amostras/amostra1.jpg" },
        { id: "carnaval-multiplicacao", titulo: "Multiplicação - carnaval", categoria: "Números naturais", descricao: "Números naturais", preco: "R$ 4,50", imagem: "imagens/produtos/produto2.jpg", amostra: "imagens/amostras/amostra2.jpg" },
        { id: "capivara", titulo: "Adição e subtração - capivara", categoria: "Números naturais", descricao: "Números naturais", preco: "R$ 6,00", imagem: "imagens/produtos/produto3.jpg", amostra: "imagens/amostras/amostra3.jpg" },
        { id: "volta-4operacoes", titulo: "Quatro operações - volta às aulas", categoria: "Números naturais", descricao: "Números naturais", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "jogo-memoria", titulo: "Operações básicas - jogo da memória", categoria: "Números naturais", descricao: "Números naturais", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "girafa", titulo: "Primos ou compostos - girafa", categoria: "Números primos ou compostos", descricao: "Números primos ou compostos", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "primos", titulo: "Primos e compostos", categoria: "Números primos ou compostos", descricao: "Números primos ou compostos", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "abre-fecha-romanos", titulo: "Abre e fecha - romanos", categoria: "Números romanos", descricao: "Números romanos", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "roma", titulo: "Números romanos - Roma", categoria: "Números romanos", descricao: "Números romanos", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "escola-perimetro", titulo: "Perímetro - escola", categoria: "Perímetro", descricao: "Perímetro", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "pintura", titulo: "Pintura - gatinho", categoria: "Potenciação", descricao: "Porcentagem", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "carnaval-porcentagem", titulo: "Porcentagem - carnaval", categoria: "Porcentagem", descricao: "Porcentagem", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "desconto", titulo: "Desconto", categoria: "Porcentagem", descricao: "Porcentagem", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "paises", titulo: "Potência e raiz - países", categoria: "Potenciação", descricao: "Potenciação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "times", titulo: "Potência - times", categoria: "Potenciação", descricao: "Potenciação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "trilha-gatinho", titulo: "Potência e raiz - gatinho", categoria: "Potenciação", descricao: "Potenciação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "simpsons", titulo: "Potência - Simpsons", categoria: "Potenciação", descricao: "Potenciação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "abre-fecha-probabilidade", titulo: "Abre e fecha - probabilidade", categoria: "Probabilidade", descricao: "Probabilidade", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "paises-radiacao", titulo: "Potência e raiz - países", categoria: "Radiação", descricao: "Radiação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "times-radiacao", titulo: "Potência - times", categoria: "Radiação", descricao: "Radiação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "trilha-gatinho-radiacao", titulo: "Potência e raiz - gatinho", categoria: "Radiação", descricao: "Radiação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "Scooby-doo-radiacao", titulo: "Potência - Scooby Doo", categoria: "Radiação", descricao: "Radiação", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "simpsons-regra-de-tres", titulo: "Regra de três - Simpsons", categoria: "Regra de três", descricao: "Regra de três", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "sondagem-6ano", titulo: "Sondagem - 6º ano", categoria: "Volta às aulas", descricao: "Volta às aulas", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "sondagem-7ano", titulo: "Sondagem - 7º ano", categoria: "Volta às aulas", descricao: "Volta às aulas", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "sondagem-8ano", titulo: "Sondagem - 8º ano", categoria: "Volta às aulas", descricao: "Volta às aulas", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "sondagem-9ano", titulo: "Sondagem - 9º ano", categoria: "Volta às aulas", descricao: "Volta às aulas", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
        { id: "volta-subtracao", titulo: "Subtração", categoria: "Volta às aulas", descricao: "Volta às aulas", preco: "R$ 5,50", imagem: "imagens/produtos/produto4.jpg", amostra: "imagens/amostras/amostra4.jpg" },
    ];

    const produtosList = document.getElementById("produtosCarrossel");
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    const closeBtn = modal.querySelector(".modal-close");
    const overlay = modal.querySelector(".modal-overlay");
    const inputBusca = document.getElementById("buscaProdutos");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

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

    // --- Carrossel ---
    nextBtn.addEventListener("click", () => {
        const card = produtosList.querySelector(".produto-card");
        produtosList.scrollBy({ left: card.offsetWidth + 20, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        const card = produtosList.querySelector(".produto-card");
        produtosList.scrollBy({ left: -(card.offsetWidth + 20), behavior: "smooth" });
    });

    // --- Busca em tempo real ---
    if (inputBusca) {
        inputBusca.addEventListener("input", () => {
            const termo = inputBusca.value.toLowerCase();
            produtosList.querySelectorAll(".produto-card").forEach(card => {
                const titulo = card.querySelector("h4").innerText.toLowerCase();
                const descricao = card.querySelector(".descricao").innerText.toLowerCase();
                card.style.display = (titulo.includes(termo) || descricao.includes(termo)) ? "flex" : "none";
            });
        });
    }
});
// scripts.js

// Seleciona elementos
const emailCard = document.getElementById("email-card");
const emailText = document.getElementById("email-text");

// Esconde/exibe o e-mail ao clicar
emailCard.addEventListener("click", () => {
    if (emailText.style.display === "block") {
        emailText.style.display = "none";
    } else {
        emailText.style.display = "block";
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