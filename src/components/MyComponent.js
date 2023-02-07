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

    handelOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handelOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    //JSX
    render() {
        return (
            <div>
                Tên của tôi là {this.state.name} số ngẫu nhiên {this.state.age}
                <form onSubmit={(event) => this.handelOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handelOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default MyComponent;