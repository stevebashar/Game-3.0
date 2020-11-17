class Player {
    constructor(){
        this.index = null,
        this.name = null
    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.red(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}