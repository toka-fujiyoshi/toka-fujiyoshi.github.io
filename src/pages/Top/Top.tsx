import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Helmet } from 'react-helmet-async'

/**
 * トップページ
 * @returns
 */
export const Top = () => {
    return (
        <>
            <Helmet>
                <title>トップページ</title>
            </Helmet>
            <Box>
                <Typography>トップページです</Typography>
                <Link href="/todo">Todoアプリ</Link>
            </Box>
        </>
    )
}
