class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
      this.name = null;
      this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
   static updateRank(rank1) {
        database.ref('/').update({
            Rank: rank1
        })
    }
    getRank() {
        var rankRef = database.ref("Rank");
        rankRef.on("value", (data) => {
            this.rank = data.val();
        })
    }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
    resetDistance() {
        
        database.ref("players/player" + this.index).set({
            distance: 0,
            name : ""
        })
    }

}
