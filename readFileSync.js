const {readFileSync,writeFileSync, write}=require('fs')
console.log('Reading')
const data1=readFileSync('data1.js','utf-8')
const data2=readFileSync('data2.js','utf-8')
console.log('read')
writeFileSync('datawrite.txt',`User Details ${data1} ${data2}`)
console.log('done writing')

