import React from 'react'
import FullCalendar from '@fullcalendar/react'
import PageStyles from "./styles";
import { PageHead, PageHeader, PageWrap } from "./head";


import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';





const Calendar = () => {
  return (
      <div style={PageStyles.outlineWhite}>
        <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={
            {
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listWeek",
          }
        }
      />
      </div>
  );
};

const CalendarExport = () => {
  return <PageWrap Body={Calendar} Title="Calendar" />;
};

export default CalendarExport;
