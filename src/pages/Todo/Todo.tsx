import { TodoContainer } from '@/features/Todo/components/TodoContainer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
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
                <Container maxWidth={false}>
                    <Typography>Todoアプリページです</Typography>
                    <Container>
                        <TodoContainer />
                    </Container>
                </Container>
            </Box>
        </>
    )
}
