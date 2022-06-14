import React from 'react'
import Cell from './Cell.jsx'

class Grid extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        )
    }
} 
export default Grid;