animate();   
$(document).keydown(function(e){
    if (e.keyCode == 37) player.velX = -5;
    if (e.keyCode == 38) player.velY = -5;
    if (e.keyCode == 39) player.velX = 5;
    if (e.keyCode == 40) player.velY = 5;
});

$(document).keyup(function(e){
    if (e.keyCode == 37) player.velX = 0;
    if (e.keyCode == 38) player.velY = 0;
    if (e.keyCode == 39) player.velX = 0;
    if (e.keyCode == 40) player.velY = 0;
});

$(document).on('touchstart', function(e){
              
    var touchX= e.touches[0].clientX;
    var touchY= e.touches[0].clientY;
    if (touchX < player.x) player.velX = -5;
    if (touchX > player.x) player.velX = 5;
    if (touchY < player.y) player.velY = -5;
    if (touchY > player.y) player.velY = 5;
});