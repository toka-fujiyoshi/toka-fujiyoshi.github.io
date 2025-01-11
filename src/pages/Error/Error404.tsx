import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Helmet } from 'react-helmet-async'

/**
 * 404エラーページ
 * @returns
 */
export const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>エラー | 404</title>
            </Helmet>
            <Box>
                <Typography>404エラーページ</Typography>
            </Box>
        </>
    )
}
