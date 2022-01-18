function getRandomNumber(min, max, repeat) {

    // boucle de répétition
    let myRandomList = []
    for (let i=0; i<=repeat-1; i++) {
        myRandomList.push(Math.floor(Math.random()* (max - min+1)) + min)
    }
    
    return myRandomList
}
