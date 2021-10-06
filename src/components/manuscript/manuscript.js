
import React, {useEffect, useState} from 'react';
import ManuscriptScenes from '../../components/manuscript/manuscript-scenes.js'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CardButton from '@mui/material/Button';
// import CardFooter from '@mui/material/CardFooter';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Drawer from 'devextreme-react/drawer';
import LockClockIcon from '@mui/icons-material/LockClock';


export default function Manuscript(props){

    const [showBriefDrawer, setShowBriefDrawer] = useState(false)
    const toggleBriefDrawer = () => {
        setShowBriefDrawer(!showBriefDrawer)
    }

    return(
        <Stack spacing={2} style={{display:"flex", flexDirection:"column", height:"100%"}}>
            <Stack sx={{flexDirection:"row", justifyContent: "start", alignItems: "center"}}>
                <Typography mr={1} variant="subtitle1" color="text.secondary" component="div">Language</Typography>
                <SplitButton />
            </Stack>
            <Drawer
                opened={showBriefDrawer}
                openedStateMode="shrink"
                position="right"
                revealMode="slide"
                component={BriefDrawer}
                // closeOnOutsideClick={this.onOutsideClick}
                height="100%"
            >
                <div id="content" >
                    <Stack mt={2} sx={{flexDirection: 'row', flexGrow:1}}>
                        <ManuscriptMetadata toggleBriefDrawer={toggleBriefDrawer}/>
                        <ManuscriptControlPanel />
                    </Stack>
                    <ManuscriptScenes/>
                </div>
            </Drawer>
        </Stack>
    )
  }

  function SplitButton(props) {
    
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

  function ManuscriptControlPanel(props) {
      return(
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
                <CardButton size="small" raised fill>Send to client</CardButton>
                <CardButton size="small" raised fill>Approve manuscript</CardButton>
                <CardButton size="small">Ask for revision</CardButton>
            </CardActions>
            {/* <CardFooter>
                <Button size="small" raised fill>Approve manuscript</Button>
                <Button size="small">Ask for revision</Button>
            </CardFooter> */}
        </Card>
      )
  }

  function ManuscriptMetadata(props) {
      const {toggleBriefDrawer} = props
      return(
        <Card sx={{flexGrow:4}}>
            <CardContent>
                <Stack sx={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
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
                <CardButton size="small" onClick={()=>toggleBriefDrawer()}>Show Brief</CardButton>
                <CardButton size="small">Listen to AI Voiceover</CardButton>
                <CardButton size="small">Download PDF</CardButton>
            </CardActions>
        </Card>
      )
  }

  function BriefDrawer(props) {
      return(
          <div>
              Brief drawer *****************************
          </div>
      )
  }
