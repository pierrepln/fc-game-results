![Game Results](https://user-images.githubusercontent.com/11307717/48872859-e4187500-ede2-11e8-94f1-5b48665ca697.png "Game Results")

## Disclaimer
I had to work offline most of the time, this made things harder but not imposible.
I tried to keep it as simple as posible.

## Install
Pre-requisite: sass must be installed
You can install sass via npm: `npm install -g sass`

## Build
You can build Task 2 and Task 3
- Go to the task folder using `cd task2/`
- Run the sass command: `sass src/main.scss ditst/main.css`

## Check the app
Open the local index.html file in your favorite browser  `file:///<YOUR-LOCAL-PATH>/task3/index.html`)

## Task2
I was very tight on time so I kept it short and made it simpler. The feature 'Add game' will not work if all the games are deleted first.
This is because the newly created game is actually a copy of the top game, with the only change of the player names. 

I created a test file names add.test.js that calls `addGame()` on load and compare the result list size before and after.
- Browse `file:///<YOUR-LOCAL-PATH>/task2/test.html`


## Task3a - Golden Ratio Font
I created a test file test.html to check the font-size and line-height of each scale.
- Browse `file:///<YOUR-LOCAL-PATH>/task3/test.html`

## Improvements ideas
- CRITICAL: redo Task2 to meet acceptance criterias
- Bundle + minify js files using webpack, and probably managing dependencies with npm
- Using reusable components (Probably with React) 
- Refactoring all task1 css code to use sass
- Splitting Sass files into an ITCSS architecture
- Any other task required to make the code ready for LIVE environment, using tools like PageSpeed Insights or Lighthouse (extension by Google), apply the suggested fixes if necessary
- Adding accessibilty features like alt on images
