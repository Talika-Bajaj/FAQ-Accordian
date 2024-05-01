const plus = document.getElementsByClassName('plus');
const questions = document.getElementsByClassName('question');
// console.log(answers);
// console.log(questions);
// console.log(plus);


for (let index = 0; index < questions.length; index++) {

    const element = questions[index];
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(e.target.parentElement);
        const parent = e.target.parentElement;
        // console.log(e.target.parentElement.open);
        if (parent.open === false) {
            console.log('jcbvjbvjkd');
            plus[index].src = 'assets/images/icon-minus.svg';
        } else {
            plus[index].src = 'assets/images/icon-plus.svg';

        }

    })

}
