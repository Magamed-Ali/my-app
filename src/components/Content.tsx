import React from 'react';
import {PagesType} from "../data/dataState";

type PropsType = {
    page: PagesType
}

const Content = (props: PropsType) => {
    return (
        <div>
            <h3>{props.page.heading}</h3>
            <div>{props.page.about}</div>
        </div>
    );
};

export default Content;