/* 
   Agro Forte - Futuro Sustentável
   JavaScript de Interações
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile (Hambúrguer)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animação simples do ícone
            hamburger.style.opacity = '0.7';
            setTimeout(() => hamburger.style.opacity = '1', 200);
        });
    }

    // 2. Scroll Animation (Fade-in)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executa uma vez ao carregar para itens no topo

    // 3. Calculadora de Impacto Ambiental (Página Ajudar)
    const calcForm = document.getElementById('impact-form');
    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const area = parseFloat(document.getElementById('area').value) || 0;
            const water = document.getElementById('water-method').value;
            const energy = document.getElementById('energy-source').value;
            
            let score = 0;
            let feedback = "";

            // Lógica simples de pontuação
            if (water === 'gotejamento') score += 40;
            else if (water === 'aspersao') score += 20;
            
            if (energy === 'solar') score += 40;
            else if (energy === 'eolica') score += 35;
            else score += 10;

            // Bônus por área (simulação)
            score += Math.min(area * 0.5, 20);

            const resultDiv = document.getElementById('result');
            const resultText = document.getElementById('result-text');
            
            resultDiv.style.display = 'block';
            
            if (score > 80) {
                feedback = "Excelente! Suas práticas são altamente sustentáveis. Você está no caminho certo para o futuro do Agro.";
                resultDiv.style.borderLeft = "10px solid #2d5a27";
            } else if (score > 50) {
                feedback = "Bom trabalho! Você já aplica conceitos importantes, mas ainda há espaço para inovações tecnológicas.";
                resultDiv.style.borderLeft = "10px solid #a0522d";
            } else {
                feedback = "Atenção: Suas práticas podem ser otimizadas. Considere adotar sistemas de irrigação inteligente e energia limpa.";
                resultDiv.style.borderLeft = "10px solid #d9534f";
            }

            resultText.innerHTML = `<strong>Sua Pontuação de Sustentabilidade: ${score.toFixed(0)}/100</strong><br><br>${feedback}`;
            
            // Scroll suave para o resultado
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 4. Navbar Sticky Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 5%';
            navbar.style.backgroundColor = 'rgba(45, 90, 39, 0.95)';
        } else {
            navbar.style.padding = '1rem 5%';
            navbar.style.backgroundColor = 'var(--primary-color)';
        }
    });
});
