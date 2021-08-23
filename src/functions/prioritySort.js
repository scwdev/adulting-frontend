//// input days between instances as a number, output Date object set as current date + days
//// const countdown = (days) => {
////     const finish = new Date()
////     finish.setDate(finish.getDate() + days)
////     return finish
//// }

// input array of objects with a {frequency: Number of days} key and a {lastDone: Date} key
const prioritySort = (array) => {
  // the number of ms since a given date
  const elapsed = (date) => (Date.now()-date)
  // the number of ms in a given number of days
  const msDays = (days) => (days*86400000)
  
  // sorts by dividing the desired frequency by the amount of time since last occurence
  array.sort((a,b) => (msDays(a.frequency)/elapsed(a.lastDone) > msDays(b.frequency)/elapsed(b.lastDone)) ? 1 : -1)
  
  return array
}

export { prioritySort }