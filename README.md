# snappet-challenge

Simple test case that adds a new subject, edits the title and subsequently deletes it.

## Requirements:
Node: https://nodejs.org/en/
Homebrew: https://brew.sh/
npm: https://www.npmjs.com/
Cypress: https://www.cypress.io/

## Installation instructions:
1. Install brew:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install node and npm:  
Open the Terminal app and type `brew update`. This updates Homebrew with a list of the latest version of Node.
Type `brew install node`.

3. Pull this code locally:
`git clone git@github.com:Ivan-Cristian/snappet-challenge.git`
4. Install dependencies:
from root folder of repo, run `npm install`

### Execution instructions
Comes with 2 flavors:
1. Open Cypress to manually run tests and visually inspect results: `npm run cypress:open`
2. Run Cypress test headlessly, will output a video after running: `npm run cypress:run`

## Project structure:
The project is structured using a Page Object pattern. Locators for elements are present in the `./cypress/support/locators` folder.

The test is located in the `./cypress/integration/` folder, which contains a high level overview of what the test does - it is human readable and requires no knowledge of programming to interpret.

The test code used in the test is located in the `./cypress/support/commands` folder. Each top level test command is a regular javascript function over some cypress automation code, with programmatic documentation and code reference support.

Both locators and commands are indexed and exported whole-sale for ease of use.
