function enviarRespostas() {

    let pontos = 0

    const p1b = document.getElementById('p1b').checked
    if (p1b) {
        pontos++
    }

    const p2 = document.getElementById('p2').value.trim().toLowerCase()
    if (p2 == "dominio") {
        pontos++
    }

    const p3 = document.getElementById('p3').value
    const temNumero = /[0-9]/.test(p3)
    const temMaiuscula = /[A-Z]/.test(p3)
    const temSimbolo = /[^a-zA-Z0-9]/.test(p3)
    if (temNumero && temMaiuscula && temSimbolo && p3.length >= 6) {
        pontos++
    }

    const p4 = document.getElementById('p4').value.trim()
    if (p4 == '1991') {
        pontos++
    }

    const p5a = document.getElementById('p5a').checked
    const p5c = document.getElementById('p5c').checked
    const p5d = document.getElementById('p5d').checked
    if (p5a && p5c && p5d) {
        pontos++
    }

    const p6 = document.getElementById('p6').files[0]
    if (p6 && p6.name.toLowerCase().endsWith(".html")) {
        pontos++
    }

    const p7 = document.getElementById('p7').value
    if (p7 == "type") {
        pontos++
    }

    const p8 = document.getElementById('p8').value.trim().toLowerCase()
    if (p8 == "java") {
        pontos++
    }
    document.getElementById("pontuacao").innerText = "Sua pontuação foi: " + pontos
}

function limparRespostas(){
    
}