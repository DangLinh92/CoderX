function Circle(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  };
  
  Circle.prototype.isOverlapped = function(circle){
  
    if(this.x == circle.x && this.y == circle.y && this.r == circle.r){
      return -1;
    }
    var d =Math.round(Math.sqrt(Math.pow(Math.abs(this.x - circle.x),2) + Math.pow(Math.abs(this.y - circle.y),2)));
    if(d > this.r +circle.r || d < Math.abs(this.r - circle.r) || d == 0){
      return 1;
    };
  
    if(d == this.r + circle.r || d == Math.abs(this.r - circle.r)){
      return 0;
    }
  }
  
  module.exports = Circle;