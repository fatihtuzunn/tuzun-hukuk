"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
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
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [colorChange, setColorchange] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
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
  window.addEventListener('scroll', changeNavbarColor);



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
