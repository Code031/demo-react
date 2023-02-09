import React from "react";


class UserInfor extends React.Component {

    state = {
        name: 'Anh',
        address: 'Hà Nội',
        age: 22
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
        console.log(this.state)
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
                    <button>Submit</button>
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

export default UserInfor;