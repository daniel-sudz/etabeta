
# FullCalendar Webpack template

This is a project that includes FullCalendar and [Webpack]. 

Webpack is a module bundler that links js files and css files into a single bundle. It also allows the removing of unused css styles and js code, causing the resulting bundle to be smaller. 

NPM is a package manager for installing libraries such as webpack and fullcalender. You can install it by downloading nodejs here https://nodejs.org/en/. 

Fullcalendar is js library that creates a pretty calendar view. It is nice as it allows data to be pulled from google calendar, which means that code does not need to be updated to update the events displayed in the calendar. 

Bootsrap is a popular css library created by Twitter for rapid devolopment of websites. They feature a nice set of docs that you can use to find a component that you want to add. Example link: https://getbootstrap.com/docs/4.3/components/navbar/. Bootsrap is automatically linked to any html file added to the source folder.  


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
## Continuous build 
Webpack has a continuous build function called watch which will look for any changes in the source files and automatically rebuild the code. Use this while editing the html files to not have to manually rebuild 
```bash
npm run watch 
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
