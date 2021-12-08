const {execSync} = require('child_process');

const output = execSync(`pwd`).toString();
console.log(output);
console.log('Find output');
const findOutput = execSync('find ./../.. -name test.plist').toString();
console.log(findOutput);
const bundleVersion = execSync(`grep -A1 'CFBundleVersion' ./../../_actions/Andrew-Test-Org/Public-Test-Repo/joe-check-bundle-version/test.plist | grep -v 'CFBundleVersion' | sed 's|[</string>,]||g'`).toString().trim();
const shortBundleVersion = execSync(`grep -A1 'CFBundleShortVersionString' ./../../_actions/Andrew-Test-Org/Public-Test-Repo/joe-check-bundle-version/test.plist | grep -v 'CFBundleShortVersionString' | sed 's|[</string>,]||g'`).toString().trim();

console.log(`Bundle Version: ${bundleVersion}`);
console.log(`Short Bundle Version: ${shortBundleVersion}`);

const hasValue = shortBundleVersion && bundleVersion;
if (!hasValue) {
    console.log('Failed to get Bundle Versions from plist');
} else if (bundleVersion.includes(shortBundleVersion)) {
    console.log('Bundle Versions match');
} else {
    console.log('Bundle Versions do not match');
}
