const date = new Date();

date.setMonth(0);
date.setDate(0);
date.setHours(0, 0, 0, 0);

let day = moment().diff(date, "days") % 27;

if (day == 0) {
  day = 27;
}

document.getElementById("drawing").src = `images/${day}.jpg`;
