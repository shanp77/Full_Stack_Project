// function(num) num=3
// ***
// * *
// ***

// outer loop num times
// var str = ""
// inner loop num times
// if i = 0 or num length - 1
//  str += "*"
// else
// if j = 0 or num length - 1
//  str += "*" else
// str += " "
//end inner
// print str
//end outer

function printBox(num) {
  var str = "";

  for(let i = 0; i < num; i++) {

    str = "";
    for(let j = 0; j < num; j++) {
      if(i === 0 || i === num - 1) {
        str += "*";
      } else {
        if(j === 0 || j === num - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    console.log(str);
  }
}
printBox(5);
