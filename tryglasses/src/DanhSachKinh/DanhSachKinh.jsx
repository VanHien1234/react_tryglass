import React, { Component } from "react";
import DataKinh from "./dataGlasses.json";

export default class DanhSachKinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  handleClick(id) {
    this.setState({ id: id });
    console.log(id)
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="mx-auto">Try Glasses App</h1>
        </div>
        <div className="container">
          <div className="row" style={{ height: "100px" }}>
            <div className="col-4">{/* <RenderModelKinh /> */}</div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
          <div className="container">
            <div className="row" style={{ display: "flex" }}>
              <ListGlass glassId={this.state.id} onClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const RenderModelKinh = () => {
  const glass = DataKinh.filter((e) => e.id == this.state.id);
  // if (glass) return null;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={glass.url} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-text">
          {glass.name} {glass.price}USD
        </h1>
        <p>{glass.desc}</p>
      </div>
    </div>
  );
};

const ListGlass = (props) => {
  return DataKinh.map((glass, index) => {
    return (
      <div
        className="col-12"
        style={{}}
        key={index}
        onClick={() => {
          props.onClick(glass.id);
        }}
      >
        <img src={glass.url} alt="" style={{ width: "100px" }} />
      </div>
    );
  });
};
