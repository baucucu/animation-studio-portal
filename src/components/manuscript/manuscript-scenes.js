import React, {useEffect, useState} from 'react';
import CommentsDrawer from '../../components/comments-drawer/comments-drawer.js'
import Drawer from 'devextreme-react/drawer';
import { CButton, Comment, Form, Header } from 'semantic-ui-react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
// import CardMedia from '@mui/material/CardMedia';
import CardButton from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MicIcon from '@mui/icons-material/Mic';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LockClockIcon from '@mui/icons-material/LockClock';
import RateReviewIcon from '@mui/icons-material/RateReview';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';


export default function ManuscriptScenes(props) {

    return(
        <React.Fragment>
            <Drawer
                opened={true}
                openedStateMode="shrink"
                position="right"
                revealMode="slide"
                component={CommentsDrawer}
                // closeOnOutsideClick={this.onOutsideClick}
                height="100%"
            >
                <div id="content" >
                    <Grid mt={2} pb={2} container spacing={2} direction="row" rows={1} wrap="nowrap" sx={{overflow:"auto", flexGrow: 1, alignItems:"stretch", }}>
                        {[1,2,3,4,5,6,7,8,9,10].map((card,id) => 
                            <Grid item key={id}>
                                <Card sx={{width: 450}}>
                                    {/* <CardMedia
                                        component="img"
                                        sx={{ width: 300, height:120 }}
                                        image="https://source.unsplash.com/random"
                                        alt="Live from space album cover"
                                    /> */}
                                    <CardContent >
                                        <Stack sx={{flexDirection:"row", justifyContent: "space-between"}}>
                                            <Typography variant="h6" color="text.secondary" component="div">Scene #</Typography>
                                            <IconButton color="primary" aria-label="open comments">
                                                <Badge badgeContent={4} color="secondary" >
                                                    <RateReviewIcon color="action" onClick={() => {}}/>
                                                </Badge>
                                            </IconButton>
                                        </Stack>
                                        {/* <Typography variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography> */}
                                        <Stack sx={{flexDirection:"column"}} spacing={2}>
                                            <Stack mt={1} sx={{flexDirection:"row"}}>
                                                <MicIcon/>
                                                <TextField
                                                    fullWidth
                                                    id="outlined-multiline-flexible"
                                                    label="Voice"
                                                    multiline
                                                    maxRows={20}
                                                    // value={value}
                                                    placeholder="Maximum 4 rows"
                                                    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                                    // onChange={handleChange}
                                                />
                                                {/* <MoreVertIcon/> */}
                                            </Stack>
                                            <Stack mt={1} style={{display:"flex", flexDirection:"row"}}>
                                                <DirectionsRunIcon />
                                                {/* <Typography ml={1} variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography> */}
                                                {/* <TextareaAutosize
                                                    style={{flexGrow:1}}
                                                    maxRows={10}
                                                    aria-label="maximum height"
                                                    placeholder="Maximum 4 rows"
                                                    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                                    // style={{ width: 200 }}
                                                /> */}
                                                <TextField
                                                    fullWidth
                                                    id="outlined-multiline-flexible"
                                                    label="Action"
                                                    multiline
                                                    maxRows={20}
                                                    // value={value}
                                                    placeholder="Maximum 4 rows"
                                                    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                                    // onChange={handleChange}
                                                />
                                                {/* <MoreVertIcon/> */}
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                    {/* <CardActions>
                                        <CardButton size="small">Comment</CardButton>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </Drawer>
            
        </React.Fragment>
    )
}