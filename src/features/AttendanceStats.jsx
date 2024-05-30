import { Box, Divider, Grid, MenuItem, Paper, Select, Typography } from "@mui/material"

export const AttendanceStats = ({data,timeRange,handleTimeRangeChange})=>{

return(
    <Grid item xs={12} sm={6} >
        <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
          <Typography variant="h6" sx={{fontSize:'1.2rem'}}>Attendance Stats</Typography>
             
                <Select
                  value={timeRange}
                  onChange={handleTimeRangeChange}
                  sx={{ color:'#9e9e9e' ,  fontSize: '0.875rem',
                  padding: '8px',
                height:'3rem' }}
                >
                  <MenuItem value="week" >This Week</MenuItem>
                  <MenuItem value="month" >Last Month</MenuItem>
                  <MenuItem value="threeMonths" >Last 3 Months</MenuItem>
                </Select>
              <Box
                sx={{  justifyContent: 'space-between', mt: 1 }}
              >
                 <Box sx={{display:'flex',justifyContent:'end',gap:'30%'}}>
                  <Typography sx={{fontSize:'0.7rem' ,color:'#9e9e9e'}}>AVG HRS / DAY</Typography>
                  <Typography sx={{fontSize:'0.7rem' ,color:'#9e9e9e'}}>
                 ON TIME
                  </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                  <Box> <Typography variant="body1">Me</Typography></Box>      
                    <Typography variant="h6" sx={{marginRight:'-2.5rem', fontSize:'1rem'}}>{data.user.avgHrsDay}</Typography>   
                       <Typography  variant="h6" sx={{fontSize:'1rem'}}>
                    {data.user.onTime}
                  </Typography>
                </Box>
                <Divider sx={{padding:'0.5rem'}}/>
                <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'5%'}}>
                  <Typography variant="body1" sx={{fontSize:'1rem'}}>My Team</Typography>
                  <Typography variant="h6" sx={{fontSize:'1rem'}}>{data.team.avgHrsDay}</Typography>
                  <Typography variant="h6" sx={{fontSize:'1rem'}}>
                  {data.team.onTime}
                  </Typography>
                </Box>
              </Box>
            
            </Paper>
          </Grid>
)
}