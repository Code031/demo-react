import React from "react";


class AddUserInfor extends React.Component {

    state = {
        name: '',
        address: 'Hà Nội',
        age: ''
    }

    handelOnChangeInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handelOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handelOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }


    render() {
        return (
            <div>
                Tên của tôi là {this.state.name} số ngẫu nhiên {this.state.age}
                <form onSubmit={(event) => this.handelOnSubmit(event)}>
                    <label>Tên của bạn </label>
                    <input
                        type="text"
                        onChange={(event) => this.handelOnChangeInputName(event)}
                        value={this.state.name}
                    />
                    <label>Tuổi của bạn </label>
                    <input
                        type="text"
                        onChange={(event) => this.handelOnChangeInputAge(event)}
                        value={this.state.age}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;