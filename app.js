const fs = require('fs');
const exec = require('child_process').exec;

const file = 'demo.txt';



fs.writeFileSync(file, Date.now());

exec(`git add ${file}`);
exec(`git commit -m "u"`);
