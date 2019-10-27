
# FullCalendar Webpack template

This is a fully-buildable project for FullCalendar and [Webpack].

## Installation

```bash
git clone https://github.com/daniel-sudz/etabeta.git
cd etabeta
npm install
npm run build
```
## Testing 
You may need to enable CORS or cross origin requests in order to test the calender without a server running. To do this in chrome you can install an extension called Allow CORS: Access-Control-Allow-Origin. Do not leave this extension turned on as this is a security vulnerability. 

## Build Commands

```bash
npm run build
npm run watch # continously build
npm run clean # start fresh
```

After running `build` or `watch`, open up `index.html` in a browser.


[Webpack]: https://webpack.js.org/
