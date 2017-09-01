const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const file = path.join(__dirname, 'demo.txt');

let count = process.argv[2];

if (count === undefined) {
    count = 1;
} else {
    count = +count;
}

for (let i = 0; i < count; ++i) {
    fs.writeFileSync(file, Date.now());

    // console.log('==========', file);

    execSync(`git add ${file}`);
    execSync(`git commit -m "u"`);

    console.log(`===== commit ${i + 1} times =====`);
}

console.log('===== pushing =====');

execSync('git push origin master');

console.log('===== push successfully =====');
