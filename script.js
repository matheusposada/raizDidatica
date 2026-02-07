// exemplo simples de clique
const botoes = document.querySelectorAll(".btn-comprar");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Integração com Mercado Pago será adicionada aqui!");
    });
});