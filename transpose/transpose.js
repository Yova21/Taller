//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const transpose = (array) => {
  let tamaño = [];
  let max = 0;

  for(let i=0; i <array.length; i++){
    max= array[i].length>max? array[i].length : max;

    for(let j=0; j<max;j++){
      tamaño[j] = tamaño[j] || Array(i).fill(' ').join('');

      tamaño[j] +=  array[i][j] || " "; 
      
      if(i === array.length - 1 && j>= max-1)
        tamaño[j] = tamaño[j].replace(/(\s*\S+)+\s+/,'$1');
    }
  }
 
  return tamaño;
};