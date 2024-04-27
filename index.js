const plus = document.getElementsByClassName('plus');
const answers = document.querySelectorAll('.answer');
const questions = document.getElementsByClassName('question');
// console.log(answers);
// console.log(questions);
// console.log(plus);




for (let index = 0; index < questions.length; index++) {
    
    const element = questions[index];
    element.addEventListener('click', ()=> {
        console.log('i am working');
        if (answers[index].style.display === 'block') {
            answers[index].style.display = 'none';
            plus[index].src = 'assets/images/icon-plus.svg';
        } else {
            answers[index].style.display = 'block';
            plus[index].src = 'assets/images/icon-minus.svg';
        }
          
        // console.log(element);      
    })
    
}
