// script.js

// BOTÃO "SAIBA MAIS"

const btnSaiba = document.getElementById("btnSaiba");

btnSaiba.addEventListener("click", () => {

  alert(
    "O Agro 4.0 conecta tecnologia, produtividade e sustentabilidade no campo!"
  );

});


// BENEFÍCIOS SUSTENTÁVEIS

const beneficios = [

  "💧 Economia de água através de irrigação inteligente.",

  "🌱 Redução do uso de agrotóxicos com sensores e IA.",

  "🚜 Menor desperdício na produção agrícola.",

  "☀️ Uso eficiente de energia renovável no campo.",

  "📈 Maior produtividade com menor impacto ambiental."

];

const btnImpacto = document.getElementById("btnImpacto");
const textoImpacto = document.getElementById("textoImpacto");

btnImpacto.addEventListener("click", () => {

  const numeroAleatorio = Math.floor(
    Math.random() * beneficios.length
  );

  textoImpacto.innerHTML = beneficios[numeroAleatorio];

});


// EFEITO DINÂMICO NO SCROLL

window.addEventListener("scroll", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {

    const posicao = card.getBoundingClientRect().top;

    if(posicao < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});
