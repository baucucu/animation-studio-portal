
import React from 'react';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Manuscript(props){
    return(
        <Stack>
            <Stack mt={2} sx={{flexDirection: 'row', justifyContent:"stretch"}}>
                <Card sx={{flexGrow:1}}>
                    <CardContent>
                        <Stack sx={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
                            <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Language</Typography>
                                <Chip label={"Swedish"} ></Chip>
                            </Stack>
                            <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Word count</Typography>
                                <Chip label={"385"} ></Chip>
                            </Stack>
                            <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Target length</Typography>
                                <Chip label={"60s"} ></Chip>
                                <Chip label={"not so strict"} ></Chip>
                            </Stack>
                            <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Scenes</Typography>
                                <Chip label={"8"} ></Chip>
                            </Stack>
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
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Revisions</Typography>
                                <Chip label={"2/5"} ></Chip>
                            </Stack>
                            <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Time to respond</Typography>
                                <Chip label={"18:00:00"} ></Chip>
                                <CardButton size="small">Extend time</CardButton>
                            </Stack>
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
                    <Grid item key={id}>
                        <Card >
                            <CardMedia
                                component="img"
                                sx={{ width: 300, height:120 }}
                                image="https://source.unsplash.com/random"
                                alt="Live from space album cover"
                            />
                            <CardContent sx={{flexGrow:1}}>
                                <Typography variant="h6" color="text.secondary" component="div">Scene #</Typography>
                                <Typography variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                                <Stack sx={{flexDirection:"column"}}>
                                    <Stack mt={1} sx={{flexDirection:"row"}}>
                                        <AccessTimeFilledIcon/>
                                        <Typography ml={1} variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    </Stack>
                                    <Stack mt={1} sx={{flexDirection:"row"}}>
                                        <AccessTimeFilledIcon/>
                                        <Typography ml={1} variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    </Stack>
                                    <Stack mt={1} sx={{flexDirection:"row"}}>
                                        <AccessTimeFilledIcon/>
                                        <Typography ml={1} variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    </Stack>
                                    <Stack mt={1} sx={{flexDirection:"row"}}>
                                        <AccessTimeFilledIcon/>
                                        <Typography ml={1} variant="body2" color="text.secondary" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                                    </Stack>
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