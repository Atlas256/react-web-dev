import "./RestAPI.styles.css";

import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

import { useDispatch, useSelector } from "react-redux";
import { thunkGetUsers, thunkCreateUser, thunkEditUser, thunkDeleteUser } from "../../../redux/thunks/thunkUsers";
import { useEffect, useState } from "react";


export default function RestAPI() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(18);
    const [currentNumber, setCurrentNumber] = useState(-1);

    const dispatch = useDispatch();
    const users = useSelector(state => state.reducerUsers.users);


    
    const getUsers = () => {
        dispatch(thunkGetUsers())
    }

    const createUser = () => {
        if (name) {
            dispatch(thunkCreateUser({ "name": name, "age": age }))
            setName('');
            setAge(18);
        }
    }

    const editUser = () => {
        users[currentNumber].name = name;
        users[currentNumber].age = age;

        dispatch(thunkEditUser(users[currentNumber], currentNumber))

        setCurrentNumber(-1);
        setName('');
        setAge(18);
    }

    const deleteUser = (userID) => {
        if (userID)
            dispatch(thunkDeleteUser(userID))
    }

    //-------------------------------------

    const ageValidation = (value) => {
        if (value.length <= 2)
            if (/^[0-9]+$/.test(value))
                setAge(value);
    }

    window.onkeydown = e => {
        if (e.key == "Enter")
            createUser();
    }


    if (users)
    console.log(users[currentNumber])

    return (
        <div>
            <div>
                <MyInput
                    onChange={e => setName(e.target.value)}
                    type="text" value={name} placeholder="Name"
                    fontSize="75%" />
                <MyInput
                    onChange={e => ageValidation(e.target.value)}
                    type="number" value={age}
                    fontSize="75%" />
                <div>
                    {
                        (currentNumber < 0)
                            ?
                            <MyButton
                                onClick={() => createUser()}
                                fontSize="100%" width="200px" background="#FA0">
                                Создать</MyButton>
                            :
                            <MyButton
                                onClick={() => editUser()}
                                fontSize="100%" width="200px" background="#42F">
                                Изменить
                            </MyButton>
                    }
                    <MyButton
                        onClick={() => getUsers()}
                        fontSize="100%" width="200px" background="#F80">
                        Получить</MyButton>
                </div>
            </div>

            <div>
                {(users) ?
                    users.map((user, N) =>
                        <div key={user._id} className="user-item">
                            <div className="user-info">
                                {N} - {user.name} {user.age}
                            </div>
                            <div className="user-item-right">
                                <div
                                    onClick={() => {
                                        setName(user.name);
                                        setAge(user.age);
                                        setCurrentNumber(N);
                                    }}
                                    className="btn btn-edit">
                                    <i class="far fa-edit"></i>
                                </div>
                                <div
                                    onClick={() => deleteUser(user._id)}
                                    className="btn btn-delete">
                                    <i class="far fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    null}
            </div>
        </div>
    )
}

