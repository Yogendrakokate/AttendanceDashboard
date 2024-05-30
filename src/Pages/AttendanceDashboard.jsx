import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  CircularProgress,
} from '@mui/material';
import { AttendanceStats } from '../features/AttendanceStats';
import { Timings } from '../features/Timings';
import { AttendanceLogs } from '../features/AttendanceLogs';
import { fetchData } from '../utils';
import { useNavigate } from 'react-router-dom';


const AttendanceDashboard = () => {
  const [data, setData] = useState({
    user: {},
    team: {},
    logs: [],
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('week');
  const [selectedDay, setSelectedDay] = useState(0);
  const [logFilter, setLogFilter] = useState('30days');
  const navigate =useNavigate()


  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData[timeRange]);
      setLoading(false);
    });
  }, [timeRange]);


  const handleTimeRangeChange = (event) => {
    setLoading(true);
    setTimeRange(event.target.value);
  };

  const handleDayChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  const handleLogFilterChange = (filter) => {
    setLogFilter(filter);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>

        <Grid container spacing={1}>
          <AttendanceStats data={data} timeRange={timeRange} handleTimeRangeChange={handleTimeRangeChange}/>
<Timings data={data} selectedDay={selectedDay} handleDayChange={handleDayChange}/>
<AttendanceLogs data={data} logFilter={logFilter} handleLogFilterChange={handleLogFilterChange} timeRange={timeRange}/>
        </Grid>
    </Container>
  );
};

export default AttendanceDashboard;
