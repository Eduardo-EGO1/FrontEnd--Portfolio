function initAccordion() {
    
    const perguntas = document.querySelectorAll('dt')
    perguntas[0].classList.add('ativo');
    perguntas[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }    
    
    perguntas.forEach((pergunta =>{
         pergunta.addEventListener('click', activeAccordion);
    }))
}

initAccordion();