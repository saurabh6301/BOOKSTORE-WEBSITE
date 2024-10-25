import { Button } from "@headlessui/react";
import { Grid2, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import React from "react";
const Footer = () => {
    return (<div>
        <Grid2 className="bg-black text-white ">
            <Grid2 className="text-center mt-10 flex justify-around "
                container="col"
                sx={{ bgcolor: "black", color: "white", py: 3 }} >
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div><Button className="pb-5" varient="h6">About</Button></div>
                    <div><Button className="pb-5" varient="h6">Blog</Button></div>
                    <div><Button className="pb-5" varient="h6">Press</Button></div>
                    <div><Button className="pb-5" varient="h6">Jobs</Button></div>
                    <div><Button className="pb-5" varient="h6">Partners</Button>
                    </div>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div><Button className="pb-5" varient="h6">Marketing</Button></div>
                    <div><Button className="pb-5" varient="h6">Anatytics</Button></div>
                    <div><Button className="pb-5" varient="h6">Commerce</Button></div>
                    <div><Button className="pb-5" varient="h6">Suports</Button></div>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div><Button className="pb-5" varient="h6">Guides</Button></div>
                    <div><Button className="pb-5" varient="h6">API Status</Button></div>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Leagl</Typography>
                    <div><Button className="pb-5" varient="h6">Claim</Button></div>
                    <div><Button className="pb-5" varient="h6">Privacy</Button></div>
                    <div><Button className="pb-5" varient="h6">Terms</Button></div>
                </Grid2>
            </Grid2>
            <Grid2 container="row" className="lg:p-10 p-5 justify-between md:space-y-0 space-y-5">
                <h1>Copyright © 1999 - 2024 BookStore Company</h1>
                <div className="space-x-5">
                    <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100057164610396"><FacebookIcon/></a>
                    <a href="https://www.instagram.com/saurabhpandey9003/?hl=en"><InstagramIcon/></a>
                    <a href="https://www.linkedin.com/in/saurabh-pandey-149499281/"><LinkedInIcon/></a>
                </div>
            </Grid2>

        </Grid2>
    </div>
    )
}
export default Footer