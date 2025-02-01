// Data de início do relacionamento
const dataInicio = new Date('2024-12-09T00:00:00'); // Substitua com a data de início real

function atualizarTempo() {
    const agora = new Date();
    const diff = agora - dataInicio; // Diferença em milissegundos

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    // Atualizar a frase no HTML
    document.getElementById('contador').innerHTML =
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Atualizar o tempo a cada 1 segundo
setInterval(atualizarTempo, 1000);

// Chamar a função para atualizar imediatamente
atualizarTempo();
