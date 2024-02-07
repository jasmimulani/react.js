/*  JavaScript Date Objects  */

// In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

// A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// The epoch, timestamps, and invalid date
// A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This timestamp is timezone-agnostic and uniquely defines an instant in history.

// Note: While the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

// The maximum timestamp representable by a Date object is slightly smaller than the maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991). A Date object can represent a maximum of ±8,640,000,000,000,000 milliseconds, or ±100,000,000 (one hundred million) days, relative to the epoch. This is the range from April 20, 271821 BC to September 13, 275760 AD. Any attempt to represent a time outside this range results in the Date object holding a timestamp value of NaN, which is an "Invalid Date".

// As a UTC time, it is midnight at the beginning of January 1, 1970, UTC,
// As a local time in New York (UTC-5), it is 19:00:00 on December 31, 1969.


/*

new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(milliseconds)

*/

// let Date1 = new Date();
// console.log(Date1);

// let date2 = new Date("10-12-2050")
// console.log(date2);

// let date3 = new Date(2023 , 4);
// console.log(date3);