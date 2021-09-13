import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../store/asyncActions/users";
import { useEffect } from "react";


export default function RestAPI () {

    const dispatch = useDispatch();
    const users = useSelector(state => state.reducerUsers.fetchUsers);


    useEffect(() => dispatch(fetchUsers()), [])
    

    return (
        <div>
            <div>
                <MyInput type="text"
                    fontSize="75%" />
                <MyInput type="number"
                    fontSize="75%" />
                <div className="btns">
                    <MyButton
                        fontSize="100%" width="200px" background="#FA0">Создать</MyButton>
                    <MyButton
                    onClick={() => dispatch(fetchUsers())}
                        fontSize="100%" width="200px" background="#F80">Получить</MyButton>
                </div>
            </div>

            <div>
                {(users) ? 
                users.map(user => <div><img src={user.url} alt="" />{user.url}</div> )
                :
                null}
            </div>
        </div>
    )
}

