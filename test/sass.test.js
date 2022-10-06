const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

const tests = glob.sync(path.resolve(process.cwd(), 'test/**/*.test.scss'));
tests.forEach(test => sassTrue.runSass({ file: test }, { describe, it }));
