import {useRouter} from "next/router";
import React from "react";
import {
    Stack,
    TableBody,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useStore} from "@/store/StoreContext";
import {MathComponent} from "mathjax-react";
import Image from "next/image";

import lopatka1 from "@/assets/kirill/1/1-1.svg"
import lopatka2 from "@/assets/kirill/2/2-1.svg"
import lopatka3 from "@/assets/kirill/3/3-1.svg"
import lopatka4 from "@/assets/kirill/4/4-1.svg"
import lopatka5 from "@/assets/kirill/5/5-1.svg"
import lopatka6 from "@/assets/kirill/6/6-1.svg"
import lopatka7 from "@/assets/kirill/7/7-1.svg"


import {first_table, second_table_1, second_table_2, third_table} from "@/config/resultTablesConfig";
import TaskTable, {StyledTableCell} from "@/components/tables/TaskTable";


const Task = () => {
    const router = useRouter()
    const {id} = router.query

    const store = useStore()

    const task = store.tasksStore.tasks.find((item) => {
        return item.id === id
    })

    if (!task) {
        return "Not found"
    }

    return (<Stack sx={{height: "100%"}} spacing={10}>


            <Stack spacing={3}>
                <Typography textAlign={"center"} fontSize={"1.3rem"}>Входные параметры</Typography>
                <TaskTable>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell><Typography textAlign={"center"}>Параметр</Typography></StyledTableCell>
                            <StyledTableCell><Typography textAlign={"center"}>Значение</Typography></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>{task.id}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>Статус</StyledTableCell>
                            <StyledTableCell>{task.status}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>Имя</StyledTableCell>
                            <StyledTableCell>{task.name}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>

                                <Stack direction={"row"} spacing={2}>
                                    <Typography>Высота полета</Typography>
                                    <MathComponent tex={"H_{П}"} display={false}/>
                                </Stack>

                            </StyledTableCell>
                            <StyledTableCell>
                                {task.height}
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography> Скорость полета</Typography>
                                    <MathComponent tex={"M_{П}"} display={false}/>
                                </Stack>

                            </StyledTableCell>


                            <StyledTableCell>{task.speed}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>

                                <Stack direction={"row"} spacing={2}><Typography>Суммарный расход воздуха</Typography>
                                    <MathComponent tex={"G_{_B\\large\\Sigma}"} display={false}/>

                                </Stack>

                            </StyledTableCell>
                            <StyledTableCell>{task.airConsumption}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>

                                <Stack direction={"row"} spacing={2}><Typography>Степень двухконтурности</Typography>
                                    <MathComponent tex={"m"} display={false}/>

                                </Stack>

                            </StyledTableCell>
                            <StyledTableCell>{task.doubleCircuitDegree}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>
                                <Stack direction={"row"} spacing={2}>
                                    <Typography>Степень повышения давления в компрессоре</Typography>

                                    <MathComponent tex={"\\Large\\pi_{k\\large\\Sigma}"}
                                                   display={false}/>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>{task.addPressureCompressor}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>

                                <Stack direction={"row"} spacing={2}><Typography>Степень повышения давления в
                                    вентиляторе</Typography><MathComponent tex={"\\Large\\pi_{\\small B\\large\\Sigma}"}
                                                                           display={false}/></Stack>


                            </StyledTableCell>
                            <StyledTableCell>{task.addPressureFan}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>

                                <Stack direction={"row"} spacing={2}><Typography>Температура газа на входе в
                                    турбину</Typography><MathComponent tex={"T^*_Г"}
                                                                       display={false}/></Stack>


                            </StyledTableCell>
                            <StyledTableCell>{task.temperature}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>Тип вычислений</StyledTableCell>
                            <StyledTableCell>{task.calcType}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>Количество ступеней в компрессоре</StyledTableCell>
                            <StyledTableCell>{task.stepsCount}</StyledTableCell>
                        </TableRow>


                    </TableBody>
                </TaskTable>
            </Stack>
            <Stack spacing={3}>
                <Typography textAlign={"center"} fontSize={"1.3rem"}>Предварительный расчёт параметров турбины и
                    компрессора
                    газогнератора</Typography>
                <TaskTable>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell><Typography textAlign={"center"}>Параметр</Typography></StyledTableCell>
                            <StyledTableCell><Typography textAlign={"center"}>Значение</Typography></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(first_table).map(([key, value]) => {
                            return (
                                <TableRow>
                                    <StyledTableCell>
                                        <MathComponent tex={key} display={false}/>
                                    </StyledTableCell>
                                    {value.map((item) => {
                                        return <StyledTableCell><Typography
                                            textAlign={"center"}>{item}</Typography></StyledTableCell>
                                    })}

                                </TableRow>

                            )
                        })}

                    </TableBody>
                </TaskTable>
            </Stack>

            <Stack spacing={3}>
                <Typography textAlign={"center"} fontSize={"1.3rem"}>Детальный расчёт компрессора газогнератора
                    ч.1</Typography>
                <TaskTable>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell rowSpan={2}><Typography
                                textAlign={"center"}>Параметры</Typography></StyledTableCell>
                            <StyledTableCell colSpan={9}>
                                <Typography textAlign={"center"}>Ступени</Typography>
                            </StyledTableCell>
                        </TableRow>
                        <TableRow>

                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                                return <StyledTableCell><Typography
                                    textAlign={"center"}>{item}</Typography></StyledTableCell>
                            })}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {Object.entries(second_table_1).map(([key, value]) => {
                            return (
                                <TableRow>
                                    <StyledTableCell>
                                        <MathComponent tex={key} display={false}/>
                                    </StyledTableCell>
                                    {value.map((item) => {
                                        return <StyledTableCell><Typography
                                            textAlign={"center"}>{item}</Typography></StyledTableCell>
                                    })}

                                </TableRow>

                            )
                        })}

                    </TableBody>
                </TaskTable>
            </Stack>

            <Stack spacing={3}>
                <Typography textAlign={"center"} fontSize={"1.3rem"}>Детальный расчёт компрессора газогнератора
                    ч.2</Typography>
                <TaskTable>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell rowSpan={2}><Typography
                                textAlign={"center"}>Параметры</Typography></StyledTableCell>
                            <StyledTableCell colSpan={9}>
                                <Typography textAlign={"center"}>Ступени</Typography>
                            </StyledTableCell>
                        </TableRow>
                        <TableRow>

                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                                return <StyledTableCell><Typography
                                    textAlign={"center"}>{item}</Typography></StyledTableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(second_table_2).map(([key, value]) => {
                            return (
                                <TableRow>
                                    <StyledTableCell>
                                        <MathComponent tex={key} display={false}/>
                                    </StyledTableCell>
                                    {value.map((item) => {
                                        return <StyledTableCell><Typography
                                            textAlign={"center"}>{item}</Typography></StyledTableCell>
                                    })}

                                </TableRow>

                            )
                        })}

                    </TableBody>
                </TaskTable>
            </Stack>

            <Stack spacing={3}>
                <Typography textAlign={"center"} fontSize={"1.3rem"}>Детальный расчет турбины
                    газогенератора</Typography>
                <TaskTable>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell rowSpan={2}><Typography
                                textAlign={"center"}>Параметры</Typography></StyledTableCell>
                            <StyledTableCell>
                                <Typography textAlign={"center"}>Ступени</Typography>
                            </StyledTableCell>
                        </TableRow>
                        <TableRow>

                            {[1].map((item) => {
                                return <StyledTableCell><Typography
                                    textAlign={"center"}>{item}</Typography></StyledTableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(third_table).map(([key, value]) => {
                            return (
                                <TableRow>
                                    <StyledTableCell>
                                        <MathComponent tex={key} display={false}/>
                                    </StyledTableCell>
                                    {value.map((item) => {
                                        return <StyledTableCell><Typography
                                            textAlign={"center"}>{item}</Typography></StyledTableCell>
                                    })}

                                </TableRow>

                            )
                        })}

                    </TableBody>
                </TaskTable>
            </Stack>

            <Stack direction={"column"} sx={{width: "100%", alignItems: "center"}}>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka1}
                        alt=""
                    />
                </Stack>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka2}
                        alt=""
                    />
                </Stack>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka3}
                        alt=""
                    />
                </Stack>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka4}
                        alt=""
                    />
                </Stack>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka5}
                        alt=""
                    />
                </Stack>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka6}
                        alt=""
                    />
                </Stack>
                <Stack direction={"row"}>

                    <Image
                        priority
                        src={lopatka7}
                        alt=""
                    />
                </Stack>

            </Stack>

        </Stack>
    )
}

export default Task