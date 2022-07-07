const core = require('@actions/core');
const comment = core.getInput('COMMENT', {required: true});
const checklist = `#### Contributor (PR Author) Checklist
- [X] I linked the correct issue in the \`### Fixed Issues\` section above
- [X] I wrote clear testing steps that cover the changes made in this PR
    - [X] I added steps for local testing in the \`Tests\` section
    - [X] I added steps for Staging and/or Production testing in the \`QA steps\` section
    - [X] I added steps to cover failure scenarios (i.e. verify an input displays the correct error message if the entered data is not correct)
    - [X] I turned off my network connection and tested it while offline to ensure it matches the expected behavior (i.e. verify the default avatar icon is displayed if app is offline)
- [X] I included screenshots or videos for tests on [all platforms](https://github.com/Expensify/App/blob/main/CONTRIBUTING.md#make-sure-you-can-test-on-all-platforms)
- [X] I ran the tests on **all platforms** & verified they passed on:
    - [X] iOS / native
    - [X] Android / native
    - [X] iOS / Safari
    - [X] Android / Chrome
    - [X] MacOS / Chrome
    - [X] MacOS / Desktop
- [X] I verified there are no console errors (if there’s a console error not related to the PR, report it or open an issue for it to be fixed)
- [X] I followed proper code patterns (see [Reviewing the code](https://github.com/Expensify/App/blob/main/PR_REVIEW_GUIDELINES.md#reviewing-the-code))
    - [X] I verified that any callback methods that were added or modified are named for what the method does and never what callback they handle (i.e. \`toggleReport\` and not \`onIconClick\`)
    - [X] I verified that comments were added to code that is not self explanatory
    - [X] I verified that any new or modified comments were clear, correct English, and explained “why” the code was doing something instead of only explaining “what” the code was doing.
    - [X] I verified any copy / text shown in the product was added in all \`src/languages/*\` files
    - [X] I verified any copy / text that was added to the app is correct English and approved by marketing by tagging the marketing team on the original GH to get the correct copy.
    - [X] I verified proper file naming conventions were followed for any new files or renamed files. All non-platform specific files are named after what they export and are not named “index.js”. All platform-specific files are named for the platform the code supports as outlined in the README.
    - [X] I verified the JSDocs style guidelines (in [\`STYLE.md\`](https://github.com/Expensify/App/blob/main/STYLE.md#jsdocs)) were followed
- [X] If a new code pattern is added I verified it was agreed to be used by multiple Expensify engineers
- [X] I followed the guidelines as stated in the [Review Guidelines](https://github.com/Expensify/App/blob/main/PR_REVIEW_GUIDELINES.md)
- [X] I tested other components that can be impacted by my changes (i.e. if the PR modifies a shared library or component like \`Avatar\`, I verified the components using \`Avatar\` are working as expected)
- [X] I verified all code is DRY (the PR does not include any logic written more than once, with the exception of tests)
- [X] I verified any variables that can be defined as constants (ie. in CONST.js or at the top of the file that uses the constant) are defined as such
- [X] If a new component is created I verified that:
    - [X] A similar component does not exist in the codebase
    - [X] All props are defined accurately and each prop has a \`/** comment above it */\`
    - [X] Any functional components have the \`displayName\` property
    - [X] The file is named correctly
    - [X] The component has a clear name that is non-ambiguous and the purpose of the component can be inferred from the name alone
    - [X] The only data being stored in the state is data necessary for rendering and nothing else
    - [X] For Class Components, any internal methods passed to components event handlers are bound to \`this\` properly so there are no scoping issues (i.e. for \`onClick={this.submit}\` the method \`this.submit\` should be bound to \`this\` in the constructor)
    - [X] Any internal methods bound to \`this\` are necessary to be bound (i.e. avoid \`this.submit = this.submit.bind(this);\` if \`this.submit\` is never passed to a component event handler like \`onClick\`)
    - [X] All JSX used for rendering exists in the render method
    - [X] The component has the minimum amount of code necessary for its purpose and it is
- [X] If a new CSS style is added I verified that:
    - [X] A similar style doesn’t already exist
    - [X] The style can’t be created with an existing [StyleUtils](https://github.com/Expensify/App/blob/main/src/styles/StyleUtils.js) function (i.e. \`StyleUtils.getBackgroundAndBorderStyle(themeColors.componentBG\`)
- [X] If the PR modifies a generic component, I tested and verified that those changes do not break usages of that component in the rest of the App (i.e. if a shared library or component like \`Avatar\` is modified, I verified that \`Avatar\` is working as expected in all cases)
- [X] If the PR modifies a component related to any of the existing Storybook stories, I tested and verified all stories for that component are still working as expected.`;

let regex = new RegExp(checklist.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
let checklistComplete = regex.test(comment);

if (!checklistComplete) {
    console.error(`Checklist is not complete`);
    core.setFailed(`Checklist is not complete`);
    return
}

console.log(`Checklist is completed!`);
