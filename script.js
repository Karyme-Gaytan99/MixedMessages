const mixMessage = () => {
    
    let number = Math.floor(Math.random()*3);
    let message;

    switch(number){
        case 0:
            message = 'Somday i´ll be a Saturday night';
            return message
            break;
        case 1:
            message = 'Born to be my baby';
            return message
            break;
        case 2:
            message = 'Have a nice day';
            return message
            break;
        default:
            return 'the message cannot found';
            break;
    }
}

console.log(mixMessage());