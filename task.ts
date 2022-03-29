var str = "TechAtCore";
console.log(str);

  var string = str. toUpperCase();
  

function countString(string, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < string.length; i++) {

        // check if the character is at that position
        if (string.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
let counter = string => {
    return string.split('').reduce((total, letter) => {//split method,reduce
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
  console.log (counter(string));
  
  
