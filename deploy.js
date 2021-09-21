var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FTP_PWD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/dist/additive-filter",
  remoteRoot: "/public_html/additive-filter/",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*", "**/*", ".*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  forcePasv: true,
};

console.log(process.env.FTP_PWD);

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
