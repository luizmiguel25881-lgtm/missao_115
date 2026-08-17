const botaoGravador = document.getElementById("btn-gravador");
const statusGravacao = document.getElementById("status-gravacao");


// computador quando segura o clique
botaoGravador.addEventListener("mousedown", function() {
    botaoGravador.style.backgroundColor = "red";
    botaoGravador.textContent = "🔴 Gravando...";
    statusGravacao.textContent = "Status: Gravando áudio...";
});


// computador quando solta o clique
botaoGravador.addEventListener("mouseup", function() {
    botaoGravador.style.backgroundColor = "";
    botaoGravador.textContent = "🎤 Clique e Segure para Gravar";
    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});


// celular quando coloca o dedo
botaoGravador.addEventListener("touchstart", function() {
    botaoGravador.style.backgroundColor = "red";
    botaoGravador.textContent = "🔴 Gravando...";
    statusGravacao.textContent = "Status: Gravando áudio...";
});


// celular quando tira o dedo
botaoGravador.addEventListener("touchend", function() {
    botaoGravador.style.backgroundColor = "";
    botaoGravador.textContent = "🎤 Clique e Segure para Gravar";
    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});
