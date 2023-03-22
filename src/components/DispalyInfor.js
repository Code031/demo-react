import React from "react";
import './DisplayInfor.scss';

class DisplayIinfo extends React.Component {
    state = {
        isShowListUser: true
    }

    handelShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props
        // props => viết tắt của properties
        return (
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => { this.handelShowHide() }}>
                        {this.state.isShowListUser === true ? "Ẩn danh sách người dùng : " : "Hiện danh sách người dùng"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                    <div >Tên tôi là {user.name}</div>
                                    <div>Tôi {user.age} tuổi</div>
                                    <hr></hr>
                                </div>
                            )

                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayIinfo;