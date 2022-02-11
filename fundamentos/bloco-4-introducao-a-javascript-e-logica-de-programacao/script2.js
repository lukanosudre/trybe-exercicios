let status = "reprovado";

switch (status) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado(a)!");
        break;

    case "lista":
        console.log("Aguarde, você está na lista de espera!");
        break;

    case "reprovado":
        console.log("Infelizmente você foi reprovado(a). Tente outra vez!");
        break;

    default:
        console.log("valor não identificado");
}