import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS, GET_ONE_USER} from "./query/user";
import {CREATE_USER} from "./mutations/user";

import { useState, useEffect } from "react";

import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";



const ApolloJS = () => {

    const {data, loading, error, refetch} = useQuery(GET_ALL_USERS)
    const {data:oneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {
        variables: {
            id: 1
        }
    })
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(18)

    console.log(oneUser)

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers)
        }
    }, [data])

    const addUser = (e) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username, age
                }
            }
        }).then(({data}) => {
            console.log(data)
            setUsername('')
            setAge(0)
        })
    }
    const getAll = e => {
        e.preventDefault()
        refetch()
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <form>
                <MyInput value={username} onChange={e => setUsername(e.target.value)} type="text" 
                fontSize="75%"/>
                <MyInput value={age} onChange={e => setAge((e.target.valueAsNumber))} type="number" 
                fontSize="75%"/>
                <div className="btns">
                    <MyButton onClick={(e) => addUser(e)}
                    fontSize="100%" width="200px" background="#FA0">Создать</MyButton>
                    <MyButton onClick={e => getAll(e)} 
                    fontSize="100%" width="200px" background="#F80">Получить</MyButton>
                </div>
            </form>
            <div>
                {users.map((user, N) =>
                    <div className="user">{N}. {user.username} - {user.age}</div>
                )}
            </div>
        </div>
    )
}

export default ApolloJS;