import {TaskType} from "@/types/TaskType";
import {types} from "mobx-state-tree";


const Task = types.model("Task", {
    id: types.string,
    status: types.string,
    name: types.string,
    height: types.string,
    speed: types.string,
    airConsumption: types.string,
    doubleCircuitDegree: types.string,
    addPressureCompressor: types.string,
    addPressureFan: types.string,
    temperature: types.string,
    stepsCount: types.string,
    calcType: types.string
});

export const TasksStore = types
    .model("TasksStore")
    .props({
        tasks: types.array(Task),
    }).actions((self: any) => ({
        setTasks: (tasks: TaskType[]) => {
            self.tasks = tasks
        },

        addTask: (task: TaskType) => {
            self.tasks.push(Task.create(task))
        },

        completeTask: (taskId: string) => {

            let res = self.tasks.find((item: any) => item.id === taskId)
            if (res) {
                res.status = "finished"
            }
        }

    }))

export default TasksStore;


export const initialTasksStoreState = {
    tasks: [],
};