## Installation

```bash
// with npm
npm i @seojaeyoung/color-loggers
```

## Explain

```bash
// options
info => default color
infof => green color
debug => cyan color
warn => yellow color
crash => red color
sql => magenta
bold => bold log
underscore=> underscore log
whitespace => reverse console.log color
customLog => set log level and color
```

## Sample Code

```js
const { logger } = require("@seojaeyoung/color-loggers");

logger.infof("hello world!"); // <== green color console.log in terminal
logger.customLog("hello world!", "test-log", "yellow"); // <== yellow color console.log in terminal and parsing log ex) test-log: hello world!
```
