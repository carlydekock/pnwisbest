'use strict'

function timeGreeting(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 11) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    document.write('<h3>' + greeting + '</h3>');
}


function userLocation(){
    let userLocation = prompt('Where do you live?');

    document.write('<h3>' + userLocation + '</h3>');
}

function userMonth(){
    let month = new Date();
    let monthnow = month.getMonth();
    let greeting2;

    if (monthnow > 8) {
        greeting2 = 'Happy Fall!';
    } else if (monthNow > 4) {
        greeting2 = 'Happy Summer!';
    } else if (monthNow > 1) {
        greeting2 = 'Happy Spring!';
    } else {
        greeting2 = 'Happy Winter!';
    }
    document.write('<h3>' + greeting2 + '</h3>');
}

function userNumber(){
    let correctAnswer = 1;
    let numberOfGuesses = 4;

    for (let i = 0; i < numberOfGuesses; i = i + 1){
        let userAnswer = prompt('Please enter a number 1-5: ');
        if(userAnswer > 0 && userAnswer < 6){
            if(userAnswer == correctAnswer){
                alert('Great, correct answer!')
                break;
            } else {
                alert('Sorry wrong answer, try again')
            }
        } else {
            alert('Invalid answer')
        }
    }
}

function userAsk(){
    let userAsk = prompt('Do you want to guess a number? (yes or no)');
    while(userAsk == 'yes'){
        userNumber();
        userAsk = prompt('Do you want to play again (yes or no)');
    }
}

// userAsk();

function userPhotosAsk(){
    let userPhotos = prompt('How many photos do you want to see? Enter a number 1-5');
    if(userPhotos > 0 && userPhotos <= 5){
        for(let i = 0; i < userPhotos; i++){
            document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/270px-Mount_Rainier_from_west.jpg">')
        }
        
    } else {
        alert('Invalid answer')
    }

    }
 
   // userPhotosAsk();






// function picturePlay(){
//     let userAnswer 
// }



// function askToPlay(){
//     let wannaPlay = prompt('Do you want to see a photo of Mount Rainier? (yes or no)');
//     while(wannaPlay == 'yes'){

//     }

// }




// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//     greeting = 'Good evening!';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon!';
// } else if (hourNow > 0) {
//     greeting = 'Good morning!';
// } else {
//     greeting = 'Welcome!';
// }

// document.write('<h3>' + greeting + '</h3>');