// input array of objects with a {frequency: Number of days} key and a {lastDone: Date} key
const isoParse = (ms) => {
    if (typeof ms === "number") {
        const dateObj = new Date(ms)
        const isoArr = dateObj.toISOString().split("T")
        return isoArr[0]
      } else {
        return null
      }
  }
  
  export { isoParse }