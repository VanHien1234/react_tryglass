import React, { Component } from 'react'
import DataGlass from "./dataGlasses.json";
import ModelGlass from './ModelGlass';


export default class TryGlasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        };
    }

    handleClick = (id) => {
        this.setState({ id: id });
    
    }
    RenderListGlass =()=>{
        return DataGlass.map((Glass, index) => {
            return <div className="col-3" key={index} onClick={() => this.handleClick(Glass.id)}>
                <img src={Glass.url} alt="" style={{ width: "100px" }} />
                
            </div>
        });
    }

    


    RenderModelGlass = ()=>{
        let ClickGlass = DataGlass.filter(e=>e.id===this.state.id);
        console.log(ClickGlass);
        return ClickGlass.map((sp,index)=>{
            return <div key={index}>
                <ModelGlass ClickGlass={sp}/>
            </div>
        }
        )
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Try Glass App</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-5">{this.RenderModelGlass()}</div>
                        <div className="col-2"></div>
                        <div className="col-5"></div>
                    </div>

                    <div className="row">
                    {this.RenderListGlass()}
                    </div>
                    
                </div>


                
            </div>
        )
    }
}
