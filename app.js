const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const faker = require('faker');

const file = path.join(__dirname, 'demo.txt');

let count = process.argv[2];

if (count === undefined) {
    count = generateNum(5, 10);
} else {
    count = +count;
}

for (let i = 0; i < count; ++i) {
    const content = faker.lorem.sentence();

    fs.writeFileSync(file, content);

    execSync(`git add ${file}`);
    execSync(`git commit -m "${content}"`);

    console.log(`===== commit ${i + 1} times =====`);
}

console.log('===== pushing =====');

execSync('git push origin master');

console.log('===== push successfully =====');


function generateNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum) + minNum);
}
