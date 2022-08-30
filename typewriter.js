//animate a given string by setting timeout on each character
const sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  let interval = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, interval);
    interval += 75;
  }
  setTimeout(() => process.stdout.write('\n'), interval);
};

typewriter(sentence);
