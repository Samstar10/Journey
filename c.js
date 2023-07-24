//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter(strength, height, health, gamesPlayed){
    this.strength = strength
    this.health = health
    this.height = height
    this.gamesPlayed = gamesPlayed
    this.catchPhrase = function(){
        alert ('Cant touch this')
    }
    this.eliminator = function(){
        alert('NO IDEA')
    }
    this.thirdMethod = function(){
        alert('Also no idea')
    }
}