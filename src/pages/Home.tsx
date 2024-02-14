import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <h1>Calendar</h1>
      <Link to="/add">Create a new event</Link>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </>
  );
}
