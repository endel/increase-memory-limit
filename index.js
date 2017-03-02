#!/usr/bin/env node
const path = require('path');
const glob = require('glob');
const fs = require('fs');

const maxOldSpaceSice = process.env.LIMIT || 10240;
const cwd = process.cwd() + path.sep;

glob(path.join(cwd, "node_modules", ".bin", "*"), function(err, files) {

  files.forEach(file => {
    let contents = fs.readFileSync(file).toString();
    contents = contents.replace(/node\b(?: \-\-max\-old\-space\-size\=[0-9]+)?/gm, `node --max-old-space-size=${ maxOldSpaceSice }`);
    fs.writeFileSync(file, contents);
    console.log(`'${ file.replace(cwd, "") }'`, "written successfully.");
  });

});
