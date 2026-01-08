const parolaScelta = prompt("Inserisci una parola:");

/**
 * funziane che controlla se la parola fornita è palindroma 
     split('') trasforma "radar" in ["r", "a", "d", "a", "r"]
     reverse() inverte l'array
     join('') lo riporta a stringa "radar" 
 * @param {string} parola 
 * @returns {boolean}
 */
function isPalindroma(parola) {
  let parolaInvertita = parola.split("").reverse().join("");

  if (parola === parolaInvertita) {
    return true;
  }
  return false;
}
if (isPalindroma(parolaScelta)) {
  console.log(`La parola: ${parolaScelta} è palindroma`);
} else {
  console.log(`La parola: ${parolaScelta} NON è palindroma`);
}
