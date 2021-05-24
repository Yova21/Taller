//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (comparador, lista) => {
  let anagrams = [];
  let compare = comparador.toLowerCase().split("").sort().join();
  for (let i = 0; i < lista.length; i++) {
    if(lista[i].toLowerCase().split("").sort().join() == compare && 
    lista[i].toLowerCase() != comparador.toLowerCase()){
      anagrams.push(lista[i]);
    }
  }
  return anagrams;
};