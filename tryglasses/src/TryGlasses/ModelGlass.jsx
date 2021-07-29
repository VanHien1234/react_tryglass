import React, { Component } from 'react'

export default class ModelGlass extends Component {


    render() {
        let {ClickGlass} = this.props
        return (

            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={ClickGlass.url} className="card-img-top" />
                    <div className="card-body">
                        <h1 className="card-text">
                            {ClickGlass.name} USD
                        </h1>
                        <p>{ClickGlass.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
