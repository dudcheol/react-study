import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  // static contextType을 정의하면 클래스 메서드에서도 Context에 넣어 둔 함수를 호출할 수 있다는 장점 존재.
  // 하지만, 한 클레스에서 하나의 Context밖에 사용하지 못한다는 단점이 있음. -> useContext 사용 권장
  static contextType = ColorContext; // this.context가 현재 Context의 value를 가리키게 됨.

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setColor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => {
                this.handleSetColor(color);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            ></div>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
