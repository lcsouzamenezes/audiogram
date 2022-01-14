/*
  For details on these options, read SERVER.md

  Basic options:

  workingDirectory - where to keep temporary files (required)
  storagePath - where to keep generated audio/videos (required)
  fonts - a list of custom fonts (see THEMES.md for details)
  maxUploadSize - the maximum audio upload size, in bytes

  Fancy server options:

  s3Bucket - a bucket to store generated audio/videos.  If storagePath is also set, it will store files at s3://[s3Bucket]/[storagePath]/
  redisHost - a redis host name/address to use for tracking jobs (e.g. "1.2.3.4" or "127.0.0.1")
  worker - if this is truthy, the server will add jobs to a queue. Otherwise, it will render videos on the spot itself

*/

var path = require("path");
var env = process.env.NODE_ENV || "development";

module.exports = {
  workingDirectory: path.join(__dirname, "..", "tmp"),
  storagePath:
    env === "development"
      ? path.join(__dirname, "..", "media")
      : "applications/audiogram/media",
  s3Bucket: process.env.S3_BUCKETS_NAME,
  fonts: [
    {
      family: "NYT Franklin",
      file: path.join(__dirname, "fonts", "NYTFranklinMedium.otf"),
    },
    {
      family: "NYT Franklin Light",
      file: path.join(__dirname, "fonts", "NYTFranklinLight.otf"),
    },
    {
      family: "NYT Franklin Bold",
      file: path.join(__dirname, "fonts", "NYTFranklinBold.otf"),
    },
    {
      family: "NYT Karnak",
      file: path.join(__dirname, "fonts", "NYTKarnakText.otf"),
    },
    {
      family: "Source Sans Pro",
      file: path.join(__dirname, "fonts", "SourceSansPro-Regular.ttf"),
    },
    {
      family: "Source Sans Pro",
      file: path.join(__dirname, "fonts", "SourceSansPro-Light.ttf"),
      weight: 300,
    },
    {
      family: "Source Sans Pro",
      file: path.join(__dirname, "fonts", "SourceSansPro-Bold.ttf"),
      weight: "bold",
    },
    {
      family: "Source Sans Pro",
      file: path.join(__dirname, "fonts", "SourceSansPro-Italic.ttf"),
      style: "italic",
    },
    {
      family: "Ubuntu",
      file: path.join(__dirname, "fonts", "Ubuntu-Regular.ttf"),
    },
    {
      family: "Ubuntu",
      file: path.join(__dirname, "fonts", "Ubuntu-Light.ttf"),
      weight: "light",
    },
    {
      family: "Ubuntu",
      file: path.join(__dirname, "fonts", "Ubuntu-Medium.ttf"),
      weight: "medium",
    },
    {
      family: "Ubuntu",
      file: path.join(__dirname, "fonts", "Ubuntu-Bold.ttf"),
      weight: "bold",
    },
  ],
  redisHost: process.env.REDIS_URI,
  worker: env === "development" ? false : true,
};
