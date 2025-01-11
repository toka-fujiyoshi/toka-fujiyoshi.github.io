import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Outlet } from 'react-router'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Button from '@mui/material/Button'

/**
 * 全体のレイアウト
 * @returns
 */
export const Root = () => {
    // メニューオープン状態
    const [open, setOpen] = useState(false)

    /** メニューオープン処理 */
    const handleOpen = () => {
        setOpen(true)
    }

    /** メニュークローズ処理 */
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button href="/" variant="text" color="inherit">
                            <Typography variant="h6">Reactアプリ</Typography>
                        </Button>
                    </Box>
                    <IconButton onClick={handleOpen} color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={handleClose} anchor="right" PaperProps={{ sx: { width: 300 } }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        メニュー
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List disablePadding>
                    <ListItem disablePadding>
                        <ListItemButton href="/" onClick={handleClose}>
                            <ListItemText>トップ</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton href="/todo" onClick={handleClose}>
                            <ListItemText>TODOアプリ</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}
