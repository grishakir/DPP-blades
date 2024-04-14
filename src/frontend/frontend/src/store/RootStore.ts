import {types, unprotect} from "mobx-state-tree";
import {initialTasksStoreState, TasksStore} from "./TasksStore";

const rootStore = types
    .model({
        tasksStore: TasksStore,
    })
    .create({
        tasksStore: TasksStore.create(initialTasksStoreState),
    });

unprotect(rootStore);

export default rootStore;