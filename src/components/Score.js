import React from 'react'

function Score(props) {
    return (
        <div className = "col-sm-12 no-gutters">
            <div className="row justify-content-center align-items-center no-gutters">
                <div className="col-sm-12 col-lg-2 p1">
                    Player
                </div>
                <div className="col-sm-12 col-lg-5 score">
                    <div className="row justify-content-center no-gutters">
                        <div className="col-3 score-text align-self-center">Score:</div>
                        <div className="col-3 score-val align-self-center">{props.score}</div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-2 p2">
                    Comp.
                </div>
            </div>
        </div>
    )
}

export default Score
