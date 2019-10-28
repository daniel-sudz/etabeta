
# FullCalendar Webpack template

This is a fully-buildable project with FullCalendar and [Webpack].

## Installation

```bash
git clone https://github.com/daniel-sudz/etabeta.git
cd etabeta
npm install
```
## Testing 
You may need to enable CORS or cross origin requests in order to test the calender without a server running. To do this in chrome you can install an extension called Allow CORS: Access-Control-Allow-Origin. Do not leave this extension turned on as this is a security vulnerability. 

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
