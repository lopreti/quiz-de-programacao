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

    document.querySelectorAll("input, select, textarea").forEach(campo => {
        campo.disabled = true
    })
}

// function limparRespostas() {
//     document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input =>{
//         input.checked = false })
// }

function limparRespostas() {
    document.getElementById('p1a').checked = false
    document.getElementById('p1b').checked = false
    document.getElementById('p1c').checked = false
    document.getElementById('p1d').checked = false

    document.getElementById('p2').value = ""

    document.getElementById('p3').value = ""

    document.getElementById('p4').value = ""

    document.getElementById('p5a').checked = false
    document.getElementById('p5b').checked = false
    document.getElementById('p5c').checked = false
    document.getElementById('p5d').checked = false

    document.getElementById('p6').value = ""

    document.getElementById('p7').value = ""

    document.getElementById('p8').value = ""

}
function verificarCertas() {
    const s1 = document.querySelectorAll('section')[1]
    if (document.getElementById('p1b').checked) {
        s1.style.backgroundColor = '#c8f7c5'
    } else {
        s1.style.backgroundColor = '#f7c5c5'
    }

    const s2 = document.querySelectorAll('section')[2]
    const p2 = document.getElementById('p2').value.trim().toLowerCase()
    if (p2 === "dominio" || p2 === "domínio") {
        s2.style.backgroundColor = '#c8f7c5'
    } else {
        s2.style.backgroundColor = '#f7c5c5'
    }

    const s3 = document.querySelectorAll('section')[3]
    const temNumero = /[0-9]/.test(p3)
    const temMaiuscula = /[A-Z]/.test(p3)
    const temSimbolo = /[^a-zA-Z0-9]/.test(p3)
    if (temNumero && temMaiuscula && temSimbolo && p3.length >= 6) {
        s3.style.backgroundColor = '#c8f7c5'
    } else {
        s3.style.backgroundColor = '#f7c5c5'
    }

    const s4 = document.querySelectorAll('section')[4]
    if (document.getElementById('p4').value == "1991") {
        s4.style.backgroundColor = '#c8f7c5'
    } else {
        s4.style.backgroundColor = '#f7c5c5'
    }

    const s5 = document.querySelectorAll('section')[5]
    const p5a = document.getElementById('p5a').checked
    const p5c = document.getElementById('p5c').checked
    const p5d = document.getElementById('p5d').checked
    if (p5a && p5c && p5d) {
        s5.style.backgroundColor = '#c8f7c5'
    } else {
        s5.style.backgroundColor = '#f7c5c5'
    }

    const s6 = document.querySelectorAll('section')[6]
    const p6 = document.getElementById('p6').files[0]
    if (p6 && p6.name.toLowerCase().endsWith(".html")) {
        s6.style.backgroundColor = '#c8f7c5'
    } else {
        s6.style.backgroundColor = '#f7c5c5'
    }

    const s7 = document.querySelectorAll('section')[7]
    const p7 = document.getElementById('p7').value
    if (p7 === "type"){
        s7.style.backgroundColor = '#c8f7c5'
    } else {
        s7.style.backgroundColor = '#f7c5c5'
    }

    const s8 = document.querySelectorAll('section')[8]
    if (document.getElementById('p8').value.trim().toLowerCase() === "java") {
        s8.style.backgroundColor = '#c8f7c5'
    } else {
        s8.style.backgroundColor = '#f7c5c5'
    }
}