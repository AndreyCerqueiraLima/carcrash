function Player(x,y,w,h,path){
    return {
      x,y,w,h,path,move:() => {        
         if(keyIsDown(UP_ARROW)){
           if(y > 0){
            y -=3
          }
         }
        if(keyIsDown(DOWN_ARROW)){
          if(y < 400){
            y +=3
          }
        }
        if(keyIsDown(LEFT_ARROW)){
          if(x > 0){
            x -=3
          }
          
        }
        if(keyIsDown(RIGHT_ARROW)){
          if(x <470){
            x +=3
          }
        }
      },
      buildImage:()=> circle(x,y,30),
      getCurrentY:function(){return y},
      getCurrentX:function(){return x},
      setCurrentYToInitialY:function(){y = this.y}
    }
  }
  
  