import React from "react";
import {taskType} from "../../../../App";


type propsType = taskType

export const Task = (props: propsType) => {
    return (
        <li>
            <input type="checkbox" checked={props.isDone} id=""/><span>{props.title}</span>
        </li>
        )
}