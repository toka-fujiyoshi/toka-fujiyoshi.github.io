import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LinkProps } from '@mui/material/Link'
import CssBaseline from '@mui/material/CssBaseline'
import { LinkBehavior } from './components/elements/LinkBehavior/LinkBehavior'
import { Root } from './pages/Root/Root'
import { Error404 } from './pages/Error/Error404'
import { Top } from './pages/Top/Top'
import { Todo } from './pages/Todo/Todo'

// MUIのテーマ作成
const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                // react-routerと統合
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                // react-routerと統合
                LinkComponent: LinkBehavior,
            },
        },
    },
})

// tanstack-queryのクエリクライアント初期化
const queryClient = new QueryClient()
// TODO: loaderはクエリクライアントを受け取って非同期関数を返す形式で作る
// https://tanstack.com/query/latest/docs/framework/react/examples/react-router

// ルーティング
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Top />,
            },
            {
                path: 'todo',
                element: <Todo />,
            },
            {
                path: '*',
                element: <Error404 />,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools buttonPosition="bottom-right" />
                </QueryClientProvider>
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>,
)
