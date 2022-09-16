
let endOfStreet = -50


function drawCarOnStreet(carro,pista){
  image(carro.image,pista.currentX,pista.currentY,carro.w,carro.h)
}


function moveCarAroundStreet(street){
  if(street.currentX <= endOfStreet){
        street.currentX = street.initialX
        street.velocityX = Math.random()*3 + 3
        
  }
  street.currentX-=street.velocityX
}  