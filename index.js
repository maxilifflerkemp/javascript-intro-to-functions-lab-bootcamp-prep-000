function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) { console.log(string.toUpperCase()) }

function logWhisper(string) { console.log(string.toLowerCase()) }

var lowercase = "hello!"

if (lowercase.toLowerCase() === lowercase) { return ("I can't hear you!")}

var uppercase = "HELLO!"

else if(uppercase.toUpperCase() === uppercase) { return ("YES INDEED!")}

var mixedCase = "I love you, Grandma."

else { return ("I love you, too.")}
