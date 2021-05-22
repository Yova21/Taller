//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const toRna = (secuencia) => {
  let Rsecuencia = '';

  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] === 'C') {
      Rsecuencia += 'G';
    } else if (secuencia[i] === 'G') {
      Rsecuencia += 'C';
    } else if (secuencia[i] === 'A') {
      Rsecuencia += 'U';
    } else if (secuencia[i] === 'T') {
      Rsecuencia += 'A';
    }
  }
  return Rsecuencia;
};

