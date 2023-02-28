// Function to calculate the area of a circle
function circleArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
  }
  
  // Function to check if a number is even
  function isEven(number) {
    if (number % 2 == 0) {
      console.log (true);
    } else {
      console.log (false);
    }
  }
  
  // Function to find the greatest number among three given numbers
  function greatestNumber(num1, num2, num3) {
    let greatest = num1;
  
    if (num2 > greatest) {
      greatest = num2;
    }
  
    if (num3 > greatest) {
      greatest = num3;
    }
  
    return greatest;
  }
  
  function main (){
     area = circleArea (5);
     console.log (area);
     isEven(6);
     greatest=greatestNumber(2,5,6);
     console.log (greatest);

  }