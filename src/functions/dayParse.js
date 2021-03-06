// this function accepts a Number (of days) and returns an english phrase approximating the length of time that number represents

const dayParse = (days, a) => {
    const isEss = (input) => {
        if (input > 1 || input === 0) return "s"
        else return ""
    }
        days = Math.abs(days)
    if (days >= 365) {
        const mod = days%365
        const y = (days-mod)/365
        const m = Math.round(mod/30)
        return (
            `${y === 1 ? a + "" : `${y} `}year${isEss(y)}${m > 0 ? " and " + m + " month" + isEss(m) : ""}`
        )
    }
    if (days >= 30 && days < 365) {
        const mod = days%30
        const m = (days-mod)/30
        const w = Math.round(mod/7)
        return (
            `${m === 1 ? a + "" : `${m} `}month${isEss(m)}${w > 0 ? " and " + w + " week" + isEss(w) : ""}`
        )
    }
    if (days >= 11 && days < 30) {
        const mod = days%7
        const w = (days-mod)/7
        const d = Math.round(mod)
        return (
            `${w === 1 ? a + "" : `${w} `}week${isEss(w)}${d > 0 ? " and " + d + " day" + isEss(d) : ""}`
        )
    }
    if (days < 11 && days !== 0) {
        return (
            `${days === 1 ? a + "" : `${days} `}day${isEss(days)}`
        )
    }
    if (days === 0) {
        return (
            "day"
        )
    }
}

export { dayParse }