import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Anh',
        address: 'Hà Nội',
        age: 22
    }

    handelClick(event) {
        console.log(event)
    }

    handelOnMouseOver(event) {
        console.log(event)
    }

    //JSX
    render() {
        return (
            <div>
                Tên của tôi là {this.state.name} và tôi sống ở {this.state.address}
                <button onMouseOver={this.handelOnMouseOver}>Hover</button>
                <button onClick={this.handelClick}>Click</button>
            </div>
        );
    }
}


export default MyComponent;