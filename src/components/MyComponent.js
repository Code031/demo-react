import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Anh',
        address: 'Hà Nội',
        age: 22
    }

    handelClick(event) {
        // console.log('Click');
        // console.log('Tên của tôi là', this.state.name)

        this.setState({
            name: 'Công Anh',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handelOnMouseOver(event) {
        //console.log(event)
    }

    //JSX
    render() {
        return (
            <div>
                Tên của tôi là {this.state.name} số ngẫu nhiên {this.state.age}
                <button onMouseOver={this.handelOnMouseOver}>Hover</button>
                <button onClick={(event) => { this.handelClick(event) }}>Click</button>
            </div>
        );
    }
}


export default MyComponent;