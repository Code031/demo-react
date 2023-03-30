import React, { useState } from "react";


// class AddUserInfor extends React.Component {

//     state = {
//         name: '',
//         address: 'Hà Nội',
//         age: ''
//     }

//     handelOnChangeInputName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handelOnChangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handelOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }


//     render() {
//         return (
//             <div>
//                 Tên của tôi là {this.state.name} số ngẫu nhiên {this.state.age}
//                 <form onSubmit={(event) => this.handelOnSubmit(event)}>
//                     <label>Tên của bạn </label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handelOnChangeInputName(event)}
//                         value={this.state.name}
//                     />
//                     <label>Tuổi của bạn </label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handelOnChangeInputAge(event)}
//                         value={this.state.age}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    // state = {
    //     name: '',
    //     address: 'Hà Nội',
    //     age: ''
    // }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('Hà Nội')
    const [age, setAge] = useState('')


    const handelOnChangeInputName = (event) => {
        setName(event.target.value)

        // this.setState({
        //     name: event.target.value
        // })
    }

    const handelOnChangeInputAge = (event) => {
        setAge(event.target.value)
        // this.setState({
        //     age: event.target.value
        // })
    }

    const handelOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
            Tên của tôi là {name} số ngẫu nhiên {age}
            <form onSubmit={(event) => handelOnSubmit(event)}>
                <label>Tên của bạn </label>
                <input
                    type="text"
                    onChange={(event) => handelOnChangeInputName(event)}
                    value={name}
                />
                <label>Tuổi của bạn </label>
                <input
                    type="text"
                    onChange={(event) => handelOnChangeInputAge(event)}
                    value={age}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor;