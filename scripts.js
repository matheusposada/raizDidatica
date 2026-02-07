document.addEventListener("DOMContentLoaded", () => {

    // MODAL
    const modal = document.getElementById("modalAmostra");
    const modalImg = document.getElementById("modalImagem");
    const closeBtn = document.querySelector(".modal-close");
    const overlay = document.querySelector(".modal-overlay");

    document.querySelectorAll(".btn-amostra").forEach(botao => {
        botao.addEventListener("click", () => {
            modalImg.src = botao.dataset.amostra;
            modal.classList.add("active");
        });
    });

    function fecharModal() {
        modal.classList.remove("active");
        modalImg.src = "";
    }

    closeBtn.addEventListener("click", fecharModal);
    overlay.addEventListener("click", fecharModal);

    // PESQUISA
    const inputPesquisa = document.getElementById("pesquisa");
    const cards = document.querySelectorAll(".produto-card");

    inputPesquisa.addEventListener("input", () => {
        const termo = inputPesquisa.value.toLowerCase();

        cards.forEach(card => {
            const nome = card.dataset.nome;
            card.style.display = nome.includes(termo) ? "flex" : "none";
        });
    });

});
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