
import React, {useState, useEffect} from 'react';
import * as Realm from "realm-web";
import Button from 'devextreme-react/button';
import Chip from '@mui/material/Chip';
// import Avatar from '@mui/material/Avatar';
// import CheckIcon from '@mui/icons-material/Check';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Manuscript(props){
    const {project} = props.data
    return(
        <Stack>
            <Stack mt={2} sx={{flexDirection: 'row', justifyContent:"stretch"}}>
                <Card sx={{flexGrow:1}}>
                    <CardContent>
                        <Stack sx={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">Language</Typography>
                            <   Typography variant="subtitle1" color="text.secondary" component="div">Word count</Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">Target length</Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">Scenes</Typography>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <CardButton size="small">Listen to AI Voiceover</CardButton>
                        <CardButton size="small">Download PDF</CardButton>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow:1, marginLeft:2}}>
                    <CardContent>
                        <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                            <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography variant="subtitle1" color="text.secondary" component="div">Time to respond</Typography>
                                <Chip></Chip>
                            </Stack>
                            <CardButton size="small">Extend time</CardButton>
                        </Stack>
                    </CardContent>
                <CardActions>
                    <CardButton size="small">Approve manuscript</CardButton>
                    <CardButton size="small">Ask for revision</CardButton>
                </CardActions>
                </Card>
            </Stack>
            <Grid mt={2} pb={2} container spacing={2} direction="row" rows={1} wrap="nowrap" style={{overflow:"auto"}}>
                {[1,2,3,4,5,6,7,8,9,10].map((card,id) => 
                    <Grid item>
                        <Card key={id}>
                            <CardMedia
                                component="img"
                                sx={{ width: 300, height:120 }}
                                image="https://source.unsplash.com/random"
                                alt="Live from space album cover"
                            />
                            <CardContent sx={{flexGrow:1}}>
                                <Stack sx={{flexDirection:"row", alignItems: "center", justifyContent:"space-around"}}>
                                    <div>Content</div>
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <CardButton size="small">Comment</CardButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Stack>
    )
  }