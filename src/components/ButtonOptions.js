import React from 'react'

function ButtonOptions(props) {
    return (
        <>
            <div className="row justify-content-around buttons">
                <button className="btn btn-primary col-3" onClick={() => { props.clickHandler(1) }}>1</button>
                <button className="btn btn-primary col-3" onClick={() => { props.clickHandler(2) }}>2</button>
                <button className="btn btn-primary col-3" onClick={() => { props.clickHandler(3) }}>3</button>
            </div>
            <div className="row justify-content-around button-gap">
                <button className="btn btn-primary col-3" onClick={() => { props.clickHandler(4) }}>4</button>
                <button className="btn btn-primary col-3" onClick={() => { props.clickHandler(5) }}>5</button>
                <button className="btn btn-primary col-3" onClick={() => { props.clickHandler(6) }}>6</button>
            </div>
        </>    
    )
}

export default ButtonOptions
