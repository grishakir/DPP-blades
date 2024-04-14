import {Button, Stack, Typography} from "@mui/material";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import {Observer, observer} from "mobx-react";
import {useStore} from "@/store/StoreContext";
import Link from "@mui/material/Link";
import {useRouter} from "next/router";

function Page() {

    const store = useStore();

    const router = useRouter()

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
            sortable: true
        },
        {
            field: "name",
            headerName: "Имя задачи",
            sortable: false,
            flex: 1
        },
        {
            field: "status",
            headerName: "Состояние",
            flex: 1
        }
    ]

    return (
        <Stack sx={{height: "100%"}} spacing={2}>
            <Stack direction={"row"}>
                <Button onClick={async () => {
                    await router.push("/create-task")
                }}>
                    <Stack justifyContent={"center"} sx={{paddingRight: "5px"}}>
                        <AddIcon/>
                    </Stack>
                    {"Создать задачу"}
                </Button>
            </Stack>

            <DataGrid columns={columns} rows={store.tasksStore.tasks} pageSizeOptions={[10]}
                      initialState={{
                          pagination: {
                              paginationModel: {page: 0, pageSize: 10},
                          },
                      }} onRowClick={async (params) => {
                await router.push(`/tasks/${params.id}`)
            }}/>
        </Stack>
    );
}

export default observer(Page);