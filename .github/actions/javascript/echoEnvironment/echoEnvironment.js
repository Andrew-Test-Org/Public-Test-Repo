const core = require('@actions/core');
const github = require('@actions/github');

if (process.env.MY_BOOL) {
    console.log('my bool is true');
} else {
    console.log('my bool is false');
}