function formatDuration(minutes: number): string {
  let output = "";
  let unit = "";
  if (minutes) {
    // In case a formatted string is passed in here
    if (isNaN(minutes)) {
      return `${minutes}`;
    }
    if (minutes >= 1440) {
      const days = Math.floor(minutes / 1440);
      unit = days > 1 ? "days" : "day";
      output += days > 0 ? `${days} ${unit} ` : "";
      minutes %= 1440;
    }
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      unit = hours > 1 ? "hrs" : "hr";
      output += hours > 0 ? `${hours} ${unit} ` : "";
      minutes %= 60;
    }
    unit = minutes > 1 ? "mins" : "min";
    output += minutes > 0 ? `${Math.ceil(minutes)} ${unit}` : "";
  }
  return output.trim();
}
export default formatDuration;
