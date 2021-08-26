
const prioritySort = (array) => {

  const elapsed = (date) => (Date.now()-date)
  const msDays = (days) => (days*24*60*60*1000)

  const pastDue = array.filter((item) => ((item.lastDone+msDays(item.frequency)) <= Date.now()))
  const comingUp = array.filter((item) => ((item.lastDone+msDays(item.frequency)) > Date.now()))

  pastDue.sort((a,b) => (msDays(a.frequency)/elapsed(a.lastDone) > msDays(b.frequency)/elapsed(b.lastDone)) ? 1 : -1)
  comingUp.sort((a,b) => (msDays(a.frequency)+a.lastDone > msDays(b.frequency)+b.lastDone) ? 1 : -1)
  
  array = [...pastDue, ...comingUp]

  return array
}

export { prioritySort }