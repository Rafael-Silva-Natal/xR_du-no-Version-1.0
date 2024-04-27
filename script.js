// Array para armazenar referências aos botões criados
let botoesCriados = [];
// Array para armazenar referências aos elementos de áudio gerados dinamicamente
var audiosGerados = [];
// Adicione essa variável fora das funções
let audioEmExecucao = false; 
// Array para armazenar referências aos áudios em execução
let audiosEmExecucao = [];
// Array para armazenar referências aos áudios gerados para download
let audiosParaDownload = [];

//#######################################Dó
// Função para criar um novo botão e gerar um novo áudio
function criarBotao() {
  const novoBotao = document.createElement("button");
  novoBotao.textContent = "Dó";
  novoBotao.dataset.tooltip = "Texto do tooltip para o botão Dó"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao.classList.add("botaoSom");
  // Adiciona um evento de clique ao botão
  novoBotao.addEventListener("click", function() {
      gerarNovoAudio();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio = document.createElement("audio");
  novoAudio.src = "public/Audio Piano/Piano_10_Segundos/1_Dó_261p63Hz.mp3";
  audiosGerados.push(novoAudio);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio), 1);
      audioEmExecucao = false;
  });
  novoAudio.play();
}
}       
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao2").addEventListener("click", criarBotao);

//###############################################Ré
// Função para criar um novo botão e gerar um novo áudio
function criarBotao2() {
  const novoBotao2 = document.createElement("button");
  novoBotao2.textContent = "Ré";
  novoBotao2.dataset.tooltip = "Texto do tooltip para o botão Ré"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao2);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao2); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao2.classList.add("botaoSom2");
  // Adiciona um evento de clique ao botão
  novoBotao2.addEventListener("click", function() {
      gerarNovoAudio2();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio2() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio2 = document.createElement("audio");
  novoAudio2.src = "public/Audio Piano/Piano_10_Segundos/2_Ré_293p66Hz.mp3";
  audiosGerados.push(novoAudio2);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio2);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio2.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio2), 1);
      audioEmExecucao = false;
  });
  novoAudio2.play();
}       
}
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao3").addEventListener("click", criarBotao2);

//###############################################Mi
// Função para criar um novo botão e gerar um novo áudio
function criarBotao3() {
  const novoBotao3 = document.createElement("button");
  novoBotao3.textContent = "Mi";
  novoBotao3.dataset.tooltip = "Texto do tooltip para o botão Mi"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao3);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao3); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao3.classList.add("botaoSom3");
  // Adiciona um evento de clique ao botão
  novoBotao3.addEventListener("click", function() {
      gerarNovoAudio3();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio3() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio3 = document.createElement("audio");
  novoAudio3.src = "public/Audio Piano/Piano_10_Segundos/3_Mi_329p63Hz.mp3";
  audiosGerados.push(novoAudio3);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio3);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio3.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio3), 1);
      audioEmExecucao = false;
  });
  novoAudio3.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao4").addEventListener("click", criarBotao3);

//###############################################Fá
function criarBotao4() {
  const novoBotao4 = document.createElement("button");
  novoBotao4.textContent = "Fá";
  novoBotao4.dataset.tooltip = "Texto do tooltip para o botão Fá"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao4);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao4); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao4.classList.add("botaoSom4");
  // Adiciona um evento de clique ao botão
  novoBotao4.addEventListener("click", function() {
      gerarNovoAudio4();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio4() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio4 = document.createElement("audio");
  novoAudio4.src = "public/Audio Piano/Piano_10_Segundos/4_Fá_349p23Hz.mp3";
  audiosGerados.push(novoAudio4);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio4);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio4.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio4), 1);
      audioEmExecucao = false;
  });
  novoAudio4.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao5").addEventListener("click", criarBotao4);

//###############################################Sol
function criarBotao5() {
  const novoBotao5 = document.createElement("button");
  novoBotao5.textContent = "Sol";
  novoBotao5.dataset.tooltip = "Texto do tooltip para o botão Sol"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao5);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao5); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao5.classList.add("botaoSom5");
  // Adiciona um evento de clique ao botão
  novoBotao5.addEventListener("click", function() {
      gerarNovoAudio5();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio5() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio5 = document.createElement("audio");
  novoAudio5.src = "public/Audio Piano/Piano_10_Segundos/5_Sol_392Hz.mp3";
  audiosGerados.push(novoAudio5);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio5);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio5.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio5), 1);
      audioEmExecucao = false;
  });
  novoAudio5.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao6").addEventListener("click", criarBotao5);


//###############################################Lá
function criarBotao6() {
  const novoBotao6 = document.createElement("button");
  novoBotao6.textContent = "Lá";
  novoBotao6.dataset.tooltip = "Texto do tooltip para o botão Lá"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao6);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao6); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao6.classList.add("botaoSom6");
  // Adiciona um evento de clique ao botão
  novoBotao6.addEventListener("click", function() {
      gerarNovoAudio6();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio6() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio6 = document.createElement("audio");
  novoAudio6.src = "public/Audio Piano/Piano_10_Segundos/6_Lá_440Hz.mp3";
  audiosGerados.push(novoAudio6);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio6);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio6.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio6), 1);
      audioEmExecucao = false;
  });
  novoAudio6.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao7").addEventListener("click", criarBotao6);

//###############################################Si
function criarBotao7() {
  const novoBotao7 = document.createElement("button");
  novoBotao7.textContent = "Sí";
  novoBotao7.dataset.tooltip = "Texto do tooltip para o botão Sí"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao7);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao7); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao7.classList.add("botaoSom7");
  // Adiciona um evento de clique ao botão
  novoBotao7.addEventListener("click", function() {
      gerarNovoAudio7();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio7() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio7 = document.createElement("audio");
  novoAudio7.src = "public/Audio Piano/Piano_10_Segundos/7_Sí_493p88Hz.mp3";
  audiosGerados.push(novoAudio7);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio7);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio7.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio7), 1);
      audioEmExecucao = false;
  });
  novoAudio7.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao8").addEventListener("click", criarBotao7);

//###############################################dó
function criarBotao8() {
  const novoBotao8 = document.createElement("button");
  novoBotao8.textContent = "dó";
  novoBotao8.dataset.tooltip = "Texto do tooltip para o botão dó"; // Adiciona o texto do tooltip
  document.getElementById("minhaDiv").appendChild(novoBotao8);// adiciona o novo botao a pagina
  botoesCriados.push(novoBotao8); // Adiciona o botão ao array
  // Aplica a classe CSS para estilizar o botão
  novoBotao8.classList.add("botaoSom8");
  // Adiciona um evento de clique ao botão
  novoBotao8.addEventListener("click", function() {
      gerarNovoAudio8();
  }); 
}
// Função para gerar um novo elemento de áudio e armazená-lo no array de downloads
function gerarNovoAudio8() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
    audioEmExecucao = true; // Define que um áudio está em execução
  var novoAudio8 = document.createElement("audio");
  novoAudio8.src = "public/Audio Piano/Piano_10_Segundos/8_dó_523p25.mp3";
  audiosGerados.push(novoAudio8);
  // Armazena a referência do áudio no array de downloads
  audiosParaDownload.push(novoAudio8);
  // Adiciona um evento de fim de reprodução para remover o áudio do array de downloads
  novoAudio8.addEventListener("ended", function() {
      audiosParaDownload.splice(audiosParaDownload.indexOf(novoAudio8), 1);
      audioEmExecucao = false;
  });
  novoAudio8.play();
}
}  
// Adiciona um evento de clique ao botão "criarBotao2"
document.getElementById("botao9").addEventListener("click", criarBotao8);

//#############################Função para apagar o último botão criado########################
function apagarUltimoBotao() {
    if (botoesCriados.length > 0) {
        const ultimoBotao = botoesCriados.pop(); // Remove o último botão do array
        ultimoBotao.parentNode.removeChild(ultimoBotao); // Remove o botão do DOM
    }
}
// Adiciona um evento de clique ao botão "apagarBotao"
document.getElementById("botaoApagar1").addEventListener("click", apagarUltimoBotao);


//##############################Parar audios################################
// Função para parar todos os áudios em reprodução
function pararTodosOsAudios() {
  // Itera sobre cada elemento de áudio gerado e para sua reprodução
  audiosGerados.forEach(function(audio) {
      audio.pause(); // Pausa a reprodução do áudio
      audio.currentTime = 0; // Define o tempo de reprodução como zero para reiniciar o áudio, se necessário
  });
}
// Adiciona um evento de clique ao botão "botaoParar"
document.getElementById("botaoParar").addEventListener("click", function() {
  pararTodosOsAudios(); // Chama a função para parar todos os áudios
  audioEmExecucao = false;
});

// ###########################Sobre  os textos dos botões de apresentação da pagina:##############

function openWidget() {
  document.getElementById('widget').style.display = 'block';
}

function closeWidget() {
  document.getElementById('widget').style.display = 'none';
}
function openWidget2() {
  document.getElementById('widget2').style.display = 'block';
}

function closeWidget2() {
  document.getElementById('widget2').style.display = 'none';
}
function openWidget3() {
  document.getElementById('widget3').style.display = 'block';
}

function closeWidget3() {
  document.getElementById('widget3').style.display = 'none';
}


// Função para baixar a pasta de downloads
function baixarPastaDownloads() {
  // Cria um elemento <a> para cada áudio no array de downloads e simula o clique para iniciar o download
  audiosParaDownload.forEach(function(audio, index) {
    const link = document.createElement('a');
    link.href = audio.src;
    link.download = `audio_${index}.mp3`;
    link.style.display = 'none'; // Esconde o link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o download
  });
}

// Adiciona um evento de clique ao botão de download da pasta de downloads
document.getElementById("gravador").addEventListener("click", baixarPastaDownloads);


