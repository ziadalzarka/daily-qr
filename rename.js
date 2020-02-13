const fs = require("fs");

fs.readdir("./images", (err, files) => {
  for (let i = 0; i <= files.length; i++) {
    fs.rename("./images/" + files[i], "./images/" + (i + 1) + ".jpg", () => {});
  }
});
