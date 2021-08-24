const daysToISOArr = (days) => {
    const epochStart = [1970,1,1]
    const msDays = days*1000*60*60*24
    const epoch = new Date(msDays)
    const iso = epoch.toISOString().split("T")
    const diff = iso[0].split("-").map((i,x) => (i-epochStart[x]))
    return diff
  }

const isoArrToString = (isoArr) => {
    
}

export { dayParse }