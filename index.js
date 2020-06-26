#!/usr/bin/env node

// nls = node ls

const fs = require('fs');
const util = require('util');

//USING PROMISES THROUGH THE NODE UTILITIES DOCUMENTATION
// const lstat = util.promisify(fs.lstat);

//USING PROMISES THROUGH THE NODE FS PROMISES DOCUMENTATION
const lstat = fs.promises.lstat;

//OR

// const { lstat } = fs.promises;

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
  }


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