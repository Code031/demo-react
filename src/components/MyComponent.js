import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Anh',
        address: 'Hà Nội',
        age: 22
    }
    //JSX
    render() {
        return (
            <div>
                Tên của tôi là {this.state.name} và tôi sống ở {this.state.address}
            </div>
        );
    }
}


export default MyComponent;