import React from 'react'
import cricket from '../cricket-bat.svg'

function PlayArea(props) {
    if (props.batting) {
        return (
        <div className="row no-gutter justify-content-between">
            <div className="col-sm-12 col-lg-3">
                <h1 className="pl-title">Player</h1>
                <h1 className="hand-val">{props.playerVal}</h1>
            </div>
            <img src={cricket} className="col-4 img-fluid mx-auto cric-img" alt="cricket"></img>
            <div className="col-sm-12 col-lg-3">
                <h1 className="pl-title">Comp<sup>*</sup></h1>
                <h1 className="hand-val">{props.compVal}</h1>
            </div>
        </div>
    )
    }
    else {
        return (
            <div className="row no-gutter justify-content-between">
                <div className="col-sm-12 col-lg-3">
                    <h1 className="pl-title">Player<sup>*</sup></h1>
                    <h1 className="hand-val">{props.playerVal}</h1>
                </div>
                <img src={cricket} className="col-4 img-fluid mx-auto cric-img" alt="cricket"></img>
                <div className="col-sm-12 col-lg-3">
                    <h1 className="pl-title">Comp</h1>
                    <h1 className="hand-val">{props.compVal}</h1>
                </div>
            </div>
        )
    }
}

export default PlayArea
