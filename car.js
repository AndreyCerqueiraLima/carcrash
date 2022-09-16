
function Car(path){
    const image = loadImage(path)
    return {
      w:50,h:50,image:image
    }
  }
  
  
  function buildCars(){
    return [new Car('img/green-car.png'),new Car('img/y-car.png'),new Car('img/black-car.png')]
  }
  
  
  