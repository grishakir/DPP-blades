import {Button, Grid, Menu, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {isDigit} from "@/tools/numberTools";
import {observer} from "mobx-react";
import {v4 as uuidv4} from 'uuid';
import {TaskType} from "@/types/TaskType";
import {useRouter} from "next/router";
import {useStore} from "@/store/StoreContext";

const CreateTask = () => {


    const store = useStore();

    const router = useRouter()

    const [taskName, setTaskName] = useState<undefined | string>(undefined)
    const [height, setHeight] = useState<undefined | string>(undefined)
    const [speed, setSpeed] = useState<undefined | string>(undefined)

    const [airConsumption, setAirConsumption] = useState<undefined | string>(undefined)

    const [doubleCircuitDegree, setDoubleCircuitDegree] = useState<undefined | string>(undefined)

    const [addPressureCompressor, setAddPressureCompressor] = useState<undefined | string>(undefined)

    const [addPressureFan, setAddPressureFan] = useState<undefined | string>(undefined)

    const [temperature, setTemperature] = useState<undefined | string>(undefined)

    const [stepsCount, setStepsCount] = useState<undefined | string>(undefined)


    const [calcType, setCalcType] = useState<string>("Газогенератор")

    const isDisabled = !Boolean(taskName != null && temperature != null && height != null && speed != null &&
        addPressureFan != null && addPressureCompressor != null && stepsCount != null &&
        airConsumption != null && doubleCircuitDegree != null && isDigit(temperature) && isDigit(height) && isDigit(speed) && isDigit(airConsumption)
        && isDigit(doubleCircuitDegree) && isDigit(addPressureCompressor) && isDigit(addPressureFan) && isDigit(stepsCount)
    )

    return (<Stack sx={{height: "100%"}}>
        <Grid container={true} spacing={2} sx={{width: "50%"}}>
            <Grid item={true} xs={6}>
                <Typography>
                    {"Имя задачи"}
                </Typography>
            </Grid>

            <Grid item={true} xs={6}>
                <TextField value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
            </Grid>

            <Grid item={true} xs={6}>
                <Typography>
                    {"Тип вычислений"}
                </Typography>

            </Grid>
            <Grid item={true} xs={6}>
                <Select value={calcType} onChange={(e) => {
                    setCalcType(e.target.value)
                }}>
                    <MenuItem value={"Турбовентилятор"}>{"Турбовентилятор"}</MenuItem>
                    <MenuItem value={"Газогенератор"}>{"Газогенератор"}</MenuItem>
                </Select>

            </Grid>

            <Grid item={true} xs={6}>
                <Typography>
                    {"Высота полета"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={height} onChange={(e) => setHeight(String(e.target.value))} error={!isDigit(height)}/>
            </Grid>


            <Grid item={true} xs={6}>
                <Typography>
                    {"Скорость полета"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={speed} onChange={e => setSpeed(String(e.target.value))} error={!isDigit(speed)}/>
            </Grid>


            <Grid item={true} xs={6}>
                <Typography>
                    {"Суммарный расход воздуха"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={airConsumption} onChange={e => setAirConsumption(String(e.target.value))}
                           error={!isDigit(airConsumption)}/>
            </Grid>

            <Grid item={true} xs={6}>
                <Typography>
                    {"Степень двухконтурности"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={doubleCircuitDegree} onChange={e => setDoubleCircuitDegree(String(e.target.value))}
                           error={!isDigit(doubleCircuitDegree)}/>
            </Grid>

            <Grid item={true} xs={6}>
                <Typography>
                    {"Степень повышения давления в компрессоре"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={addPressureCompressor}
                           onChange={e => setAddPressureCompressor(String(e.target.value))}
                           error={!isDigit(addPressureCompressor)}/>
            </Grid>

            <Grid item={true} xs={6}>
                <Typography>
                    {"Степень повышения давления в вентиляторе"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={addPressureFan} onChange={e => setAddPressureFan(String(e.target.value))}
                           error={!isDigit(addPressureFan)}/>
            </Grid>

            <Grid item={true} xs={6}>

                <Typography>
                    {"Температура газа на входе в турбину"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={temperature} onChange={e => setTemperature(String(e.target.value))}
                           error={!isDigit(temperature)}/>
            </Grid>
            <Grid item={true} xs={6}>
                <Typography>
                    {"Количество ступеней в компрессоре"}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField value={stepsCount} onChange={e => setStepsCount(String(e.target.value))}
                           error={!isDigit(stepsCount)}/>
            </Grid>

            <Grid item={true} xs={6}></Grid>
            <Grid item={true} xs={6}>
                <Button
                    disabled={isDisabled}
                    variant={"outlined"} sx={{width: "215px", height: "50px"}}


                    onClick={async () => {

                        const uuid = uuidv4()
                        const new_task = {
                            addPressureCompressor: addPressureCompressor || "",
                            addPressureFan: addPressureFan || "",
                            airConsumption: airConsumption || "",
                            doubleCircuitDegree: doubleCircuitDegree || "",
                            height: height || "",
                            id: uuid,
                            name: taskName || "",
                            speed: speed || "",
                            status: "pending",
                            stepsCount: stepsCount || "",
                            temperature: temperature || "",
                            calcType: calcType
                        }

                        store.tasksStore.addTask(new_task)

                        await router.push("/")
                        setTimeout(async () => {


                            store.tasksStore.completeTask(uuid)

                        }, 1000)

                    }}
                >Создать</Button>
            </Grid>

        </Grid>

    </Stack>)
}

export default observer(CreateTask)