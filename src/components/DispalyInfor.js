import React from "react";

class DisplayIinfo extends React.Component {
    render() {
        const { listUsers } = this.props
        // props => viết tắt của properties
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>Tên tôi là {user.name}</div>
                            <div>Tôi {user.age} tuổi</div>
                            <hr></hr>
                        </div>
                    )
                })}
                {/*<div>Tên tôi là {name}</div>
                <div>Tôi {age} tuổi</div>*/}
            </div>
        )
    }
}

export default DisplayIinfo;