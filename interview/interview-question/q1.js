/*
Have the function  MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day 
and will be filled with events that span from time X to time Y in the day. 
The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be 
["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. 
Your program will have to output the longest amount of free time available between the start of your first event 
and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and 
the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 
(with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). 
The input will contain at least 3 events and the events may be out of order.
*/

function MostFreeTime(strArr) {
  // code goes here
  function convertToMinutes(timeStr) {
    let period = timeStr.slice(-2);
    let [hh, min] = timeStr.slice(0, -2).split(":").map(Number);
    // let item = timeStr.split(":")
    // let hh = parseInt(item[0])
    // let mm = parseInt(item[1])

    if (period == "AM" && hh === 12) hh += 0;
    if (period == "PM" && hh != 12) hh += 12;
    return hh * 60 + min;
  }

  let n = strArr.length;
  let timeArr = [];
  for (let i = 0; i < n; i++) {
    //"10:00AM-12:30PM - 600-102
    let item = strArr[i].split("-");
    const [start, end] = [convertToMinutes(item[0]), convertToMinutes(item[1])];
    timeArr.push([start, end]);
  }

  //sort by start time
  timeArr.sort((a, b) => a[0] - b[0]);

  console.log("timeArr", timeArr);

  // let start = timeArr[0],
  //   end = timeArr[1];
  let maxFreeTime = 0;
  for (let i = 1; i < timeArr.length; i++) {
    let currTime = timeArr[i];
    let freetime = currTime[0] - timeArr[i - 1][1];
    if (freetime > maxFreeTime) {
      maxFreeTime = freetime;
    }
  }
  console.log("maxFreeTime", maxFreeTime);
  //convert back to hr, min
  let hour = Math.floor(maxFreeTime / 60);
  let min = maxFreeTime % 60;
  let result =
    hour.toString().padStart(2, 0) + ":" + min.toString().padStart(2, 0);
  console.log("result", result);
  return result;
}

function MostFreeTime2(strArr) {
  function toMinutes(t) {
    let period = t.slice(-2);
    let [hours, minutes] = t.slice(0, -2).split(":").map(Number);

    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  }

  // Parse intervals
  let intervals = strArr.map((event) => {
    let [start, end] = event.split("-");
    return [toMinutes(start), toMinutes(end)];
  });

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  console.log("intervals", intervals);

  let maxFree = 0;

  // Find max gap
  for (let i = 1; i < intervals.length; i++) {
    let gap = intervals[i][0] - intervals[i - 1][1];
    if (gap > maxFree) maxFree = gap;
  }

  // Convert back to hh:mm
  let hours = Math.floor(maxFree / 60);
  let minutes = maxFree % 60;

  //NOTE: padstart add padding to the beginning of the str and value passed to this method is the total len of the str along with padding
  let finalRes =
    String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");
  // let finalRes2 = hours + ":" + minutes;

  console.log("hr", hours, minutes, finalRes);

  return finalRes;
}

// keep this function call here
console.log(
  "Sample test passing: " +
    (MostFreeTime(["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]) ==
      "01:30"),
);
console.log(
  "Sample test passing: " +
    (MostFreeTime(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]) ==
      "00:30"),
);
