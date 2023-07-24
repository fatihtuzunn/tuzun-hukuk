"use client"

import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

export const SocialIcons = () => {
    return (
        <div className="socialIcons">
            <IconButton>
                <FacebookIcon className="icon" style={{ color: "white" }} />
            </IconButton>
            <IconButton>
                <TwitterIcon className="icon" style={{ color: "white" }} />
            </IconButton>
            <IconButton>
                <GitHubIcon className="icon" style={{ color: "white" }} />
            </IconButton>
            <IconButton>
                <InstagramIcon className="icon" style={{ color: "white" }} />
            </IconButton>
            <IconButton>
                <PinterestIcon className="icon" style={{ color: "white" }} />
            </IconButton>
        </div>
    );
};
