import React from "react";
import DisplayIinfo from "./DispalyInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    //JSX
    render() {
        const MyInfo = ['a', 'b', 'c'];
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayIinfo name="Vũ Công Anh" age="22" />
                <hr></hr>
                <DisplayIinfo name="Anh đẹp trai" age={20} MyInfo={MyInfo} />
            </div>
        );
    }
}


export default MyComponent;