import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function () {
  const [events, setEvents] = useState([]);

  useEffect(function () {
    setEvents(JSON.parse(localStorage.getItem("events") || "[]"));
  }, []);

  return (
    <>
      {JSON.stringify(events)}
      <h1>Calendar</h1>
      <Link to="/add">Create a new event</Link>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </>
  );
}
