// Copilot: ignore file
// Kata: Was the package received before it was sent? 
// Level: 8kyu
// Solved: 2025-08-20

function was_package_received_yesterday(tz_from, tz_to, start, duration) {
   return start - tz_from  + duration + tz_to < 0;
}