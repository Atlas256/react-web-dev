import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";


export default function RestAPI () {

    return (
        <div>
            <form>
                <MyInput type="text"
                    fontSize="75%" />
                <MyInput type="number"
                    fontSize="75%" />
                <div className="btns">
                    <MyButton
                        fontSize="100%" width="200px" background="#FA0">Создать</MyButton>
                    <MyButton
                        fontSize="100%" width="200px" background="red">Получить</MyButton>
                </div>
            </form>
        </div>
    )
}

