const fs = require('fs');
const content = fs.readFileSync('/home/dml-guntas/dml/dm_learning/src/components/courses/CourseArea.tsx', 'utf-8');
const matches = content.match(/id:\s*\d+,/g);
console.log("Total ids:", matches ? matches.length : 0);
