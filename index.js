// Your code here
class Polygon{
    constructor(array){
        console.log(array)
        this.array = array
    }

    get countSides() {
        return this.array.length
      }

      get perimeter() {
          console.log(this.array.length, this.array)
            let sum = 0;
        this.array.forEach(ele => sum += ele )
        return sum;
      }

}

class Triangle extends Polygon{
    get isValid(){
        if(this.array[0] && this.array[1] === this.array[2]){
            return true
        }
        else {
            return false
        }
    }

}

class Square extends Polygon{
    get isValid(){
        if(this.array[0] && this.array[1] === this.array[2]&& this.array[3]){
            return true
        }
        else {
            return false
        }
    }

    get area(){
        return this.array[0] * this.array[1]
    }
}