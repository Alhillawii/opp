// class Employee{
//     Name;
//     age;
//     SSN;
//     Salary;
//     DateOfJoin;
//     Department
// }

//task1
class Car {
    make;
    model;

    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    //task2//
    start() {
        console.log(`The ${this.model} has started.`);
      }
  }
  
  const myCar = new Car('ford', 'fugen');
  console.log(myCar);
  myCar.start(); 


  //task3//
  const myCar1 = new Car('tesla', 'Accord');
  
  console.log(myCar1); 
  
    
    
//task3//

  class ElectricCar extends Car {
    constructor(make, model, battery_size) {
      super(make, model);
      this.battery_size = battery_size;
    }
  }
  
  const myElectricCar = new ElectricCar('Tesla', 'Model S', '85kWh');
  
  console.log(myElectricCar);
  

  //task5//







    