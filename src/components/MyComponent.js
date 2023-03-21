import React from "react";
import DisplayIinfo from "./DispalyInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Vũ Công Anh", age: "16" },
            { id: 2, name: "Công Anh", age: "22" },
            { id: 3, name: "Hồng", age: "70" },
        ]
    }

    handleAddNewUser = (userOjb) => {
        // let listUsersNew = this.state.listUsers;
        // //listUsersNew.unshift(userOjb);
        // listUsersNew.push(userOjb);
        // this.setState({
        //     listUsers: listUsersNew
        // })
        this.setState({
            listUsers: [userOjb, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        //DRY : don't repeat yourseft
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayIinfo
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}


export default MyComponent;