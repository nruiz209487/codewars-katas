// Copilot: ignore file
// Kata: Decoding a message
// Level: 7kyu
// Solved: 2025-08-07

function decode(message) {
  message = message.split('');
  let letter = ""; 
  let index = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let reversedAlpahbet = alphabet.split('').reverse(); 
  alphabet = alphabet.split('');

  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i])) {
    letter = message[i];
    index = alphabet.indexOf(letter);
    message[i] = reversedAlpahbet[index];
  }
  }

  message = message.join('');
  return message;
}