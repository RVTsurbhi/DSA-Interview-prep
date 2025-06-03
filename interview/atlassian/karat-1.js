/************** PROBLEM STATEMENT **************/

/*  We have a catalog of song titles (and their lengths) that we play at a local radio station. 
    We have been asked to play two of those songs in a row, and they must add up to exactly seven minutes long.  
    Given a list of songs and their durations, write a function that returns the names of any two distinct songs
    that add up to exactly seven minutes.  If there is no such pair, return an empty collection. 

Example:
song_times_1 = [
    ("Stairway to Heaven", "8:05"), ("Immigrant Song", "2:27"),
    ("Rock and Roll", "3:41"), ("Communication Breakdown", "2:29"),
    ("Good Times Bad Times", "2:48"), ("Hot Dog", "3:19"),
    ("The Crunge", "3:18"), ("Achilles Last Stand", "10:26"),
    ("Black Dog", "4:55")
]
find_pair(song_times_1) => ["Rock and Roll", "Hot Dog"] (3:41 + 3:19 = 7:00)

Additional Input:
song_times_2 = [
    ("Stairway to Heaven", "8:05"), ("Immigrant Song", "2:27"),
    ("Rock and Roll", "3:41"), ("Communication Breakdown", "2:29"),
    ("Good Times Bad Times", "2:48"), ("Black Dog", "4:55"),
    ("The Crunge", "3:18"), ("Achilles Last Stand", "10:26"),
    ("The Ocean", "4:31"), ("Hot Dog", "3:19"),
]
song_times_3 = [
    ("Stairway to Heaven", "8:05"), ("Immigrant Song", "2:27"),
    ("Rock and Roll", "3:41"), ("Communication Breakdown", "2:29"),
    ("Hey Hey What Can I Do", "4:00"), ("Poor Tom", "3:00"),
    ("Black Dog", "4:55")
]
song_times_4 = [
    ("Hey Hey What Can I Do", "4:00"), ("Rock and Roll", "3:41"),
    ("Communication Breakdown", "2:29"), ("Going to California", "3:30"),
    ("On The Run", "3:50"), ("The Wrestler", "3:50"), 
    ("Black Mountain Side", "2:11"), ("Brown Eagle", "2:20")
]
song_times_5 = [("Celebration Day", "3:30"), ("Going to California", "3:30")]
song_times_6 = [
  ("Rock and Roll", "3:41"), ("If I lived here", "3:59"),
  ("Day and night", "5:03"), ("Tempo song", "1:57")
]


Complexity Variable:
n = number of song/time pairs

All Test Cases - snake_case:
find_pair(song_times_1) => ["Rock and Roll", "Hot Dog"]
find_pair(song_times_2) => ["Rock and Roll", "Hot Dog"] or ["Communication Breakdown", "The Ocean"]
find_pair(song_times_3) => ["Hey Hey What Can I Do", "Poor Tom"]
find_pair(song_times_4) => []
find_pair(song_times_5) => ["Celebration Day", "Going to California"]
find_pair(song_times_6) => ["Day and night", "Tempo song"]

All Test Cases - camelCase:
findPair(songTimes1) => ["Rock and Roll", "Hot Dog"]
findPair(songTimes2) => ["Rock and Roll", "Hot Dog"] or ["Communication Breakdown", "The Ocean"]
findPair(songTimes3) => ["Hey Hey What Can I Do", "Poor Tom"]
findPair(songTimes4) => []
findPair(songTimes5) => ["Celebration Day", "Going to California"]
findPair(songTimes6) => ["Day and night", "Tempo song"]

*/

"use strict";

const songTimes1 = [
  ["Stairway to Heaven", "8:05"],
  ["Immigrant Song", "2:27"],
  ["Rock and Roll", "3:41"],
  ["Communication Breakdown", "2:29"],
  ["Good Times Bad Times", "2:48"],
  ["Hot Dog", "3:19"],
  ["The Crunge", "3:18"],
  ["Achilles Last Stand", "10:26"],
  ["Black Dog", "4:55"],
];
const songTimes2 = [
  ["Stairway to Heaven", "8:05"],
  ["Immigrant Song", "2:27"],
  ["Rock and Roll", "3:41"],
  ["Communication Breakdown", "2:29"],
  ["Good Times Bad Times", "2:48"],
  ["Black Dog", "4:55"],
  ["The Crunge", "3:18"],
  ["Achilles Last Stand", "10:26"],
  ["The Ocean", "4:31"],
  ["Hot Dog", "3:19"],
];
const songTimes3 = [
  ["Stairway to Heaven", "8:05"],
  ["Immigrant Song", "2:27"],
  ["Rock and Roll", "3:41"],
  ["Communication Breakdown", "2:29"],
  ["Hey Hey What Can I Do", "4:00"],
  ["Poor Tom", "3:00"],
  ["Black Dog", "4:55"],
];
const songTimes4 = [
  ["Hey Hey What Can I Do", "4:00"],
  ["Rock and Roll", "3:41"],
  ["Communication Breakdown", "2:29"],
  ["Going to California", "3:30"],
  ["On The Run", "3:50"],
  ["The Wrestler", "3:50"],
  ["Black Mountain Side", "2:11"],
  ["Brown Eagle", "2:20"],
];
const songTimes5 = [
  ["Celebration Day", "3:30"],
  ["Going to California", "3:30"],
];
const songTimes6 = [
  ["Rock and Roll", "3:41"],
  ["If I lived here", "3:59"],
  ["Day and night", "5:03"],
  ["Tempo song", "1:57"],
];

function findPair(songsList) {
  let target = 7 * 60; // min to sec
  let timeToSongMap = new Map();

  function findTimeFromStr(timeStr) {
    const [min, sec] = timeStr.split(":").map(Number);
    return min * 60 + sec;
  }

  for (let i = 0; i < songsList.length; i++) {
    const [title, timeStr] = songsList[i];
    let ans = [];

    let duration = findTimeFromStr(timeStr);
    let diff = target - duration;
    if (timeToSongMap.has(diff)) {
      let prevSong = timeToSongMap.get(diff);
      ans = [title, prevSong];
      console.log("ans1", ans);
      return ans;
    } else {
      timeToSongMap.set(duration, title);
    }
  }
  return [];
}
