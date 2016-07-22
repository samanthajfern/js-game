var player = {
    x : 0,
    y : 100,
    velX : 0,
    velY : 0,
    sprites: [document.getElementById("playerf1"),
              document.getElementById("playerf2"),
              document.getElementById("playerf3"),
              document.getElementById("playerf4"),
              document.getElementById("playerf5"),
             ],
    ticks:0,
    spriteNum:0,
    
    update: function(){
        this.ticks++;
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
        
        if(this.velX != 0|| this.velY != 0)
            if(this.ticks % 10 == 0)
                this.spriteNum = this.spriteNum +1;
        if(this.spriteNum > 2) this.spriteNum = 0;
    },
    
    render: function(){
        ctx.drawImage(this.sprites[this.spriteNum], this.x-40, this.y-40, 80, 80);
    }
};
