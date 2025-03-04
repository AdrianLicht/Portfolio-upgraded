// Code background effect
document.addEventListener('DOMContentLoaded', function() {
    const codeBackground = document.getElementById('codeBackground');
    const codeSnippets = [
        "function createExperience() {",
        "  return passion + hardWork + creativity;",
        "}",
        "const portfolio = new Project();",
        "portfolio.design();",
        "portfolio.develop();",
        "portfolio.deploy();",
        "if (visitor.impressed) {",
        "  visitor.contact();",
        "}",
        "const skills = ['HTML', 'CSS', 'JavaScript'];",
        "skills.forEach(skill => master(skill));",
        "document.querySelector('.awesome-portfolio');",
        "const future = async () => {",
        "  await learnNewTechnologies();",
        "  return createAmazingProjects();",
        "}",
        "/* This is just the beginning */",
        "class Developer {",
        "  constructor() {",
        "    this.passion = 100;",
        "    this.coffee = Infinity;",
        "  }",
        "}",
        "<div class='creativity'>No limits</div>",
        "@keyframes coding {",
        "  from { knowledge: basic; }",
        "  to { knowledge: advanced; }",
        "}",
        "git commit -m 'Always improving'",
        "npm install future-skills",
        "const dream = new Promise((resolve) => {",
        "  resolve('Never stop learning');",
        "});",
        "// Adrian's code",
        "function buildAmazingWebsites() {",
        "  const creativity = true;",
        "  const dedication = 100%;",
        "}",
        "export default class FrontEndDev {",
        "  constructor(name) {",
        "    this.name = 'Adrian';",
        "  }",
        "}"
    ];
    
    // Create code lines
    for (let i = 0; i < 40; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        
        // Add different animation directions
        const animationType = Math.floor(Math.random() * 3);
        if (animationType === 1) {
            line.classList.add('code-line-vertical');
        } else if (animationType === 2) {
            line.classList.add('code-line-diagonal');
        }
        
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random positioning
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        
        // Higher base opacity
        line.style.opacity = 0.6 + Math.random() * 0.4;
        
        // Random animation duration and delay
        const duration = 30 + Math.random() * 60;
        const delay = Math.random() * 30;
        
        if (animationType === 0) {
            line.style.animation = `code-scroll ${duration}s linear ${delay}s infinite`;
        } else if (animationType === 1) {
            line.style.animation = `code-scroll-vertical ${duration}s linear ${delay}s infinite`;
        } else {
            line.style.animation = `code-scroll-diagonal ${duration}s linear ${delay}s infinite`;
        }
        
        codeBackground.appendChild(line);
    }
});
