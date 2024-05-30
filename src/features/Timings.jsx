import { Box, Grid, LinearProgress, Paper, Tab, Tabs, Typography } from "@mui/material"


export const Timings = ({data,selectedDay,handleDayChange})=>{
    return(
        <Grid item xs={12} sm={6}  >
            <Paper variant="outlined" sx={{ p: 2, mt: 1, padding:'1.7rem'}}>
        <Typography variant="h6" sx={{fontSize:'1.2rem'}}>Timings</Typography>
          <Tabs
            value={selectedDay}
            onChange={handleDayChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: '30px',
              width: '100%', 
              overflowX: 'auto', 
              '& .MuiTabs-flexContainer': {
                justifyContent: 'space-between',
              },
            }}
          >
            {data.logs.map((log, index) => (
              <Tab
                key={index}
                label={log.day}
                sx={{
                  minWidth: '30px', // Set a minimum width for each tab
                  minHeight: '30px',
                  borderRadius: '15px',
                  padding: '6px 8px',
                }}
              />
            ))}
          </Tabs>
          {data.logs[selectedDay] && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                {data.logs[selectedDay].date} ({data.logs[selectedDay].inTime} -{' '}
                {data.logs[selectedDay].outTime})
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  backgroundColor: 'grey.300',
                  borderRadius: '5px',
                  margin: '20px 0',
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={data.logs[selectedDay].day === 'S' ? 0 : ((parseInt(data.logs[selectedDay].effectiveHrs) / parseInt(data.logs[selectedDay].grossHrs)) * 100)}
                  sx={{ height: '10px', borderRadius: '5px' }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">
                  Duration: {data.logs[selectedDay].grossHrs} hrs
                </Typography>
                <Typography variant="body2">
                  Break: {parseInt(data.logs[selectedDay].grossHrs) - parseInt(data.logs[selectedDay].effectiveHrs)} hr
                </Typography>
              </Box>
            </Box>
          )}
        </Paper>
      </Grid>
    )
}