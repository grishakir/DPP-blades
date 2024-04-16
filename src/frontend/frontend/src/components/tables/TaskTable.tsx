import {ReactElement} from "react";
import {Paper, styled, Table, TableCell, tableCellClasses, TableContainer} from "@mui/material";


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgba(0, 0, 0, 0.028)",
        color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "rgba(0, 0, 0, 0.024)",
        color: theme.palette.common.black
    }
}));

const TaskTable = ({children}: { children: ReactElement | ReactElement[] }) => {
    return (<TableContainer component={Paper} >
        <Table size={"medium"}>{children}</Table></TableContainer>);
}

export default TaskTable;