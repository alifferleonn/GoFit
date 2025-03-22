// Função para abrir e fechar o menu mobile
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Função para baixar o treino de acordo com o tipo selecionado
function downloadTreino(tipo) {
    let conteudo = "";

    if (tipo === "emagrecimento") {
        conteudo = `Treino para Emagrecimento - 5x por Semana 💪

Segunda-feira:
- HIIT (30 min)
- Supino reto 3x12
- Agachamento livre 3x15
- Abdominais 3x20

Terça-feira:
- Corrida (40 min)
- Levantamento terra 3x12
- Rosca direta 3x12

Quarta-feira:
- Circuito funcional
- Prancha 3x40s
- Polichinelos 3x30

Quinta-feira:
- Bicicleta ergométrica (30 min)
- Supino inclinado 3x12
- Agachamento sumô 3x15
- Abdominais infra 3x20

Sexta-feira:
- HIIT (30 min)
- Desenvolvimento militar 3x12
- Cadeira extensora 3x15
- Prancha lateral 3x40s
`;
    } else if (tipo === "massa") {
        conteudo = `Treino para Ganho de Massa - 5x por Semana 💪

Segunda-feira:
- Supino reto 4x10
- Desenvolvimento com halteres 4x10
- Agachamento livre 4x10
- Rosca direta 4x12
- Abdominal infra 3x15

Terça-feira:
- Levantamento terra 4x8
- Barra fixa 4x8
- Remada curvada 4x10
- Tríceps francês 4x12
- Prancha 3x40s

Quarta-feira:
- Supino inclinado 4x10
- Desenvolvimento militar 4x10
- Cadeira extensora 4x12
- Rosca martelo 4x12
- Elevação de pernas 3x15

Quinta-feira:
- Stiff 4x8
- Remada unilateral 4x10
- Paralelas 4x12
- Abdução de quadril 3x15
- Prancha lateral 3x30s

Sexta-feira:
- Supino reto 4x10
- Agachamento búlgaro 4x10
- Pulley frente 4x12
- Rosca concentrada 4x12
- Abdominal supra 3x15
`;
    } else if (tipo === "definicao") {
        conteudo = `Treino para Definição - 5x por Semana 💪

Segunda-feira:
- HIIT (20 min)
- Supino reto 3x12
- Agachamento livre 3x12
- Elevação lateral 3x15
- Abdominais 3x20

Terça-feira:
- Corrida (30 min)
- Barra fixa 3x10
- Remada curvada 3x12
- Tríceps corda 3x12
- Prancha 3x40s

Quarta-feira:
- Circuito funcional
- Afundo com halteres 3x12
- Supino inclinado 3x12
- Elevação de panturrilha 3x15
- Abdominal infra 3x20

Quinta-feira:
- HIIT (20 min)
- Levantamento terra 3x10
- Desenvolvimento com halteres 3x12
- Cadeira extensora 3x12
- Prancha lateral 3x30s

Sexta-feira:
- Corrida (30 min)
- Remada baixa 3x12
- Paralelas 3x12
- Abdução de quadril 3x15
- Abdominal supra 3x20
`;
    }

    // Cria o arquivo de texto e inicia o download
    const blob = new Blob([conteudo], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Treino_${tipo}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Adicionei função para scroll suave ao clicar nos links do menu (se quiser usar)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(); // Fecha o menu mobile após clicar
    }
}
