import React, { useEffect, useState } from "react";
import { tasks } from "../apis/testApi";

const TaskScreen = () => {
    return tasks.map((task, index) => (
        <div key={index}>
            <h1>
                {task.taskNumber} {task.taskName}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    ));
};
export default TaskScreen;
______________________________________________________________

import React from "react";
import { tasks } from "../apis/testApi";

const TaskScreen = () => {

    useEffect(() => {
        console.log("TaskScreen Mounted");
    });

    return tasks.map((task, index) => (
        <div key={index}>
            <h1>
                {task.taskNumber} {task.taskName}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    ));
};
export default TaskScreen;
_________________________________________________________________________________________

import React from "react";
import { tasks } from "../apis/testApi";

const TaskScreen = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("TaskScreen Mounted");
    });

    return tasks.map((task, index) => (
        <div key={index}>
            <h1>
                {task.taskNumber} {task.taskName}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    ));
};
export default TaskScreen;