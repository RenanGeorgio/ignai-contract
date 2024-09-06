import React from 'react';
import { Box } from "@chakra-ui/react";
import Calendar from '@osam2/react-calendar';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';

const CalendarComponent = (props) => {
  const style = {
    position: 'relative',
    top: '2%',
    left: '37%',
    width: '100%',
    height: '100%',
    backgroundColor: 'background.paper',
    boxShadow: 24,
    padding: '1ch 1ch 3ch 3ch',
    color: '#333',
    borderRadius: 2,
    marginTop: 20,
    marginBottom: 20,
    border: '1px #000'
  };

  return (
    <Box style={{ backgroundColor: '#FFFFFF' }}>
      <Calendar
        sx={style}
        events={props.events}
        onClickEvent={(event) => {
          props.showInfo(props.events[event]);
        }}
        onChange={(date) => {
          props.listEvents(moment([date.year, date.month, date.day, 0, 0, 0, 0]), date.mode);
        }}
      />
    </Box>
  );
};

export default CalendarComponent;
