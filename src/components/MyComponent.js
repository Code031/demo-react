import React, { useState } from "react";
import DisplayIinfo from "./DispalyInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Vũ Công Anh", age: "16" },
//             { id: 2, name: "Công Anh", age: "22" },
//             { id: 3, name: "Hồng", age: "70" },
//         ]
//     }

//     handleAddNewUser = (userOjb) => {
//         // let listUsersNew = this.state.listUsers;
//         // //listUsersNew.unshift(userOjb);
//         // listUsersNew.push(userOjb);
//         // this.setState({
//         //     listUsers: listUsersNew
//         // })
//         this.setState({
//             listUsers: [userOjb, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         // let listUsersClone = [...this.state.listUsers]
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //JSX
//     render() {
//         //DRY : don't repeat yourseft
//         // const test = { name: "Công Anh", age: 22 }
//         return (
//             <>
//                 {/* {JSON.stringify(test)} */}
//                 <div className='a'>
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>
//                     <DisplayIinfo
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className='b'>

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUser] = useState(
        [
            { id: 1, name: "Vũ Công Anh", age: "16" },
            { id: 2, name: "Công Anh", age: "22" },
            { id: 3, name: "Hồng", age: "70" }
        ]
    )

    const handleAddNewUser = (userOjb) => {
        setListUser([userOjb, ...listUsers])

        // this.setState({
        //     listUsers: [userOjb, ...this.state.listUsers]
        // })
    }

    const handleDeleteUser = (userId) => {
        // let listUsersClone = [...this.state.listUsers]
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUser(listUsersClone)

        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            {/* {JSON.stringify(test)} */}
            <div className='a'>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <DisplayIinfo
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'>

            </div>
        </>
    )
}

export default MyComponent;