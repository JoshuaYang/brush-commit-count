const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const faker = require('faker');
const CronJob = require('cron').CronJob;

const file = path.join(__dirname, 'demo.txt');

function generateNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum) + minNum);
}

function autoCommitAndPush() {
  let count = generateNum(7, 13);

  for (let i = 0; i < count; ++i) {
      const content = faker.lorem.sentence();

      fs.writeFileSync(file, content);

      execSync(`git --git-dir=${__dirname}/.git --work-tree=${__dirname} add ${file}`);
      execSync(`git --git-dir=${__dirname}/.git --work-tree=${__dirname} commit -m "${content}"`);
  }

  execSync(`git --git-dir=${__dirname}/.git --work-tree=${__dirname} push origin master`);
}



autoCommitAndPush();

// const job = new CronJob({
//   cronTime: '0 0 0 * * *',
//   onTick: autoCommitAndPush,
// });
//
// job.start();

// console.log('===== start auto commit & push to gitbub =====');
