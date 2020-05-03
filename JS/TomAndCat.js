var Mouse = require('./mouse');
var Cat = require('./cat');

 var mickey = new Mouse('black');
 var jerry = new Mouse('orange');
  console.log(mickey);
  console.log(jerry);
   var Tom = new Cat();
   Tom.eat(mickey);
   Tom.eat(jerry);
   console.log(Tom);