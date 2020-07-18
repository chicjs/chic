import process from 'process';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

console.log(args);
