const dayParse = (days) => {
    const isEss = (input) => {
        if (input > 1) return "s"
        else return ""
    }
        days = Math.abs(days)
    if (days >= 365) {
        const mod = days%365
        const y = (days-mod)/365
        const m = Math.round(mod/30)
        return (
            `${y === 1 ? "" : `${y} `}year${isEss(y)}${m > 0 ? " and " + m + " month" + isEss(m) : ""}`
        )
    }
    if (days >= 56 && days < 365) {
        const mod = days%30
        const m = (days-mod)/30
        const w = Math.round(mod/7)
        return (
            `${m === 1 ? "" : `${m} `}month${isEss(m)}${w > 0 ? " and " + w + " week" + isEss(w) : ""}`
        )
    }
    if (days >= 11 && days < 56) {
        const mod = days%7
        const w = (days-mod)/7
        const d = Math.round(mod)
        return (
            `${w === 1 ? "" : `${w} `}week${isEss(w)}${d > 0 ? " and " + d + " day" + isEss(d) : ""}`
        )
    }
    if (days < 11) {
        return (
            `${days === 1 ? "" : `${days} `}day${isEss(days)}`
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

