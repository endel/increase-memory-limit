#!/usr/bin/env node
const path = require('path');
const glob = require('glob');
const fs = require('fs');

const maxOldSpaceSice = process.env.LIMIT || 10240;
const cwd = process.cwd() + path.sep;

glob(path.join(cwd, "node_modules", ".bin", "*"), function (err, files) {

  files.forEach(file => {
    let contents = fs.readFileSync(file).toString();
    let lines = contents.split('\n')

    let patchedContents = "";

    for (var index = 0; index < lines.length; index++) {
      var line = lines[index];
      if (line.startsWith("if [") || line.startsWith("@IF")) {
        patchedContents += line + "\n";
      } else {
        patchedContents += line.replace(/node\b(?: \-\-max\-old\-space\-size\=[0-9]+)?/, `node --max-old-space-size=${maxOldSpaceSice}`) + "\n";
      }
    }

    fs.writeFileSync(file, patchedContents);
    console.log(`'${file.replace(cwd, "")}'`, "written successfully.");
  });

});
