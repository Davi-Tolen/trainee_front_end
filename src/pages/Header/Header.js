import React, { useState } from "react";
import "./Header.css";
import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { MdHome } from "react-icons/md";
import {
  BsPersonFill,
  BsFillChatFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { logout } from "../../services/auth";

function Header(props) {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/ap/paginainicial");
  const [open, setOpen] = useState(false);

  function handleDrawer(isOpen) {
    setOpen(isOpen);
  }
  function handleLogout() {
    logout();
    return history.push("/menu/home");
  }

  function handleTudo(pathName, on){
    setOpen(on)
    history.push(pathName)
  }

  const pages = [
    {
      handle: () => handleTudo("/ap/paginainicial", false),
      pathName: "/ap/paginainicial",
      icon: <MdHome />,
      text: "Página Inicial",
      iconSize: "1.5em",
    },
    {
      handle: () => handleTudo("/ap/medicos", false),
      pathName: "/ap/medicos",
      icon: <BsPersonFill />,
      text: "Médicos",
      iconSize: "1.5em",
    },
    {
      handle: () => handleTudo("/ap/atendimento", false),
      pathName: "/ap/atendimento",
      icon: <BsFillChatFill />,
      text: "Atendimento",
      iconSize: "1.5em",
    },
    {
      handle: () => handleTudo("/ap/agendamento", false),
      pathName: "/ap/agendamento",
      icon: <BsFillCalendarEventFill />,
      text: "Agendamento",
      iconSize: "1.5em",
    },
    {
      handle: () => handleTudo("/ap/perfil", false),
      pathName: "/ap/perfil",
      icon: <BsPersonFill />,
      text: "Perfil",
      iconSize: "1.5em",
    },
    {
      handle: handleLogout,
      icon: <BiLogOut />,
      text: "Sair",
      iconSize: "1.5em",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => handleDrawer(!open)}
          >
            <FiMenu />
          </IconButton>
          <div className="userContainer">
            <p className="userName">Davi Tolentino</p>
            <Avatar alt="Davi" src="/images/Davi.jpeg"></Avatar>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
      <Drawer open={open} onClose={() => handleDrawer(false)}>
        <List className="list">
          {pages.map((listItem) => {
            return (
              <ListItem
                button
                selected={currentPage === listItem.pathName}
                onClick={() => listItem.handle()}
              >
                <IconContext.Provider
                  value={{ color: "#343434", size: listItem.iconSize }}
                >
                  {listItem.icon}
                </IconContext.Provider>
                <ListItemText className="listitemtext">
                  <Typography>{listItem.text}</Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
