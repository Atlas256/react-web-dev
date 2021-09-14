import { takeEvery, put, call } from 'redux-saga/effects';



function* sagaWorker() {
    const payload = yield call(fetchUsers);
    yield put({ type: "FETCH_GET_USERS", payload })
}

export function* sagaWatcher() {
    yield takeEvery("REQUEST_POSTS", sagaWorker)
}



const URL =
    'https://jsonplaceholder.typicode.com/photos?_limit=100';

const fetchUsers = async () => {
    const res = await fetch(URL);
    return await res.json();
}

    //saga
    //useEffect(() => dispatch({ type: "REQUEST_POSTS" }), [])


