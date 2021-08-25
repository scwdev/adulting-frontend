import React from "react"

const ProgBar = (props) => {

    const progCalc = (task) => {
        const elapsed = Date.now()-task.lastDone
        const msDays = task.frequency * 86400000
        console.log(elapsed/msDays)
        // const progress = () => {
            if (elapsed/msDays > 1) return 1
            else return elapsed/msDays
        // }
        // return progress()
      }

    const progress = progCalc(props.task)
    const width = props.width
    const height = props.height
    const background = props.background
    const color = props.color

    const bar = (
        <div className="bar-background" style={{
            backgroundColor: background,
            // border: "1px solid black",
            width: `${width}em`,
            height: `${height}em`,
            borderRadius: "1em"

        }}>
            <span className="bar-progress" style={{
                backgroundColor: color,
                width: `${width * progress}em`,
                height: `inherit`,
                margin: "0px",
                // border: "1px solid black",
                position: "absolute",
                borderRadius: "inherit"
                }}>
            </span>
        </div>
    )

    return (
        bar
    )
}

export default ProgBar