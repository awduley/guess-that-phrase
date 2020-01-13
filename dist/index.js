class GameAudio {
  constructor() {
    this.spin = new Audio();
    this.lose = new Audio();
  }

  spin() {
    this.spin.play();
  }

  lose() {
    this.lose.play();
  }
}

class GuessThatPhrase {
  cunstructor() {
   
  }

  spinner() {
    let randNum = 25 * Math.floor(Math.random() * 40 + 1)
    if(randNum === 0) randNum = 25;
    
    return String(randNum);
  }

  spinPress() {

  }

  spin() {

  }

  earnings() {

  }

}






function ready() {

  //Get DOM elements
  const nameInput = document.querySelector('.name');
  nameInput.value = '';
  const nameBtn = document.querySelector('.name-btn');
  const playerNameConfirm = document.querySelector('.player-name-confirm h3');
  const letPlay = document.querySelector('.player-name-confirm h4');
  const clickToPlay = document.querySelector
  ('.player-name-confirm h4');
  const overlayStart = document.querySelector('.overlay-start');
  let dollarAmount = document.querySelector('.dollar-amount span');
  let playersName = document.querySelector('.players-name span');
  let randomNumber = document.querySelector('.random-number');
  let guessPhrase = document.querySelector('.phrase span');
  let spinner = document.querySelectorAll('.spinner-container .spinner');

  //Background colors
  const backgroundColor = 'radial-gradient(rgb(49, 199, 49), rgb(0, 59, 0))';

  let gameAudio = new GameAudio();
  let guessThatPhrase = new GuessThatPhrase();
  


  // If input not blank make submit button orange
  nameInput.addEventListener('input', () => {
    if(nameInput.value.length > 0) {
      nameBtn.classList.add('show');
    } else {
      nameBtn.classList.remove('show');
    }
  })


//Log players name to the screen with message attached
nameInput.addEventListener('keyup', (e) => {
  let name = nameInput.value;
  
  // Array of possible answers after player enters their name
  const playerNameResponse = [`What a great name! I named my pet Chihuahua ${name} as well!`, `Wait, is ${name} seriously your real name? Hmm...okay.`, `I love the name ${name}, I think more people should be named ${name}!`, `Okay, honestly I'm not sure how I feel about the name ${name}, but hey, who am I to judge?`, `Did you know that ${name}, actually means "one who sniffs pigs' butts" in ancient Greek? Yeah, I learned that watching YouTube.`, `Awesome! ${name}, is a great name!`, `Is your name really ${name}? Maybe you should consider changing it to something more, I dont know, elegant? Perhaps something like Andrew, or William.`, `${name}? That's a miserable name!`, `${name}? Oh well, I guess we can't all have decent names.`, `${name}? Gosh I feel so sorry for you.`, `Nice! Your parents picked an amazing name! LOL JK, ${name} sounds like garbage :(`, `Okay, no joke. ${name} is an excellent name!`, `The name ${name}, really sucks. I like eating pillows more than the sound of your name. And your name sounds really bad.`];

  if(e.keyCode === 13) {

    randNum = Math.floor(Math.random() * playerNameResponse.length)
    
    playerNameConfirm.textContent = playerNameResponse[randNum];

    playerNameConfirm.classList.add('player-name-confirm');
    
    setTimeout(() => {
      letPlay.classList.add('play')
    },2000);

  }
});

clickToPlay.addEventListener('click', () => {
  overlayStart.classList.add('hide-start');
  letPlay.classList.add('hide-start');
  playerNameConfirm.classList.add('hide-start');
  guessPhrase.textContent = nameInput.value;
  playersName.textContent = nameInput.value;
  document.body.style.background = backgroundColor;
});

  
}



if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}






// // Classes
// class Name {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class getThatPhrase {

//   start() {
//     playAmountCon.textContent = '';
//   }

//   reset() {
//     this.start();
//   }

//   playerSelected() {
//     this.playersColl = Array.from(players);
//     console.log(players);
//   }
// }