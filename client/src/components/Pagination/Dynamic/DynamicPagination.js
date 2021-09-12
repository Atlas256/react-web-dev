import styless from './DynamicPagination.module.css'

import axios from 'axios';

import React, { useEffect, useState } from 'react';


const DynamicPagination = () => {

    const [isAdded, setIsAdded] = useState(false);
    const [pageCounter, setPageCounter] = useState(40);
    const [photos, setPhotos] = useState([]);

    const addPhotos = (count) => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${count}&_page=${pageCounter}`).then(
            res => {
                if (res.data.length > 0) {
                    setPhotos([...photos, ...res.data]);
                    setPageCounter(pageCounter + 1);
                    setIsAdded(false);
                    //?console.log(`ADDED, page: ${pageCounter}, items: ${count * pageCounter}`);
                }
            });
    }

    useEffect(() => addPhotos(100), []);

    window.onscroll = () => {
        let scrollTop = parseInt(window.pageYOffset);
        let scrollBottom = document.body.scrollHeight - document.body.clientHeight - parseInt(window.pageYOffset);
        if (scrollTop !== 0)
            if (scrollBottom <= 1000) {
                if (isAdded === false) {
                    addPhotos(100);
                    setIsAdded(true);
                }
            }
    }



    return (
        <>
            <h2 style={{ textAlign: "center" }}>Динамическая пагинация</h2>
            <div className={styless.content}>
                {
                    photos.length > 0 ?
                        photos.map(item =>
                            <div key={item.id} className={styless.item}>
                                <img key={0 - item.id} src={item.url} alt="" />
                                <div className={styless.text}>{item.title}</div>
                            </div>
                        )
                        :
                        null
                }
            </div>
        </>
    )
}

export default DynamicPagination;