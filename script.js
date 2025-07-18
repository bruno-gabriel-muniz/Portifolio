//Função que foca em um elemento específico da página.
function focusOn(elementId){
    const elemento = document.getElementById(elementId);
    const y = (
        elemento.getBoundingClientRect().top + 
        window.scrollY - 200
    );
    window.scrollTo({ top: y, behavior: "smooth" });
}
//Abre o Linkedin
function openLinkedin(){
    window.open(
        'https://www.linkedin.com/in/bruno-gabriel-ss',
        '_blank'
    )
}
//Abre o GitHub
function openGitHub(){
    window.open(
        'https://github.com/bruno-gabriel-muniz',
        '_blank'
    )
}
//Abre o meu curriculo
function openCurriculo(){
    window.open(
        'https://drive.google.com/file/d/1rFRV80sjfItsBoENJFpTMpsg1ayb1q0M/view?usp=drive_link',
        '_blank'
    )
}

//Abre o projeto TP1-Trabalho2
function openTP1Trabalho2(){
    window.open(
        "https://github.com/bruno-gabriel-muniz/TP1-Trabalho2"
    )
}

//Função que alterna a visibilidade de Habilidades Técnicas
function toggleDropdown(button) 
{
    const active = document.querySelectorAll(".contatos.active");
    button.classList.toggle("active");
    const dropdown = button.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
