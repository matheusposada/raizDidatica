document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MODAL
    // =========================
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    const closeBtn = document.querySelector(".modal-close");
    const overlay = document.querySelector(".modal-overlay");

    document.querySelectorAll(".btn-amostra").forEach(botao => {
        botao.addEventListener("click", () => {
            modalImg.src = botao.dataset.amostra;
            modal.classList.add("active"); // precisa ativar a classe
        });
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    overlay.addEventListener("click", () => modal.classList.remove("active"));

    // =========================
    // PESQUISA
    // =========================
    const inputBusca = document.getElementById("buscaProdutos");
    const cards = document.querySelectorAll(".produto-card");

    inputBusca.addEventListener("input", () => {
        const termo = inputBusca.value.toLowerCase();

        cards.forEach(card => {
            const textoCard = card.innerText.toLowerCase();

            if (textoCard.includes(termo)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });

    // =========================
    // BOTÃO VOLTAR AO TOPO
    // =========================
    const btnTop = document.getElementById("scroll-top");

    // Clique: rolar para o topo
    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Atualiza visibilidade ao rolar
    function updateScrollTopVisibility() {
        const scrollPos = window.scrollY;
        btnTop.style.display = (scrollPos > 100) ? "flex" : "none";
    }

    window.addEventListener("scroll", updateScrollTopVisibility);
    updateScrollTopVisibility();

});