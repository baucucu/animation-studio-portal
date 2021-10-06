
import React, {useEffect, useState} from 'react';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CardButton from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MicIcon from '@mui/icons-material/Mic';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LockClockIcon from '@mui/icons-material/LockClock';
    import TextareaAutosize from '@mui/material/TextareaAutosize';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';


export default function Manuscript(props){

    const {openDrawer} = props
    const languageTabs = [
        {text: "English", index:0},
        {text: "Norwegian", index:1},
        {text: "Swedish", index:2}
    ]
    
    const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
    const [selectedLanguage, setSelectedLanguage] = useState("")
    const [openComments, setOpenComments] = useState(false)
    function onTabIndexChanged(e) {
        console.log("language tab clicked: ",e)
        // setSelectedLanguage()
    }
    return(
        <Stack spacing={2} style={{display:"flex", flexDirection:"column", height:"100%"}}>
            <Stack sx={{flexDirection:"row", justifyContent: "start", alignItems: "center"}}>
                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Language</Typography>
                <SplitButton options={options} />
            </Stack>
            <Stack mt={2} sx={{flexDirection: 'row', flexGrow:1}}>
                <Card sx={{flexGrow:4}}>
                    <CardContent>
                        <Stack sx={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
                            {/* <Stack sx={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Language</Typography>
                                <SplitButton options={options} />
                            </Stack> */}
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
                                            <RateReviewIcon color="action" onClick={() => {openDrawer()}}/>
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
        </Stack>
    )
  }

  function SplitButton(props) {
    const {options} = props
    
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleClick = () => {
      console.info(`You clicked ${options[selectedIndex]}`);
    };
  
    return (
      <React.Fragment>
        <ButtonGroup variant="outlined" aria-label="small outlined primary button group">
            <Button variant="contained">English</Button>
            <Button startIcon={<LockClockIcon/>}>Swedish</Button>
            <Button startIcon={<LockClockIcon/>}>Norwegian</Button>
        </ButtonGroup>
      </React.Fragment>
    );
  }

