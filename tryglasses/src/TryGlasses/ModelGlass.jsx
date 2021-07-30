import React, { Component } from 'react'

export default class ModelGlass extends Component {


    render() {
        let {ClickGlass} = this.props
        return (

            <div>
                <div className="card" style={{ height:"450px",backgroundImage:"url(./glassesImage/model.jpg)",backgroundSize:"cover" }}>
                    <img src={ClickGlass.url} className="card-img-top mx-auto"  style={{paddingTop:"130px",width:"300px",paddingBottom:"30px"}}/>
                    <div className="card-body" style={{backgroundColor:"rgb(255, 128, 0,0.5)"}}>
                        <h2 className="card-text">
                            {ClickGlass.name} <br />
                             {ClickGlass.price} USD
                        </h2>
                        <p>{ClickGlass.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
