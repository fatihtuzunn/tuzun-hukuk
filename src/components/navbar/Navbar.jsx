"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Button, MenuItem, Menu, Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { blue } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Hakkımızda",
    url: "/hakkimizda",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Araçlar",
    url: "/araclar",
  },
  {
    id: 5,
    title: "portfoli",
    url: "/portfolio",
  },
  {
    id: 6,
    title: "İletişim",
    url: "/iletisim",
  },
  {
    id: 7,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [colorChange, setColorchange] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAraclar = Boolean(anchorEl);



  const session = useSession();
  const pathname = usePathname()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);


  }, []);



  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(!drawer);
  };

  useEffect(() => {
    setDrawer(false)
  }, [pathname]);

  return (
    <div className={`${colorChange ? styles.active : ""} ${styles.container}`}>
      <Link href="/" className={styles.logo}>
        lamamia {pathname}
      </Link>
      <div className={styles.links}>

        {matches ? (
          <Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon fontSize="" />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawer}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  width: "100vw"
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", padding: 30 }}>
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <Divider />
              {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                  <ListItem >

                    <ListItemButton>


                      <ListItemText primary={link.title} />

                    </ListItemButton>

                  </ListItem>


                </Link>
              ))}

            </Drawer>
          </Box>
        ) : <>
          <DarkModeToggle />

          <div>
            <Button
              id="basic-button"
              aria-controls={openAraclar ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openAraclar ? 'true' : undefined}
              onMouseEnter={(event) => setAnchorEl(event.currentTarget)}

              style={{ cursor: "pointer" }}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openAraclar}
              onClose={() => setAnchorEl(false)}
            >
              <Link href="/araclar/arabuluculuk"><MenuItem >Profile</MenuItem></Link>
              <Link href="/araclar/vekalet"><MenuItem >Profile</MenuItem></Link>

            </Menu>
          </div>

          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )} </>}
      </div>
    </div>
  );
};

export default Navbar;
