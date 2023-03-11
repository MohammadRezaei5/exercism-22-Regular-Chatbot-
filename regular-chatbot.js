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

///---///

function checkPhoneNumber(number) {
  if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number)) {
    return "Thanks! You can now download me to your phone.";
  }
  return `Oops, it seems like I can't reach out to ${number}`;
}

// console.log(checkPhoneNumber("(+34) 659-771-594"));
// console.log(checkPhoneNumber("659-771-594"));

///---///

function getURL(userInput) {
  const REGEX = /\w+\.\w+/g;
  return userInput.match(REGEX);
}

// console.log(getURL("I learned a lot from exercism.com"));
