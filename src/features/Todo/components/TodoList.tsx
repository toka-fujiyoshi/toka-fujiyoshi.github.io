import TableContainer from '@mui/material/TableContainer'
import { TodoData } from './TodoContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { TODO_TYPE } from '../constants/constants'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

/** TODOリストコンポーネントのprops */
type Props = {
    todos: TodoData[]
}

/**
 * TODOリスト
 * @param param0
 * @returns
 */
export const TodoList = ({ todos }: Props) => {
    return (
        <Box>
            <List sx={{ display: 'flex', flexDirection: 'row' }}>
                <ListItem disablePadding sx={{ width: 'fit-content' }}>
                    <ListItemButton href="/todo/create">新規作成</ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ width: 'fit-content' }}>
                    <ListItemButton href="/todo/delete">削除</ListItemButton>
                </ListItem>
            </List>
            <TableContainer sx={{ maxHeight: '75dvh' }}>
                <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 70 }}>
                                <Checkbox />
                            </TableCell>
                            <TableCell sx={{ width: 70 }} align="center">
                                重要
                            </TableCell>
                            <TableCell sx={{ width: 150 }}>カテゴリ</TableCell>
                            <TableCell sx={{ width: 200 }}>タイトル</TableCell>
                            <TableCell sx={{ width: 200 }}>期間</TableCell>
                            <TableCell sx={{ width: { xs: 300, lg: 'auto' } }}>本文</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell align="center">
                                    {data.important && <PriorityHighIcon color="error" />}
                                </TableCell>
                                <TableCell>{TODO_TYPE[data.category]}</TableCell>
                                <TableCell>
                                    <Link href={`/todo/edit/${data.id}`}>{data.title}</Link>
                                </TableCell>
                                <TableCell>
                                    {data.fromDate}～{data.toDate}
                                </TableCell>
                                <TableCell>
                                    {data.body.split(/\r?\n/).map((line, index) => (
                                        <span key={`line-${index}`}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
