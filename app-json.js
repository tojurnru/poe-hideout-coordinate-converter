'use strict';

const fs = require('fs');

const HIDEOUT_FILE = 'dev/Earth-test.hideout';
const DIFF_X = 50;
const DIFF_Y = -16;

try {

  // read input file

  const data = fs.readFileSync(HIDEOUT_FILE, 'utf8');

  const header = data[0]; // keep the first char (data.charCodeAt(0) = 65279)
  const json = JSON.parse(data.substr(1));

  console.log(JSON.stringify(json,null,2));

  // process data

  for (const key in json.doodads) {
    const obj = json.doodads[key];

    obj.x += DIFF_X;
    obj.y += DIFF_Y;

    json.doodads[key] = obj;
  }

  // console.log(JSON.stringify(json, null, 2));

  // process output file

  const file = HIDEOUT_FILE.substr(0, HIDEOUT_FILE.lastIndexOf('.hideout'));
  const outputFile = `${file}-updated.hideout`;
  const outputData = header + JSON.stringify(json);
  fs.writeFileSync(outputFile, outputData);
  
  const jsonFile = `${file}-updated.json`;
  const jsonData = JSON.stringify(json);
  fs.writeFileSync(jsonFile, jsonData);

  console.log('done');

} catch (err) {
  console.error(err);
}