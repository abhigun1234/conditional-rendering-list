import React from 'react';

function Child(props) {
    console.log("props.name",props)
    return (
        <div>
            {props.name}
            <button onClick={()=>props.callHandler("welcome")}>Call Me</button>
        </div>
    );
}

export default Child;