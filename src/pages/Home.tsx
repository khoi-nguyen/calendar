import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function () {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
