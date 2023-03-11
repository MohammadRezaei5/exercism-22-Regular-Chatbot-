// look back again and read more ...

function isValidCommand(command) {
  const REGEX = /^chatbot/i;
  return REGEX.test(command);
}

// console.log(isValidCommand("Chatbot, play a song from the 80's."));
// console.log(isValidCommand("Hey Chatbot, where is the closest pharmacy?"));
// console.log(
//   isValidCommand("CHATBOT, do you have a solution for this challenge?")
// );

///---///

function removeEmoji(message) {
  return message.replaceAll(/emoji[0-9]+/g, "");
}

// console.log(
//   removeEmoji("I love playing videogames emoji3465 it's one of my hobbies")
// );
