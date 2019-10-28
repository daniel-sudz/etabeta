
# FullCalendar Webpack template

This is a project that includes FullCalendar and [Webpack]. 

Webpack is a module bundler that links js files and css files into a single bundle. It also allows the removing of unused css styles and js code, causing the resulting bundle to be smaller. 

NPM is a package manager for installing libraries such as webpack and fullcalender. You can install it by downloading nodejs here https://nodejs.org/en/. 

Fullcalendar is js library that creates a pretty calendar view. It is nice as it allows data to be pulled from google calendar, which means that code does not need to be updated to update the events displayed in the calendar. 


## Installation

```bash
git clone https://github.com/daniel-sudz/etabeta.git
cd etabeta
npm install
```
## Testing 
You may need to enable CORS or cross origin requests in order to test the calender without a server running. To do this in chrome you can install an extension called Allow CORS: Access-Control-Allow-Origin. Do not leave this extension turned on as this is a security vulnerability. 

On my computer, chrome does not block the requests but edge does. To check if CORS are being blocked, you can look at your browsers developer console. 

## Build Commands

```bash
npm run build
```

## How to commit changes 
```bash
git add . //adds root folder to commit
git commit -m "<your message>" //adds a commit message 
git push origin master //pushes changes to master branch
``` 
You may need to pull changes before pushing changes 
```bash
git pull origin master //pulls changes from the master branch
``` 


After running `build`, open up `index.html` in a browser.


[Webpack]: https://webpack.js.org/
