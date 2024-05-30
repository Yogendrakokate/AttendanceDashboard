import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, Avatar, Typography, IconButton, Grid, Paper, Chip, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, FormControl, InputLabel, LinearProgress, Divider
} from '@mui/material';
import { MoreVert, Add } from '@mui/icons-material';
import { praiseOptions, teamMembers } from '../utils';


const ProfileCard = () => {
  const [showAll, setShowAll] = useState(false);
  const [praise, setPraise] = useState(praiseOptions);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPraise, setSelectedPraise] = useState('');

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const handleAddPraise = () => {
  
      setPraise([...praise, selectedPraise]);
    
    setSelectedPraise('');
    setOpenDialog(false);
  };


  return (
    <Card sx={{ maxWidth: '900px', margin: 'auto', padding: 2 }}>
      <CardHeader
        avatar={<Avatar alt="Samanta Sengal" src="https://imgs.search.brave.com/WHJCQXFEWeTCsmPBN1X3quXyqvqubCn9Zk586lY-Mv8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRY/TmxjaVV5TUhCeWIy/WnBiR1Y4Wlc1OE1I/eDhNSHg4ZkRBPQ" sx={{ width: 56, height: 56 }} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Samanta Sengal"
        subheader="Lead Engineer at Technovert | Hyderabad, India"
      />
      <CardContent>
        <Grid sx={{display:'flex'}}>
          <Grid sx={{display:'flex',flexDirection:'column',
   }}>
        <Grid item xs={12} md={6} sx={{padding:'0.5rem'}}>
          <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
          <Typography variant="h6" sx={{fontWeight:'medium'}} >
About        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dynamic and creative software developer with over 5 years of experience in producing robust code for high-volume companies. Eager to support with top-notch coding skills.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          What I love about my job?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I like the support I receive from peers and the management here. The job is challenging enough and pushes my limits and I found myself growing fast.
        </Typography>
          </Paper>
        
        
        </Grid>
          <Grid item xs={12} md={6} sx={{padding:'0.5rem'}}>
           
            <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
            <Typography variant="h6" sx={{fontWeight:'medium',marginLeft:'-1px'}}>Timeline</Typography>
              <Typography variant="body2">Work Anniversary - 3rd</Typography>
              <Typography variant="body2">Jan 24, 2020</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Pay Increase</Typography>
              <Typography variant="body2">Jan 24, 2020</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Praise - Super Star worker</Typography>
              <Typography variant="body2">Jan 24, 2020</Typography>
            </Paper>
          </Grid>
          <Grid>    
                </Grid>
          </Grid>
      <Grid sx={{display:'flex',flexDirection:'column',gap:'1rem',}}>
         <Grid item xs={12} md={6} sx={{padding:'0.5rem'}}>
           <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
           <Typography variant="h6">Reporting Team (12)</Typography>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              {teamMembers.slice(0, showAll ? teamMembers.length : 3).map((member, index) => (
                <Grid item xs={4} key={index} sx={{ textAlign: 'center' }}>
                  <Avatar alt={member.name} src={member.avatar} sx={{ margin: 'auto' }} />
                  <Typography variant="body2">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                </Grid>
              ))}
            </Grid>
            <Button onClick={handleViewAll} sx={{ mt: 1 }}>
              {showAll ? 'View Less' : 'View All'}
            </Button>
           </Paper>
           
          </Grid>


{/* praises */}
   <Grid >
   <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
   <Typography variant="h6">Praise</Typography>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {praise.map((label, index) => (
              <Grid item key={index}>
                <Chip label={label} color="primary" />
              </Grid>
            ))}
            <Grid item>
              <IconButton color="primary" onClick={() => setOpenDialog(true)}>
                <Add />
              </IconButton>
            </Grid>
          </Grid>
   </Paper>
        
      </Grid>

      {/* goals */}
      <Grid>
      <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
      <Typography variant="h6">Goals</Typography>
          <Typography variant="body2">Digital transformation of all onboarding processes</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" value={23.45} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">23/45</Typography>
            </Box>
          </Box>
      </Paper>
        
        </Grid>
      </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} >
        <Paper variant="outlined" sx={{ p: 2, mt: 1, width:'15rem'}}>
          <DialogTitle>Add Praise</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="select-praise-label">Select Praise</InputLabel>
              <Select
                labelId="select-praise-label"
                value={selectedPraise}
                onChange={ (e) => setSelectedPraise(e.target.value)}
                label="Select Praise"
              >
                {praiseOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleAddPraise} color="primary">Add</Button>
          </DialogActions>
          </Paper>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
