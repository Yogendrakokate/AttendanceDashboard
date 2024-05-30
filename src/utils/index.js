export const fetchData = () => {
    return Promise.resolve({
      week: {
        user: {
          avgHrsDay: '5:46hrs',
          onTime: '98%',
        },
        team: {
          avgHrsDay: '6:23hrs',
          onTime: '74%',
        },
        logs: [
          { date: 'Jul 31, Wed',day:'W', status: 'HELP', effectiveHrs: '9:00 hrs', grossHrs: '10:00', arrival: 'On Time' ,inTime:'10 AM', outTime:'8 PM'},
          { date: 'Jul 30, Tue',day:'T', status: 'WORK', effectiveHrs: '8:50 hrs', grossHrs: '10:00', arrival: 'On Time',inTime:'8 AM', outTime:'6 PM' },
          { date: 'Jul 29, Mon', day:'M',status: 'WORK', effectiveHrs: '4:30 hrs', grossHrs: '5:00 ', arrival: 'Late',inTime:'10 AM', outTime:'3 PM' },
          { date: 'Jul 28, Sun',day:'S', status: 'LEAVE', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: 'N/A',inTime:'NA', outTime:'NA' },
          { date: 'Jul 27, Sat', day:'S',status: 'LEAVE', effectiveHrs: '0:00 hrs', grossHrs: '00:00', arrival: 'N/A',inTime:'NA', outTime:'NA' },
          { date: 'Jul 26, Fri', day:'F',status: 'REMOTE', effectiveHrs: '9:00 hrs', grossHrs: '10:00', arrival: 'On Time',inTime:'8 AM', outTime:'6 PM' },
          { date: 'Jul 25, Thu', day:'T',status: 'REMOTE', effectiveHrs: '9:00 hrs', grossHrs: '10:00', arrival: 'On Time',inTime:'8 AM', outTime:'6 PM' },
        ],
      },
      month: {
        user: {
          avgHrsDay: '6:00hrs',
          onTime: '95%',
        },
        team: {
          avgHrsDay: '6:30hrs',
          onTime: '80%',
        },
        logs: [
          { date: 'Jul 1, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:45 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 2, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 3, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 4, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 5, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 6, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 7, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 8, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 9, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 10, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 11, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 12, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 13, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 14, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 15, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 16, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 17, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 18, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 19, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 20, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 21, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 22, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 23, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 24, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 25, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 26, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 27, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 28, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 29, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 30, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 31, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' }
        ],
      },
      lastMonth:{
        user: {
          avgHrsDay: '8:00hrs',
          onTime: '98%',
        },
        team: {
          avgHrsDay: '8:30hrs',
          onTime: '75%',
        },
        logs: [
          { date: 'Jun 1, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:45 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 2, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 3, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 4, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 5, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 6, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 7, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 8, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 9, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 10, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 11, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 12, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 13, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 14, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 15, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 16, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 17, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 18, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 19, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 20, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 21, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 22, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 23, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 24, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 25, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 26, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 27, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jun 28, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jun 29, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jun 30, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
        ],
      },
      threeMonths: {
        user: {
          avgHrsDay: '6:30hrs',
          onTime: '92%',
        },
        team: {
          avgHrsDay: '6:45hrs',
          onTime: '85%',
        },
        logs: [ 
          { date: 'Jul 1, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:45 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 2, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 3, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 4, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 5, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 6, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 7, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 8, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 9, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 10, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 11, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 12, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 13, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 14, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 15, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 16, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 17, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 18, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 19, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 20, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 21, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 22, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 23, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 24, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 25, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jul 26, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jul 27, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 28, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 29, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 30, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jul 31, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 1, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:45 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 2, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 3, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 4, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 5, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 6, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 7, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 8, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 9, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 10, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 11, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 12, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 13, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 14, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 15, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 16, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 17, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 18, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 19, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 20, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 21, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 22, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 23, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 24, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 25, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'Jun 26, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'Jun 27, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jun 28, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jun 29, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'Jun 30, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 1, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:45 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 2, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 3, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 4, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 5, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 6, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 7, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 8, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 9, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 10, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 11, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 12, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 13, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 14, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 15, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 16, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 17, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 18, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 19, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 20, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 21, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 22, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 23, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 24, Sat', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 25, Sun', day: 'S', status: 'OFF', effectiveHrs: '0:00 hrs', grossHrs: '0:00 ', arrival: '-', inTime: '-', outTime: '-' },
          { date: 'May 26, Mon', day: 'M', status: 'WORK', effectiveHrs: '7:30 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
          { date: 'May 27, Tue', day: 'T', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'May 28, Wed', day: 'W', status: 'WORK', effectiveHrs: '7:50 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'May 29, Thu', day: 'T', status: 'WORK', effectiveHrs: '7:55 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' },
      { date: 'May 30, Fri', day: 'F', status: 'WORK', effectiveHrs: '7:40 hrs', grossHrs: '9:00 ', arrival: 'On Time', inTime: '8 AM', outTime: '5 PM' }, ,
    
 
    ],
      },
    });
  };


  export const teamMembers = [
    { name: 'Victor Pacheco', role: 'Senior Engineer', avatar: 'https://imgs.search.brave.com/tsIpMCP_2OSLrTrJDzdhDr4FrUG8CvxCs1cd1a6mxdM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/bmtub3duLW1hbi1w/b3Npbmctc3R1ZGlv/LXNpZGUtdmlld18y/My0yMTQ5NDE3NjE5/LmpwZz9zaXplPTYy/NiZleHQ9anBn' },
    { name: 'Angela Longoria', role: 'Full Stack Developer', avatar: 'https://imgs.search.brave.com/r__4Q7y7GQ8oJuHbCIBayphgPzDlYr16T4neb0MG5Zk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1wcm9maWxlLXBp/Y3R1cmUtN2QwOGNh/NTh2YWFuajA3ci5q/cGc' },
    { name: 'Tikhon Yaroslavsky', role: 'Web Developer', avatar: 'https://imgs.search.brave.com/M4CwNW8gHcfslLznxFrdL8K9RRv70BCYgP5RqCgd8kg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjQw/MDIxMjAyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtY2hlZXJmdWwt/eW91bmctbWFuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Y/Ukg2VTE1Y2hiZ2JD/dnREd1k2RXUxdW1h/UXpZYkdJLUxXYk9q/OW1sWW5jPQ' },
    { name: 'Member 4', role: 'Role 4', avatar: 'https://imgs.search.brave.com/fl0ZI3utXlTnHZM1lu3SmB0oyUfhVNZMTGLfiZpq75Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTQ2MjczMi9waG90/by9oZWFkc2hvdC1z/dHVkaW8tcG9ydHJh/aXQtb2YtYS13b21h/bi1pbi1wcm9maWxl/LWxvb2tpbmctYXQt/dGhlLWNhbWVyYS53/ZWJwP2I9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1lenV5OHpJ/N3Q3SWJpTWZob0pq/bUtCenhvV3NHY3Nh/cm9xZXVWY1V6Z0NZ/PQ' },
    { name: 'Member 5', role: 'Role 5', avatar: 'https://imgs.search.brave.com/uNjiva5-4lX2Q1eoocMKKOZmSWg1QioLJ2SEWFbJtQw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMXI4/bTQ2b29iM285dS5j/bG91ZGZyb250Lm5l/dC9pbWFnZXMvaG9t/ZS9ob21lLWRlbW8t/cGhvdG8tMjItc3F1/YXJlLmpwZw' },
    { name: 'Member 6', role: 'Role 6', avatar: 'https://imgs.search.brave.com/Sw8RlKia_dAiFOMy9knqvVt4kB6uT8iXAR5vbo5TpCM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3JhaXQtY3V0ZS1i/b3ktY2FmZV8yMy0y/MTQ4NDM2MTE5Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn' },
    { name: 'Member 7', role: 'Role 7', avatar: 'https://imgs.search.brave.com/L1TvJ87kZeOKnaJoPMlifnQDdOAt51o3Db0_UNhpeWc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaXZlcnNlLXBl/b3BsZS1zaG9vdF81/Mzg3Ni01NTg4Mi5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw' },
    { name: 'Member 8', role: 'Role 8', avatar: 'https://imgs.search.brave.com/vLn6KdkCH165e6pVh4THQoZHkkBAdTiQ5SGn7g5qx2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NjE5NzczMC9waG90/by9wb3J0cmFpdC1v/Zi1hLXlvdW5nLWhh/bmRzb21lLWluZGlh/bi1tYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNuY05V/VGJ3Nm16R3Nib2pr/czJWdDBrVjg1Tl9w/UWFJM3phU2tCUUpG/VGM9' },
    { name: 'Member 9', role: 'Role 9', avatar: 'https://imgs.search.brave.com/uKJWrPay-aXrHz80maPaGiiNLZ2kYAv79ZxJ-34RAT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NjYwNGM3N2IxYjRi/ZDY1OGFfcHJvZmls/ZXBob3RvNS5qcGVn' },
    { name: 'Member 10', role: 'Role 10', avatar: 'https://imgs.search.brave.com/4jpxI3LL5VswRSLsJaV1JpYQvkui2P2j3Fg-qxtrSl8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NmY5NzhlNzUzNzJk/YzMzMmVfcHJvZmls/ZXBob3RvMS5qcGVn' },
    { name: 'Member 11', role: 'Role 11', avatar: 'https://imgs.search.brave.com/gxJ-fW7q71Wdlzc1ddKoafgQ0U90t9eh19w6WhmQ48E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw' },
    { name: 'Member 12', role: 'Role 12', avatar: 'https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc' },
  ];

  export const praiseOptions = [
    'Money Maker Medal',
    'Relentless Go-getter',
    'Problem Solver',
    'Tech Bearer',
  ];