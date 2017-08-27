const fs = require('fs');
const execSync = require('child_process').execSync;

const file = 'demo.txt';

let count = process.argv[2];

if (count === undefined) {
    count = 1;
} else {
    count = +count;
}

for (let i = 0; i < count; ++i) {
    fs.writeFileSync(file, Date.now());

    execSync(`git add ${file}`);
    execSync(`git commit -m "u"`);
}

execSync('git push origin master');
