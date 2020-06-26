#!/usr/bin/env node

// nls = node ls

const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

//3. USING PROMISES THROUGH THE NODE UTILITIES DOCUMENTATION
// const lstat = util.promisify(fs.lstat);

//4. USING PROMISES THROUGH THE NODE FS PROMISES DOCUMENTATION
const lstat = fs.promises.lstat;

//OR

// const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else{
      console.log(chalk.bold(filenames[index]));
    }
  }


  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);

  //   console.log(filename, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
    
  // }

  //1. NOT THE BEST WAY TO WRITE WRITE THE CODE AS THIS ALLOWS FOR INCONSISTENT ARRANGEMENT AND ORDER OF FILENAMES WHEN NLS IS CALLED

  // for (let filename of filenames) {
  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err)
  //     }

  //     console.log(filename, stats.isFile());
  //   });
  // }

  //2. ENSURING THAT THE FILES ARE LOGGED IN THE SAME ORDER EVERYTIME NLS IS CALLED.MAY NOT BE THE BEST METHOD ESPECIALLY WHEN SOME FUNCTIONS ARE INCLUDED IN BETWEEN

  // const allStats = Array(filenames.length).fill(null);
  // for (let filename of filenames) {
  //   const index = filenames.indexOf(filename);

  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         console.log(err)
  //       }
  
  //       allStats[index] = stats;

  //       const ready = allStats.every((stats) => {
  //         return stats;
  //       });

  //       if (ready) {
  //         allStats.forEach((stats, index) => {
  //           console.log(filenames[index], stats.isFile());
  //         })
  //       }
  //     });
  //   }



});