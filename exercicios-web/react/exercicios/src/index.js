import React from "react";
import ReactDOM from "react-dom";

// import First from './componenetes/First'
// import GoodMorning from './componenetes/GoodMorning'
// import Multi, { GoodNight} from './componenetes/Multiples'
// import Greeting from './componenetes/Greeting'
import Father from "./componenetes/Father";
import Son from "./componenetes/Son";

ReactDOM.render(
  <div>
    <Father name="Paulo" lastName="Silva">
      {/* Como passar os componentes Filhos aqui? */}
      <Son name="Pedro" />
      <Son name="Paulo" />
      <Son name="Carla" />
    </Father>
  </div>,
  document.getElementById("root")
);
