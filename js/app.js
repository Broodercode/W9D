

function first(num01, num02) {
    console.log((num01 + num02)*5)
    return ((num01 + num02)*5)
}

function second(str01) {
    console.log(str01.length > 10 ? true : false)
    return (str01.length > 10 ? true : false)
}

function third(arr01) {
    let i = 0;
    let done = false;

    while(!done || i+1 < arr01.length) {
        let facts = arr01[i].startsWith('ph')
        if (facts) {
            done = true;
            return console.log(arr01[i])
        } else if(i+1 < arr01.length){
            i++
        } else {
            done = true;
            return console.log('No array with the letters "PH" present')
        }
    }

}

first(5, 5);
first(7, 9);
first(3333, 7777);
second('nope');
second('It is the string that does not end');
second('The words!');
thirdArray01=['wow', 'how many', 'what starts with the letters?', 'phenomenal, oh, there we go', 'wow more after cause of testing', 'phrick, weak']
thirdArray02=['philosophy', 'how many', 'what starts with the letters?', 'phenomenal, oh, there we go', 'wow more after cause of testing', 'phrick, weak']
thirdArray03=['wow', 'how many', 'what starts with the letters?', 'shoot, oh, there we go', 'wow more after cause of testing', 'none? weak']
third(thirdArray01)
third(thirdArray02)
third(thirdArray03)