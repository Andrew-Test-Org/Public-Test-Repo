const {execSync} = require('child_process');

const bundleVersion = execSync(`grep -A1 'CFBundleVersion' ../../test.plist | grep -v 'CFBundleVersion' | sed 's|[</string>,]||g'`).toString().trim();
const shortBundleVersion = execSync(`grep -A1 'CFBundleShortVersionString' ../../test.plist | grep -v 'CFBundleShortVersionString' | sed 's|[</string>,]||g'`).toString().trim();

console.log(`Bundle Version: ${bundleVersion}`);
console.log(`Short Bundle Version: ${shortBundleVersion}`);

const hasValue = shortBundleVersion && bundleVersion;
if (!hasValue) {
    console.log('Failed to get Bundle Versions from plist');
} else if (shortBundleVersion !== (bundleVersion.split('-') || [''])[0]) {
    console.log('Bundle Versions do not match');
} else {
    console.log('Bundle Versions match');
}
