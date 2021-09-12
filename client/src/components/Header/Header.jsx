import "./Header.css"

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React from "react";


const Header = () => {

    const components = useSelector(state => state.reducerComponents.components);
    const currentPage = useSelector(state => state.reducerComponents.currentPage);
    const dispatch = useDispatch();


    const onClickLink = (e, page) => {
        e.preventDefault();
        e.stopPropagation();

        if (typeof page.component === 'function') {
            dispatch({ type: "SET_CURRENT_PAGE", payload: page });

            window.localStorage.setItem('currentPage', JSON.stringify({
                ...page, 'component': page.component.name
            }));
        }

        page.isOpen = !page.isOpen;
        dispatch({ type: "UPDATE_COMPONENTS" })
    }


    const render = (pages, charOpen, charClose) => {

        return (
            pages.map(page =>
                <div
                    key={page.name}
                    onClick={e => onClickLink(e, page)}
                    style={{ display: "flex", flexDirection: "row" }}>
                    <div className="char">
                        {page.pages ?
                            page.isOpen ? charOpen : charClose
                            :
                            charClose
                        }
                    </div>

                    <Link
                        to=
                        {(typeof page.component === 'function') ?
                            "/" + page.name.toLowerCase().split(' ').join('_')
                            :
                            currentPage.name.toLowerCase().split(' ').join('_')
                        }
                        style={{ width: "100%" }}
                        className="link">
                        {page.name}
                        <div>
                            <div style={{
                                width: "114%",
                                marginLeft: "-12px",
                                marginTop: "4px",
                                marginBottom: "2px",
                                borderBottom: "2px solid #0004"
                            }}></div>
                            <div>
                                {(page.pages && page.isOpen) ?
                                    render(page.pages, charOpen, charClose)
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            )
        )
    }




    return (
        <header className="header">
            <nav className="nav">
                <div style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
                    {
                        components.length > 0 ? render(components, '▸', '▪') : null
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;


/*
            <nav className="nav">
                {
                    pages.length > 0 ?
                        pages.map((page, N) =>
                            N === 0 ?
                                <Link
                                    key={page.name}
                                    onClick={() => setPageID(N)}
                                    to="/"
                                    className="link"
                                >{page.name}</Link>
                                :
                                <Link
                                    key={page.name}
                                    onClick={() => setPageID(N)}
                                    to={"/" + page.name.toLowerCase()}
                                    className="link"
                                >{page.name}</Link>
                        )
                        :
                        null
                }
            </nav>
*/




//TODO----Сделай обьект, куда будешь ложить все currentPage, если их там не будет
//TODO----И доставать по ключу URL