import React from "react";

class DisplayIinfo extends React.Component {
    render() {
        const { name, age } = this.props
        // props => viết tắt của properties
        return (
            <div>
                <div>Tên tôi là {name}</div>
                <div>Tôi {age} tuổi</div>
            </div>
        )
    }
}

export default DisplayIinfo;