const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseTimeToMinutes(timeStr) {
  const [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

export function isMarketOpenNow(hours = []) {
  const now = new Date();

  const todayAbbr = DAY_ABBR[now.getDay()];

  const todaysHours = hours.find(
    (h) => h.day === todayAbbr
  );

  if (!todaysHours) {
    return false;
  }

  const nowMinutes =
    now.getHours() * 60 + now.getMinutes();

  const openMinutes =
    parseTimeToMinutes(todaysHours.open);

  const closeMinutes =
    parseTimeToMinutes(todaysHours.close);

  return (
    nowMinutes >= openMinutes &&
    nowMinutes < closeMinutes
  );
}