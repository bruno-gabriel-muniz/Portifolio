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
