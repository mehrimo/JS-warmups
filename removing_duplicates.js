function removeDupes(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}

//if the value exists in the array it's giving me the indexOf. If the letter already exists, then the index already exists.


function removeDupesCI(input){
  var unique = '';
  for (var i = 0; i < input.length; i++) {
    var lowerCase = input[i].toLowerCase();
    var uniqueLower = unique.toLowerCase();
    if (uniqueLower.indexOf(lowerCase) < 0) {
      unique += input[i];
    }
  }
  console.log(unique);
  }
