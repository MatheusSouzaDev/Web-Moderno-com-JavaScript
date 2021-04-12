import React from "react";
import Son from "./Son"

export default props =>
<div>
    <h1>{props.name} {props.lastName}</h1>
    <h2>Filhos</h2>
    <ul>
        <Son name="Pedro" lastName={props.lastName} />
        <Son {...props} />
        <Son {...props} name="Carla" />
    </ul>
</div>