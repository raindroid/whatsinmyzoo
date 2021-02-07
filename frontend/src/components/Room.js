import { Paper } from '@material-ui/core'
import React from 'react'

const ChartBoard = () => {
    return <Paper>Chat Here</Paper>
}

const TimeBoard = () => {
    return <Paper>Current Time: Study mode</Paper>
}

const VideBoard = () => {
    return <Paper>Live streaming here</Paper>
}

const LearshipBoard = () => {
    return <Paper>Leaderboard</Paper>
}

export default function Room() {
    return (
        <div>
            <ChartBoard/>
            <TimeBoard/>
            <VideBoard/>
            <LearshipBoard/>
        </div>
    )
}
