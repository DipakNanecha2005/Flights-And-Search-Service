/**
 * Compare Time
 * @param {string} timeString1 - Arrival time in String
 * @param {string} timeString2 - Departure time in String
 * @returns {Boolean}
 */
export const compareTime = (timeString1, timeString2) => {
  let dateTime1 = new Date(timeString1);
  let dateTime2 = new Date(timeString2);

  return dateTime1.getTime() > dateTime2.getTime();
};
