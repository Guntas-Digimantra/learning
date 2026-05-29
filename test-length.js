const fs = require('fs');
const content = fs.readFileSync('/home/dml-guntas/dml/dm_learning_refactor/src/app/data/courses-page-data.tsx', 'utf-8');
const matches = content.match(/id:\s*\d+,/g);
console.log("Total ids:", matches ? matches.length : 0);
