const ANSI_ESCAPE_CODE = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

module.exports = {
  info: (log) => {
    logging = "info: " + log;
    console.log(logging);
  },
  infof: (log) => {
    logging = "infof: " + log;
    console.log("\x1b[32m%s\x1b[0m", logging);
  },
  debug: (log) => {
    logging = "debug: " + log;
    console.log("\x1b[36m%s\x1b[0m", logging);
  },
  warn: (log) => {
    logging = "warn: " + log;
    console.log("\x1b[33m%s\x1b[0m", logging);
  },
  crash: (log) => {
    logging = "crash: " + log;
    console.log("\x1b[31m%s\x1b[0m", logging);
  },
  sql: (log) => {
    logging = "crash: " + log;
    console.log("\x1b[45m%s\x1b[0m");
  },
  customLog: (log, level, color) => {
    color = color.toLowerCase();
    if (color == "red") {
      color = ANSI_ESCAPE_CODE.red;
    } else if (color == "black") {
      color = ANSI_ESCAPE_CODE.black;
    } else if (color == "green") {
      color = ANSI_ESCAPE_CODE.green;
    } else if (color == "yellow") {
      color = ANSI_ESCAPE_CODE.yellow;
    } else if (color == "blue") {
      color = ANSI_ESCAPE_CODE.blue;
    } else if (color == "magenta") {
      color = ANSI_ESCAPE_CODE.magenta;
    } else if (color == "cyan") {
      color = ANSI_ESCAPE_CODE.cyan;
    } else if (color == "white") {
      color = ANSI_ESCAPE_CODE.white;
    } else {
      color = "\x1b[0m";
    }
    logging = level + ": " + log;
    console.log(`${color}%s\x1b[0m`, logging);
  },
  bold: (log) => {
    console.log("\x1b[1m%s\x1b[0m", log);
  },
  underscore: (log) => {
    console.log("\x1b[4m%s\x1b[0m", log);
  },
  whitespace: (log) => {
    console.log("\x1b[7m%s\x1b[0m", log);
  },
};
