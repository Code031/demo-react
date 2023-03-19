import React from "react";
import DisplayIinfo from "./DispalyInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Vũ Công Anh", age: "22" },
            { id: 2, name: "Công Anh", age: "21" },
            { id: 3, name: "Hồng", age: "21" },
        ]
    }

    //JSX
    render() {
        //DRY : don't repeat yourseft
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayIinfo listUsers={this.state.listUsers} />

            </div>
        );
    }
}


export default MyComponent;