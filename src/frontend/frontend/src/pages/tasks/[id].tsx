import {useRouter} from "next/router";
import React from "react";
import {Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {useStore} from "@/store/StoreContext";


const Task = () => {
    const router = useRouter()
    const {id} = router.query

    const store = useStore()

    const task = store.tasksStore.tasks.find((item) => {
        return item.id === id
    })

    if (!task) {
        return "Not find"
    }

    return (<Stack sx={{height: "100%"}}>

        <TableContainer component={Paper}>
            
            <Table>
                <TableBody>

                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>{task.id}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Статус</TableCell>
                        <TableCell>{task.status}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Имя</TableCell>
                        <TableCell>{task.name}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Высота полета</TableCell>
                        <TableCell>{task.height}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Скорость полета</TableCell>
                        <TableCell>{task.speed}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Степень двухконтурности</TableCell>
                        <TableCell>{task.doubleCircuitDegree}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Степень повышения давления в компрессоре</TableCell>
                        <TableCell>{task.addPressureCompressor}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Степень повышения давления в вентиляторе</TableCell>
                        <TableCell>{task.addPressureFan}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Температура газа на входе в турбину</TableCell>
                        <TableCell>{task.temperature}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Тип вычислений</TableCell>
                        <TableCell>{task.calcType}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Количество ступеней в компрессоре</TableCell>
                        <TableCell>{task.stepsCount}</TableCell>
                    </TableRow>



                </TableBody>
            </Table>

        </TableContainer>
    </Stack>)
}

export default Task