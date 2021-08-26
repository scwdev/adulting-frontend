import React from "react"

const ProgBar = (props) => {

    const progCalc = (task) => {
        const elapsed = Date.now()-task.lastDone
        const msDays = task.frequency * 86400000
        // const progress = () => {
            if (elapsed/msDays > 1) return 1
            else return elapsed/msDays
        // }
        // return progress()
      }

    const progress = progCalc(props.task)
    const width = parseInt(props.width)
    const height = props.height
    const background = "#9fd8cb"
    const color = "#517664"

    const bar = (
        <div className="bar-background" style={{
            backgroundColor: background,
            // border: "1px solid black",
            width: width+`rem`,
            height: `${height}rem`,
            borderRadius: "1em",
            zIndex: 1

        }}>
            <div className="bar-progress" style={{
                backgroundColor: color,
                width: `${width * progress}rem`,
                minWidth: ".5rem",
                height: `inherit`,
                margin: "0px",
                // border: "1px solid black",
                zIndex: 2,
                // position: "absolute",
                borderRadius: "inherit"
                }}>
            </div>
        </div>
    )

    return (
        bar
    )
}

export default ProgBar