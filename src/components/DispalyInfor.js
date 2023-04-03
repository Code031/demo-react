import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from "./../logo.svg";

// class DisplayIinfo extends React.Component {

//     render() {
//         const { listUsers } = this.props
//         // props => viết tắt của properties
//         return (
//             <div className='display-infor-container'>

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                                     <div >Tên tôi là {user.name}</div>
//                                     <div>Tôi {user.age} tuổi</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}> Xoá </button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             )

//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayIinfo = (props) => {
    const { listUsers } = props
    // props => viết tắt của properties
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('Bạn đã xoá hết user');
            }
        }, [listUsers]
    );
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Ẩn danh sách người sử dụng" : "Hiện thị danh sách người sử dụng"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                <div >Tên tôi là {user.name}</div>
                                <div>Tôi {user.age} tuổi</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}> Xoá </button>
                                </div>
                                <hr></hr>
                            </div>
                        )

                    })}
                </>
            }
        </div>
    )

}
export default DisplayIinfo;