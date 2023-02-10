const answers = [
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    "Yes! Send us a message and we’ll process your request no questions asked.",
    "Chat and email support is available 24/7. Phone lines are open during normal business hours."
];
const questions = document.querySelector(".questions");
const answerTemplate = document.querySelector(".answerTemplate").content;
const answerContainers = [document.querySelector(".answerContainer1"), document.querySelector(".answerContainer2"), document.querySelector(".answerContainer3"), document.querySelector(".answerContainer4"), document.querySelector(".answerContainer5")];
const fragment = document.createDocumentFragment();

questions.addEventListener('click', e => {
    e.stopPropagation();

   if(e.target.id === 'op1'){
        showAnswer('op1');
   }else if (e.target.id === 'op2'){
        showAnswer('op2');
   }else if (e.target.id === 'op3'){
        showAnswer('op3');
   } else if (e.target.id === 'op4'){
        showAnswer('op4');
   } else if (e.target.id === 'op5'){
        showAnswer('op5');
   }
});

const showAnswer = (op) => {
    const clone = answerTemplate.cloneNode(true);
    if(op === 'op1'){

        clone.querySelector('span').textContent = answers[0];
        fragment.appendChild(clone);
        answerContainers[0].appendChild(fragment);
    } else if(op === 'op2'){

        clone.querySelector('span').textContent = answers[1];
        fragment.appendChild(clone);
        answerContainers[1].appendChild(fragment);
    } else if(op === 'op3'){

        clone.querySelector('span').textContent = answers[2];
        fragment.appendChild(clone);
        answerContainers[2].appendChild(fragment);
    } else if(op === 'op4'){

        clone.querySelector('span').textContent = answers[3];
        fragment.appendChild(clone);
        answerContainers[3].appendChild(fragment);
    }else if(op === 'op5'){

        clone.querySelector('span').textContent = answers[4];
        fragment.appendChild(clone);
        answerContainers[4].appendChild(fragment);
    }
}