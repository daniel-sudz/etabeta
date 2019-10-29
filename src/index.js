import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-line no-unused-vars
import 'bootstrap/dist/js/bootstrap.bundle.js';
//import 'bootstrap/js/dist/dropdown';
//require('bootstrap-loader');
//import cal_core from '@fullcalendar/core/main.css';
//import cal_daygrid from '@fullcalendar/daygrid/main.css';
//import cal_timegrid from '@fullcalendar/timegrid/main.css';
//import call_list from '@fullcalendar/list/main.css';
require('./styles/core/main.min.css');
require('./styles/daygrid/main.min.css');
require('./styles/list/main.min.css');
require('./styles/timegrid/main.min.css');



var calendarEl = document.getElementById('calendar');
if (calendarEl){
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin ],
	googleCalendarApiKey: 'AIzaSyD4Z7P0BWwhBegJNyLKN3WWNfBgqt6_yHE',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    //defaultDate: '2018-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: {
		googleCalendarId: 'l1rnqsakc8kb0lbmo2ll3ag5v0@group.calendar.google.com'
	}
  });

   calendar.render();
});
}