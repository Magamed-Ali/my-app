import React from 'react';
import {Navigate, NavLink, Route, Routes, useParams} from 'react-router-dom';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";


export const Site = () => {
    let parms = useParams()


    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/0'}>Page1</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/1'}>Page2</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/2'}>Page3</NavLink></div>
                  <div> <a href="/page/0">Page3 without SPA</a></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/2'}/>}/>

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
                        {/*<Route path={'/page2'} element={<PageTwo/>}/>*/}
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
};

