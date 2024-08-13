document.addEventListener('DOMContentLoaded', ()=>{

    const textArea = document.querySelector('.textcoded');
    
    if(textArea){
        textArea.addEventListener('input', (e)=>{
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight) + 'px';
    });}else{
        console.log('null');
    }


});