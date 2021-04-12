import React from 'react'
import ReactDOM from 'react-dom'

// import First from './componenetes/First'
// import GoodMorning from './componenetes/GoodMorning'
import Multi, { GoodNight} from './componenetes/Multiples'

ReactDOM.render(
    <div>
        <Multi.GoodAfternoon name="Matheus" />
        <GoodNight name="Maria" />
    </div>
,document.getElementById('root'))