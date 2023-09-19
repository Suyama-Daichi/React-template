"use client";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

type Menu = {
  onClick: () => void;
  title: string;
};

type Props = {
  menus: Menu[];
};
export const MenuButton = ({ menus }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickMenuItem = (onClick: Menu["onClick"]) => {
    onClick();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {menus.map((menu) => (
          <MenuItem
            key={menu.title}
            onClick={() => onClickMenuItem(menu.onClick)}
          >
            {menu.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
