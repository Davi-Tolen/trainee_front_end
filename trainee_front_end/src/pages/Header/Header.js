import React,{useState} from "react";
import "./Header.css";
import {AppBar, Avatar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material"
import {useHistory} from "react-router-dom"
import {MdHome} from "react-icons/md"
import {BsPersonFill, BsFillChatFill, BsFillCalendarEventFill} from "react-icons/bs"
import {BiLogOut} from "react-icons/bi"
import {FiMenu} from "react-icons/fi"
import { IconContext } from "react-icons/lib";


function Header(props){
    const history = useHistory()
    const [currentPage, setCurrentPage] = useState("/ap/paginainicial")
    const [open, setOpen] = useState(false)

    function handleClick(pathName){
        history.push(pathName)
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }
    
    const pages = [
        {
            pathName: "/ap/paginainicial",
            icon: <MdHome />,
            text: "Página Inicial",
            iconSize: "1.5em"
        },
        {
            pathName: "/ap/medicos",
            icon: <BsPersonFill/>,
            text: "Médicos",
            iconSize: "1.5em"
        },
        {
            pathName: "/ap/atendimento",
            icon: <BsFillChatFill/>,
            text: "Atendimento",
            iconSize: "1.5em"
        },
        {
            pathName: "/ap/agendamento",
            icon: <BsFillCalendarEventFill/>,
            text: "Agendamento",
            iconSize: "1.5em"
        },
        {
            pathName: "/ap/perfil",
            icon: <BsPersonFill/>,
            text: "Perfil",
            iconSize: "1.5em"
        },
        {
            pathName: "/menu/home",
            icon: <BiLogOut/>,
            text: "Sair",
            iconSize: "1.5em"
        },

    ];
    

    return (
        <>
        <AppBar position="static">
            <Toolbar className="toolbar">
                <IconButton
                edge="start"
                aria-label="menu"
                onClick={()=>handleDrawer(!open)}
                >
                <FiMenu/>
                </IconButton>
                <div className="userContainer">
                    <p className="userName">Davi Tolentino</p>
                    <Avatar alt="Davi" src="/images/Davi.jpeg"></Avatar> 
                </div>
            </Toolbar>
        </AppBar>
        {props.children}
        <Drawer open={open} onClose={()=> handleDrawer(false)}>
            <List className="list">
                {pages.map((listItem) => { 
                    return(
                        <ListItem
                        button
                        selected={currentPage===listItem.pathName}
                        onClick={()=> {handleClick(listItem.pathName)}}
                        >
                        <IconContext.Provider value={{color:"#343434", size:listItem.iconSize}}>
                            {listItem.icon}
                        </IconContext.Provider>
                        <ListItemText className="listitemtext">
                            <Typography>{listItem.text}</Typography>
                        </ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
        </>
    )
}

export default Header;