const repeatString = function(str, num) {
  let i=0;
  let cpy_str = "";
  while(i<num){
    cpy_str=cpy_str+str;
  }
  return cpy_str;
};

module.exports = repeatString;
