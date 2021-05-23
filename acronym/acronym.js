//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (frase) => {
  frase = frase.split(/[^a-z']+/i);
  let acronym = '';

  for (let i = 0; i < frase.length; i++ ){
    acronym += frase[i][0].toUpperCase();
  }
  return acronym;
  
};
