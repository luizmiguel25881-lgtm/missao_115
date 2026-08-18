const botaoGravador = document.getElementById("btn-gravador");
const statusGravacao = document.getElementById("status-gravacao");
const playerAudio = document.getElementById("player-audio");

let gravador;
let partesAudio = [];
let gravando = false;

// Começar a gravação
async function iniciarGravacao() {

    try {

        // Pede acesso ao microfone
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        partesAudio = [];

        // Cria o gravador
        gravador = new MediaRecorder(stream);

        // Guarda os pedaços do áudio
        gravador.ondataavailable = function(evento) {

            if (evento.data.size > 0) {
                partesAudio.push(evento.data);
            }

        };

        // Quando terminar a gravação
        gravador.onstop = function() {

            const audioBlob = new Blob(partesAudio, {
                type: "audio/webm"
            });

            const audioURL = URL.createObjectURL(audioBlob);

            playerAudio.src = audioURL;
            playerAudio.style.display = "block";

            statusGravacao.textContent =
                "Status: Gravação concluída!";

            // Desliga o microfone
            stream.getTracks().forEach(function(track) {
                track.stop();
            });

        };

        // Começa a gravar
        gravador.start();

        gravando = true;

        botaoGravador.style.backgroundColor = "red";
        botaoGravador.textContent = "🔴 Gravando...";
        statusGravacao.textContent = "Status: Gravando áudio...";

    } catch (erro) {

        console.error(erro);

        statusGravacao.textContent =
            "Status: Não foi possível acessar o microfone.";

    }
}


// Parar a gravação
function pararGravacao() {

    if (gravador && gravando) {

        gravador.stop();

        gravando = false;

        botaoGravador.style.backgroundColor = "";
        botaoGravador.textContent =
            "🎤 Clique e Segure para Gravar";

    }

}


// ===============================
// COMPUTADOR
// ===============================

botaoGravador.addEventListener("mousedown", function() {

    iniciarGravacao();

});

botaoGravador.addEventListener("mouseup", function() {

    pararGravacao();

});


// Caso o mouse saia do botão
botaoGravador.addEventListener("mouseleave", function() {

    pararGravacao();

});


// ===============================
// CELULAR
// ===============================

botaoGravador.addEventListener("touchstart", function(evento) {

    evento.preventDefault();

    iniciarGravacao();

});

botaoGravador.addEventListener("touchend", function(evento) {

    evento.preventDefault();

    pararGravacao();

});