'use strict';

const fs = require('fs');

function splitLine(line) {
  const idx1 = line.lastIndexOf(':') + 1;
  const idx2 = line.lastIndexOf(',');

  const prefix = line.substr(0, idx1);
  const value = line.substr(idx1, idx2);
  const suffix = line.substr(idx2);

  return [ prefix, value, suffix ];
}

try {

  // read config file

  const configFileData = fs.readFileSync("./config.json");
  const {
    HIDEOUT_FILE,
    NEW_HIDEOUT_NAME,
    NEW_HIDEOUT_HASH,
    DIFF_X,
    DIFF_Y
  } = JSON.parse(configFileData);

  // read input file

  const data = fs.readFileSync(HIDEOUT_FILE);

  // convert data

  const lines = data.split('\n');

  for (const i in lines) {
    const line = lines[i];

    if (line.includes('"hideout_name"')) {

      const arr = splitLine(line);
      lines[i] = `${arr[0]} "${NEW_HIDEOUT_NAME}"${arr[2]}`;

    }
    else if (line.includes('"hideout_hash"')) {

      const arr = splitLine(line);
      lines[i] = `${arr[0]} ${NEW_HIDEOUT_HASH}${arr[2]}`;

    }
    else if (line.includes('"x"')) {

      const arr = splitLine(line);
      let value = parseInt(arr[1]);
      value += DIFF_X;
      lines[i] = `${arr[0]} ${value}${arr[2]}`;

    }
    else if (line.includes('"y"')) {

      const arr = splitLine(line);
      let value = parseInt(arr[1]);
      value += DIFF_Y;
      lines[i] = `${arr[0]} ${value}${arr[2]}`;

    }
  }

  // process output file

  const filePrefix = HIDEOUT_FILE.substr(0, HIDEOUT_FILE.lastIndexOf('.hideout'));
  const outputFile = `${filePrefix} (${NEW_HIDEOUT_NAME}).hideout`;
  const outputData = lines.join('\n');
  fs.writeFileSync(outputFile, outputData);

  console.log('done');

} catch (err) {
  console.error(err);
}