// ==========================================
// PRODUTOS: BROWNIES DE CHOCOLATE
// Edite, adicione ou remova produtos abaixo.
// ==========================================

window.PRODUTOS_CATALOGO = window.PRODUTOS_CATALOGO || [];

window.PRODUTOS_CATALOGO.push(
    {
        id: "brownie-embalagem-comercial",
        categoria: "brownie",
        badge: "Brownie",
        titulo: "Brownie - Embalagem Comercial",
        preco: "R$ 5,60",
        foto: "imagens/brownies/brownies.jpeg",
        descricao: "Brownie artesanal de chocolate com casquinha crocante e interior macio. Pedidos a partir de 10 unidades.",
        temSabores: false,
        textoSabores: "",
        mensagemWhatsapp: "Olá! Gostaria de um orçamento para brownies na embalagem comercial."
    },
    {
        id: "brownie-fita",
        categoria: "brownie",
        badge: "Brownie",
        titulo: "Brownie com Fita de Cetim",
        preco: "R$ 6,30",
        foto: "imagens/brownies/brownie-decorado-1.jpeg",
        fotos: [
            "imagens/brownies/brownie-decorado-1.jpeg",
            "imagens/brownies/brownie-decorado-2.jpeg"
        ],
        descricao: "Brownie com fita de cetim. Pedidos a partir de 10 unidades.",
        temSabores: false,
        textoSabores: "",
        mensagemWhatsapp: "Olá! Gostaria de um orçamento para brownies artesanais na fita de cetim."
    }
);

