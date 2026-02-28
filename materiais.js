document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // DADOS DOS PRODUTOS
    // ==============================

    const produtosData = [
        {
            id: "escola-area",
            titulo: "Álbum de área - escola",
            categoria: "Área",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/escola.png",
            amostra: "imagens/amostras/escola.png"
        },
        {
            id: "decomposicao",
            titulo: "Decomposição em fatores primos - Stitch",
            categoria: "Decomposição em fatores primos",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/decomposicao.png",
            amostra: "imagens/amostras/decomposicao.png"
        },
        {
            id: "desafio-dos-simbolos",
            titulo: "Desafio dos símbolos",
            categoria: "Desafios",
            preco: "R$ 6,00",
            imagem: null,
            amostra: null
        },
        {
            id: "receitas-despesas",
            titulo: "Receitas e Despesas",
            categoria: "Educação Financeira",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/receitas-despesas.png",
            amostra: "imagens/amostras/receitas-despesas.png"
        },
        {
            id: "evolucao-dinheiro",
            titulo: "Evolução do dinheiro",
            categoria: "Educação Financeira",
            preco: "R$ 3,50",
            imagem: null,
            amostra: null
        },
        {
            id: "produtos-bancarios",
            titulo: "Produtos bancários",
            categoria: "Educação Financeira",
            preco: "R$ 4,00",
            imagem: null,
            amostra: null
        },
        {
            id: "equacao-aviao",
            titulo: "Equação do 1º grau - avião",
            categoria: "Equação 1º grau",
            preco: "R$ 5,00",
            imagem: null,
            amostra: null
        },
        {
            id: "equacao-frutas",
            titulo: "Frutas abre e fecha",
            categoria: "Equação 1º grau",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "equacoes-1grau",
            titulo: "Equações do 1º grau",
            categoria: "Equação 1º grau",
            preco: "R$ 4,50",
            imagem: null,
            amostra: null
        },
        {
            id: "equacao-2grau",
            titulo: "Equação do 2º grau",
            categoria: "Equação 2º grau",
            preco: "R$ 4,50",
            imagem: null,
            amostra: null
        },
        {
            id: "expressoes-minions",
            titulo: "Minions",
            categoria: "Expressões numéricas",
            preco: "R$ 6,00",
            imagem: "imagens/amostras/expressoes-minions.png",
            amostra: "imagens/amostras/expressoes-minions.png"
        },
        {
            id: "instrumentos-musicais",
            titulo: "Instrumentos musicais",
            categoria: "Expressões numéricas",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "identificacao-fracao",
            titulo: "Identificação de fração",
            categoria: "Fração",
            preco: "R$ 3,50",
            imagem: "imagens/amostras/identificacao-fracao.png",
            amostra: "imagens/amostras/identificacao-fracao.png"
        },
        {
            id: "bob-esponja",
            titulo: "Adição e subtração de fração - Bob Esponja",
            categoria: "Fração",
            preco: "R$ 4,00",
            imagem: "imagens/amostras/bob-esponja.png",
            amostra: "imagens/amostras/bob-esponja.png"
        },
        {id: "pizza", titulo: "Recorte - pizza", categoria: "Fração", preco: "R$ 5,00", imagem: null, amostra: null},
        {
            id: "trilha",
            titulo: "Trilha - adição e subtração de fração",
            categoria: "Fração",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "juros-compostos",
            titulo: "Juros compostos",
            categoria: "Juros compostos",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "juros-simples",
            titulo: "Juros simples",
            categoria: "Juros simples",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "linguagem-algebrica",
            titulo: "Linguagem algébrica",
            categoria: "Linguagem algébrica",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "abre-fecha",
            titulo: "Abre e fecha",
            categoria: "Média, moda e mediana",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "monomios-semelhantes",
            titulo: "Monômios semelhantes",
            categoria: "Monômios",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "notacao-bob-esponja",
            titulo: "Notação - Bob Esponja",
            categoria: "Notação científica",
            preco: "R$ 6,50",
            imagem: null,
            amostra: null
        },
        {
            id: "halloween",
            titulo: "Halloween",
            categoria: "Números decimais",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/halloween.png",
            amostra: "imagens/amostras/halloween.png"
        },
        {
            id: "ferias",
            titulo: "Férias",
            categoria: "Números decimais",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/ferias.png",
            amostra: "imagens/amostras/ferias.png"
        },
        {
            id: "gatinho",
            titulo: "Gatinho",
            categoria: "Números decimais",
            preco: "R$ 6,00",
            imagem: "imagens/amostras/gatinho.png",
            amostra: "imagens/amostras/gatinho.png"
        },
        {
            id: "natal",
            titulo: "Natal",
            categoria: "Números decimais",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/natal.png",
            amostra: "imagens/amostras/natal.png"
        },
        {
            id: "egito",
            titulo: "Sistema de numeração egípcio",
            categoria: "Números egípcios",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/egito.png",
            amostra: "imagens/amostras/egito.png"
        },
        {
            id: "bbb-4operacoes",
            titulo: "Quatro operações - bbb",
            categoria: "Números inteiros",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/bbb-4operacoes.png",
            amostra: "imagens/amostras/bbb-4operacoes.png"
        },
        {
            id: "bbb-adicao-subtracao",
            titulo: "Adição e subtração - bbb",
            categoria: "Números inteiros",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/bbb-adicao-subtracao.png",
            amostra: "imagens/amostras/bbb-adicao-subtracao.png"
        },
        {
            id: "bbb-multiplicacao-divisao",
            titulo: "Multiplicação e divisão - bbb",
            categoria: "Números inteiros",
            preco: "R$ 6,00",
            imagem: "imagens/amostras/bbb-multiplicacao-divisao.png",
            amostra: "imagens/amostras/bbb-multiplicacao-divisao.png"
        },
        {
            id: "pavao",
            titulo: "Números inteiros - pavão",
            categoria: "Números inteiros",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "carnaval-potenciacao",
            titulo: "Potenciação - carnaval",
            categoria: "Potenciação",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/carnaval-potenciacao.png",
            amostra: "imagens/amostras/carnaval-potenciacao.png"
        },
        {
            id: "animais",
            titulo: "Quatro operações - animais",
            categoria: "Números naturais",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "bbb-4operacoes-naturais",
            titulo: "Quatro operações (naturais) - bbb",
            categoria: "Números naturais",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/bbb-4operacoes-naturais.png",
            amostra: "imagens/amostras/bbb-4operacoes-naturais.png"
        },
        {
            id: "carnaval-multiplicacao",
            titulo: "Multiplicação - carnaval",
            categoria: "Números naturais",
            preco: "R$ 4,50",
            imagem: "imagens/amostras/carnaval-multiplicacao.png",
            amostra: "imagens/amostras/carnaval-multiplicacao.png"
        },
        {
            id: "capivara",
            titulo: "Adição e subtração - capivara",
            categoria: "Números naturais",
            preco: "R$ 6,00",
            imagem: null,
            amostra: null
        },
        {
            id: "volta-4operacoes",
            titulo: "Quatro operações - volta às aulas",
            categoria: "Números naturais",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/volta-4operacoes.png",
            amostra: "imagens/amostras/volta-4operacoes.png"
        },
        {
            id: "jogo-memoria",
            titulo: "Operações básicas - jogo da memória",
            categoria: "Números naturais",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "girafa",
            titulo: "Primos ou compostos - girafa",
            categoria: "Números primos ou compostos",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/girafa.png",
            amostra: "imagens/amostras/girafa.png"
        },
        {
            id: "primos",
            titulo: "Primos e compostos",
            categoria: "Números primos ou compostos",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "abre-fecha-romanos",
            titulo: "Abre e fecha - romanos",
            categoria: "Números romanos",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "roma",
            titulo: "Números romanos - Roma",
            categoria: "Números romanos",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/roma.png",
            amostra: "imagens/amostras/roma.png"
        },
        {
            id: "escola-perimetro",
            titulo: "Perímetro - escola",
            categoria: "Perímetro",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/escola-perimetro.png",
            amostra: "imagens/amostras/escola-perimetro.png"
        },
        {
            id: "pintura",
            titulo: "Pintura - gatinho",
            categoria: "Potenciação",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "carnaval-porcentagem",
            titulo: "Porcentagem - carnaval",
            categoria: "Porcentagem",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/carnaval-porcentagem.png",
            amostra: "imagens/amostras/carnaval-porcentagem.png"
        },
        {id: "desconto", titulo: "Desconto", categoria: "Porcentagem", preco: "R$ 5,50", imagem: null, amostra: null},
        {
            id: "paises",
            titulo: "Potência e raiz - países",
            categoria: "Potenciação",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/paises.png",
            amostra: "imagens/amostras/paises.png"
        },
        {
            id: "times",
            titulo: "Potência - times",
            categoria: "Potenciação",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/times.png",
            amostra: "imagens/amostras/times.png"
        },
        {
            id: "trilha-gatinho",
            titulo: "Potência e raiz - gatinho",
            categoria: "Potenciação",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "simpsons",
            titulo: "Potência - Simpsons",
            categoria: "Potenciação",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/simpsons.png",
            amostra: "imagens/amostras/simpsons.png"
        },
        {
            id: "abre-fecha-probabilidade",
            titulo: "Abre e fecha - probabilidade",
            categoria: "Probabilidade",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "paises-radiacao",
            titulo: "Potência e raiz - países",
            categoria: "Radiação",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "times-radiacao",
            titulo: "Potência - times",
            categoria: "Radiação",
            preco: "R$ 5,50",
            imagem: null,
            amostra: null
        },
        {
            id: "trilha-gatinho-radiacao",
            titulo: "Potência e raiz - gatinho",
            categoria: "Radiação",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/trilha-gatinho-radiacao.png",
            amostra: "imagens/amostras/trilha-gatinho-radicacao.png"
        },
        {
            id: "scooby-doo-radiacao",
            titulo: "Potência - Scooby Doo",
            categoria: "Radiação",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/scooby-doo-radiacao.png",
            amostra: "imagens/amostras/scooby-doo-radicacao.png"
        },
        {
            id: "simpsons-regra-de-tres",
            titulo: "Regra de três - Simpsons",
            categoria: "Regra de três",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/simpsons-regra-de-tres.png",
            amostra: "imagens/amostras/simpsons-regra-de-tres.png"
        },
        {
            id: "sondagem-6ano",
            titulo: "Sondagem - 6º ano",
            categoria: "Volta às aulas",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/sondagem.png",
            amostra: "imagens/amostras/sondagem.png"
        },
        {
            id: "sondagem-7ano",
            titulo: "Sondagem - 7º ano",
            categoria: "Volta às aulas",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/sondagem.png",
            amostra: "imagens/amostras/sondagem.png"
        },
        {
            id: "sondagem-8ano",
            titulo: "Sondagem - 8º ano",
            categoria: "Volta às aulas",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/sondagem.png",
            amostra: "imagens/amostras/sondagem.png"
        },
        {
            id: "sondagem-9ano",
            titulo: "Sondagem - 9º ano",
            categoria: "Volta às aulas",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/sondagem.png",
            amostra: "imagens/amostras/sondagem.png"
        },
        {
            id: "volta-subtracao",
            titulo: "Subtração",
            categoria: "Volta às aulas",
            preco: "R$ 5,50",
            imagem: "imagens/amostras/sondagem.png",
            amostra: "imagens/amostras/sondagem.png"
        },
    ];

    // ==============================
    // SELETORES DOM
    // ==============================

    const produtosList = document.getElementById("produtosCarrossel");
    const inputBusca = document.getElementById("buscaProdutos");
    const filtrosContainer = document.getElementById("filtrosContainer");
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    const closeBtn = modal?.querySelector(".modal-close");
    const modalOverlay = modal?.querySelector(".modal-overlay");
    const carrinhoEl = document.getElementById("carrinho");
    const carrinhoOverlay = document.getElementById("carrinhoOverlay");
    const btnAbrir = document.getElementById("abrirCarrinho");
    const btnFechar = document.getElementById("fecharCarrinho");
    const carrinhoItens = document.getElementById("carrinhoItens");
    const carrinhoTotal = document.getElementById("carrinhoTotal");
    const contadorCarrinho = document.getElementById("contadorCarrinho");

    // ==============================
    // CRIAR CARDS
    // ==============================

    produtosData.forEach(p => {
        const card = document.createElement("article");
        card.className = "produto-card";
        card.dataset.categoria = p.categoria;
        card.innerHTML = `
            <img src="${p.imagem}" alt="${p.titulo}">
            <h4>${p.titulo}</h4>
            <p class="categoria">${p.categoria}</p>
            <p class="preco">${p.preco}</p>
            <button class="btn btn-amostra" data-amostra="${p.amostra}">Ver amostra</button>
            <button class="btn btn-comprar" data-id="${p.id}">Adicionar ao carrinho</button>
        `;
        produtosList.appendChild(card);
    });

    // ==============================
    // MODAL
    // ==============================

    function abrirModal(src) {
        modalImg.src = src;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        closeBtn?.focus();
    }

    function fecharModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        modalImg.src = "";
    }

    closeBtn?.addEventListener("click", fecharModal);
    modalOverlay?.addEventListener("click", fecharModal);

    // ==============================
    // CARRINHO
    // ==============================

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function abrirCarrinho() {
        carrinhoEl.classList.add("active");
        carrinhoOverlay.classList.add("active");
        carrinhoEl.setAttribute("aria-hidden", "false");
    }

    function fecharCarrinho() {
        carrinhoEl.classList.remove("active");
        carrinhoOverlay.classList.remove("active");
        carrinhoEl.setAttribute("aria-hidden", "true");
    }

    btnAbrir?.addEventListener("click", abrirCarrinho);
    btnFechar?.addEventListener("click", fecharCarrinho);
    carrinhoOverlay?.addEventListener("click", fecharCarrinho);

    function adicionarAoCarrinho(id) {
        const produto = produtosData.find(p => p.id === id);
        if (!produto) return;

        const existente = carrinho.find(item => item.id === id);
        if (existente) {
            existente.qtd++;
        } else {
            carrinho.push({...produto, qtd: 1});
        }

        salvarCarrinho();
        atualizarCarrinhoUI();
        abrirCarrinho();
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
        if (!carrinhoItens) return;

        carrinhoItens.innerHTML = "";
        let total = 0;
        let quantidadeTotal = 0;

        carrinho.forEach(item => {
            const precoNumerico = parseFloat(
                item.preco.replace("R$", "").trim().replace(",", ".")
            );

            total += precoNumerico * item.qtd;
            quantidadeTotal += item.qtd;

            carrinhoItens.innerHTML += `
                <div class="carrinho-item">
                    <strong>${item.titulo}</strong>
                    <p>${item.qtd}x ${item.preco}</p>
                    <button class="remover-item" data-id="${item.id}">Remover</button>
                </div>
            `;
        });

        if (carrinhoTotal)
            carrinhoTotal.textContent = "R$ " + total.toFixed(2).replace(".", ",");

        if (contadorCarrinho)
            contadorCarrinho.textContent = quantidadeTotal;
    }

    // ==============================
    // BUSCA
    // ==============================

    function filtrarCards(termo = "", categoria = "todos") {
        produtosList.querySelectorAll(".produto-card").forEach(card => {
            const titulo = card.querySelector("h4").innerText.toLowerCase();
            const cat = card.dataset.categoria;
            const buscaOk = titulo.includes(termo);
            const filtroOk = categoria === "todos" || cat === categoria;
            card.style.display = (buscaOk && filtroOk) ? "flex" : "none";
        });
    }

    let categoriaAtiva = "todos";

    inputBusca?.addEventListener("input", () => {
        filtrarCards(inputBusca.value.toLowerCase(), categoriaAtiva);
    });

    // ==============================
    // FILTROS
    // ==============================

    if (filtrosContainer) {
        const categorias = [...new Set(produtosData.map(p => p.categoria))];

        filtrosContainer.innerHTML = `<button class="btn-filtro active" data-categoria="todos">Todos</button>`;

        categorias.forEach(cat => {
            filtrosContainer.innerHTML += `<button class="btn-filtro" data-categoria="${cat}">${cat}</button>`;
        });

        filtrosContainer.addEventListener("click", (e) => {
            if (!e.target.classList.contains("btn-filtro")) return;

            filtrosContainer.querySelectorAll(".btn-filtro").forEach(btn =>
                btn.classList.remove("active")
            );
            e.target.classList.add("active");

            categoriaAtiva = e.target.dataset.categoria;
            filtrarCards(inputBusca?.value.toLowerCase() ?? "", categoriaAtiva);
        });
    }

    // ==============================
    // DELEGAÇÃO DE EVENTOS UNIFICADA
    // ==============================

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-amostra")) {
            abrirModal(e.target.dataset.amostra);
        }
        if (e.target.classList.contains("btn-comprar")) {
            adicionarAoCarrinho(e.target.dataset.id);
        }
        if (e.target.classList.contains("remover-item")) {
            removerItem(e.target.dataset.id);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (modal.classList.contains("active")) fecharModal();
            if (carrinhoEl.classList.contains("active")) fecharCarrinho();
        }
    });

    atualizarCarrinhoUI();

});