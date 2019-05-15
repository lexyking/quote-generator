import React from 'react'

function Submit(props) {

    return (
        <button onClick={props.generateQuote}
            className="submitBtn">Submit</button>
    )

}

export default Submit
