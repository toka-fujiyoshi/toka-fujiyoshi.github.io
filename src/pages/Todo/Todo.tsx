import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Helmet } from 'react-helmet-async'

/**
 * Todoアプリページ
 * @returns
 */
export const Todo = () => {
    return (
        <>
            <Helmet>
                <title>Todoアプリ</title>
            </Helmet>
            <Box>
                <Typography>Todoアプリページです</Typography>
            </Box>
        </>
    )
}
