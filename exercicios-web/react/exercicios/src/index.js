import React from 'react'
import ReactDOM from 'react-dom'

// import First from './componenetes/First'
// import GoodMorning from './componenetes/GoodMorning'
// import Multi, { GoodNight} from './componenetes/Multiples'
import Greeting from './componenetes/Greeting'

ReactDOM.render(
    <div>
        <Greeting type="Bom dia" name="João"/>
    </div>
,document.getElementById('root'))