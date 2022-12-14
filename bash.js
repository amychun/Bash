const { cwd } = require('node:process');
// console.log(`Current directory: ${cwd()}`);

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  process.stdout.write('You typed: ' + cmd);
if(cmd === 'pwd') {
  process.stdout.write(`\n${cwd()}`);
}
  process.stdout.write('\nprompt > ');
});
