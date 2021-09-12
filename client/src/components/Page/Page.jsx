import './Page.css';

import Error from '../Error';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const pagesHistory = {}

const Page = () => {

    const currentPage = useSelector(state => state.reducerComponents.currentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        let url = window.location.pathname;
        url = url.slice(1, url.length);

        if (!pagesHistory[url])
            pagesHistory[url] = currentPage;
    }, [currentPage])


    window.onpopstate = () => {
        let url = window.location.pathname;
        url = url.slice(1, url.length);

        if (pagesHistory[url])
            dispatch({ type: "SET_CURRENT_PAGE", payload: pagesHistory[url] });
    }



    return (
        <div className="page">
            <h2 className="page-title">{currentPage.name.toUpperCase()}</h2>
            <div className="title-line"></div>
            <Switch>
                <Route
                    exact path={"/" + currentPage.name.toLowerCase().split(' ').join('_')}
                    component={currentPage.component} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default Page;