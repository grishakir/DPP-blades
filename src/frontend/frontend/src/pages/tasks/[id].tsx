import {useRouter} from "next/router";
import React from "react";
import {Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {useStore} from "@/store/StoreContext";
import {MathComponent} from "mathjax-react";
import Image from "next/image";

import lopatka1 from "@/assets/kirill/1 лопатка, чертеж Кирилла.svg"
import lopatka2 from "@/assets/kirill/2 лопатка, чертеж Кирилла-1.svg"
import lopatka3 from "@/assets/kirill/3 лопатка, чертеж Кирилла-1.svg"
import lopatka4 from "@/assets/kirill/4 лопатка, чертеж Кирилла-1.svg"
import lopatka5 from "@/assets/kirill/5 лопатка, чертеж Кирилла-1.svg"
import lopatka6 from "@/assets/kirill/6 лопатка, чертеж Кирилла-1.svg"
import lopatka7 from "@/assets/kirill/7 лопатка, чертеж Кирилла-1.svg"



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
                        <TableCell>

                            <Stack direction={"row"} spacing={2}>
                                <Typography>Высота полета</Typography>
                                <MathComponent tex={"H_{П}"} display={false}/>
                            </Stack>

                        </TableCell>
                        <TableCell>
                            {task.height}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Stack direction={"row"} spacing={2}>
                                <Typography> Скорость полета</Typography>
                                <MathComponent tex={"M_{П}"} display={false}/>
                            </Stack>

                        </TableCell>


                        <TableCell>{task.speed}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>

                            <Stack direction={"row"} spacing={2}><Typography>Суммарный расход воздуха</Typography>
                                <MathComponent tex={"G_{_B\\large\\Sigma}"} display={false}/>

                            </Stack>

                        </TableCell>
                        <TableCell>{task.airConsumption}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>

                            <Stack direction={"row"} spacing={2}><Typography>Степень двухконтурности</Typography>
                                <MathComponent tex={"m"} display={false}/>

                            </Stack>

                        </TableCell>
                        <TableCell>{task.doubleCircuitDegree}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Stack direction={"row"} spacing={2}>
                                <Typography>Степень повышения давления в компрессоре</Typography>

                                <MathComponent tex={"\\Large\\pi_{k\\large\\Sigma}"}
                                               display={false}/>
                            </Stack>
                        </TableCell>
                        <TableCell>{task.addPressureCompressor}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>

                            <Stack direction={"row"} spacing={2}><Typography>Степень повышения давления в
                                вентиляторе</Typography><MathComponent tex={"\\Large\\pi_{\\small B\\large\\Sigma}"}
                                                                       display={false}/></Stack>


                        </TableCell>
                        <TableCell>{task.addPressureFan}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>

                            <Stack direction={"row"} spacing={2}><Typography>Температура газа на входе в
                                турбину</Typography><MathComponent tex={"T^*_Г"}
                                                                   display={false}/></Stack>


                        </TableCell>
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
        <Stack direction={"row"}>
            <Image
                priority
                src={lopatka1}
                alt=""
            />
            <Image
                priority
                src={lopatka2}
                alt=""
            />
            <Image
                priority
                src={lopatka3}
                alt=""
            />


            <Image
                priority
                src={lopatka4}
                alt=""
            />
            <Image
                priority
                src={lopatka5}
                alt=""
            />
            <Image
                priority
                src={lopatka6}
                alt=""
            />
            <Image
                priority
                src={lopatka7}
                alt=""
            />

        </Stack>

    </Stack>)
}

export default Task