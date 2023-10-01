import React,{useState} from 'react'
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
  } from "@mui/icons-material";
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import {setMode} from "state"
import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
  } from "@mui/material";



const Navbar = ({user,isSidebarOpen,setIsSidebarOpen}) => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const[anchorEl, setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)
    const handleClick =(e) => setAnchorEl(e.target.value)
    const handleClose=()=>setAnchorEl(null)

  return (
    <AppBar
        sx={{
                position:"static",
                background: "none",
                boxShadow:"none"
            }}
    >
        <Toolbar sx={{justifyContent:"space-between"}}>
            <FlexBetween>
                <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon sx={{fontSize:"18px"}} />
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius = "9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                >
                    <InputBase sx={{height:"1px"}}  placeholder="Sarch..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            <FlexBetween gap="1.5rem">
                <IconButton onClick={()=>dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined sx={{fontSize:"18px"}} />):(<LightModeOutlined sx={{fontSize:"18px"}} />
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{fontSize:"18px"}} />
                </IconButton>
                <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src="https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?s=612x612&w=0&k=20&c=Guj8f7rGyX4tsSszs3qR_NCYDOOvypB6T3eSPEB9GOQ="
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
            </FlexBetween>
        </Toolbar>

    </AppBar>
  )
}

export default Navbar