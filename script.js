// Get a random number
const getRandomNumber = (num) => { 
    return Math.floor(Math.random()* num);   
}

//Object that contain te bands with it´s songs
const music = {
    u2:['Every Breaking Wave', 'Beautiful Day', 'Red Flag Day', 'One','You´re the best thing about me'],
    bonJovi:['Runaway', 'I´ll be a Saturday Night', 'I´ll sleep when im dead'],
    fooFigthers:['Everglow', 'Learn to fly', 'Best of you', 'My Hero']
}

//Make a variable for the new recomendatiions
let mySongs = [];

//Work with the arrays
for(let band in music) {
    let song = getRandomNumber(music[band].length)

    
    switch(band){
        case 'u2':
            mySongs.push(`You might listen to this song by U2: ${music[band][song]}`); 
            break;
        case 'bonJovi':
            mySongs.push(`You might listen to this song by Bon Jovi: ${music[band][song]}`);
            break;
        case 'fooFigthers':
            mySongs.push(`You might listen to this song by Foo Figthers: ${music[band][song]}`);
            break;
        default:
            console.log('the message cannot found');
            break;
    }
}

// Convert to string
function formattedArray(array) {
    const formatted = array.join('\n')
    console.log(formatted)
  }
  
  formattedArray(mySongs);
