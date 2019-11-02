# Eta Beta Website Design
[![Build Status](https://travis-ci.com/daniel-sudz/etabeta.svg?branch=master)](https://travis-ci.com/daniel-sudz/etabeta)

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
## Build Commands

```bash
npm run build
```
## Testing/Continuous build 
Webpack has a continuous build function called watch which will look for any changes in the source files and automatically rebuild the code. Use this while editing the html files to not have to manually rebuild 
```bash
npm run watch 
```
If you want to test the complete resulting website, you can host it locally with 
```bash
firebase serve 
```
## Deploying the website 
Upon pushing to the master, travis ci will pick up changes and rebuild the entire project. The resulting build files will automatically get deployed to firebase and served from there on the registered domain. Due to this, it is not necessary to manually deploy the website.

At the top of this readme you may have seen a [![Build Status](https://travis-ci.com/daniel-sudz/etabeta.svg?branch=master)](https://travis-ci.com/daniel-sudz/etabeta) sticker. If this sticker says build|failing, this means your build has failed and you should check the build logs. Simply click on the sticker to view the build history. 

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
