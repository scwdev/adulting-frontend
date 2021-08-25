const dayParse = (days) => {
    const isEss = (input) => {
        if (input > 1) return "s"
        else return ""
    }
    if (days >= 365) {
        const mod = days%365
        const y = (days-mod)/365
        const m = Math.round(mod/30)
        return (
            `${y} year${isEss(y)}${m > 0 ? ", " + m + " month" + isEss(m) : ""}`
        )
    }
    if (days >= 56 && days < 365) {
        const mod = days%30
        const m = (days-mod)/30
        const w = Math.round(mod/7)
        return (
            `${m} month${isEss(m)}${w > 0 ? ", " + w + " week" + isEss(w) : ""}`
        )
    }
    if (days >= 11 && days < 56) {
        const mod = days%7
        const w = (days-mod)/7
        const d = Math.round(mod)
        return (
            `${w} week${isEss(w)}${d > 0 ? ", " + d + " day" + isEss(d) : ""}`
        )
    }
    if (days < 11) {
        return (
            `${days} day${isEss(days)}`
        )
    }
}

export { dayParse }







// alt function
// const epochStart = [1970,1,1]
// const msDays = days*1000*60*60*24
// const epoch = new Date(msDays)
// const iso = epoch.toISOString().split("T")
// const diff = iso[0].split("-").map((i,x) => (i-epochStart[x]))
// return diff
// }

