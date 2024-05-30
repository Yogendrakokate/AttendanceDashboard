import { Avatar, Box, Button, ButtonGroup, Divider, Grid, List, ListItem, ListItemText, Pagination, Paper, Typography } from "@mui/material"
import React,{ useState } from "react";
import { StatusIcon } from "../Icons";


export const AttendanceLogs = ({data,logFilter,handleLogFilterChange,timeRange})=>{

    const [currentPage, setCurrentPage] = useState(1);


    const filteredLogs = data.logs.filter((log) => {
        if (logFilter === '30days') {
          return log.date.startsWith('Jul'); 
        } else if (logFilter === 'june') {
          return log.date.startsWith('Jun'); 
        } else if (logFilter === 'may') {
          return log.date.startsWith('May');
        }
        return true;
      });

    const logsPerPage = 10;

    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <Grid item xs={12} >
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Logs</Typography>
            <ButtonGroup variant="contained" sx={{ mb: 2, gap: '0.4rem' }}>
              <Button onClick={() => handleLogFilterChange('30days')} variant={logFilter === "30days" ? "contained" : "outlined"}>
                30 Days
              </Button>
              <Button sx={{cursor:'disabled'}} disabled={timeRange!=='threeMonths' } onClick={() => handleLogFilterChange('june')} variant={logFilter === "june" ? "contained" : "outlined"}>
                June
              </Button>
              <Button disabled={timeRange!=='threeMonths' } onClick={() => handleLogFilterChange('may')} variant={logFilter === "may" ? "contained" : "outlined"}>May</Button>
            </ButtonGroup>
          </Box>
  
          <List>
            {currentLogs.map((log, index) => (
              <React.Fragment key={index}>
                <ListItem >
                  <Avatar sx={{ mr: 1 }}>
                    <StatusIcon status={log.status} />
                  </Avatar>
                  <ListItemText
                    primary={log.date}
                    secondary={`Effective Hours: ${log.effectiveHrs}, Gross Hours: ${log.grossHrs}, Arrival: ${log.arrival}`}
                  />
                </ListItem>
                {index < currentLogs.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          <Pagination
            count={Math.ceil(filteredLogs.length / logsPerPage)}
            page={currentPage}
            onChange={(event, page) => paginate(page)}
            variant="outlined"
            shape="rounded"
            size="large"
            siblingCount={1}
            boundaryCount={1}
            sx={{ mt: 2, justifyContent: 'center' }}
          />
        </Paper>
      </Grid>
    )
}