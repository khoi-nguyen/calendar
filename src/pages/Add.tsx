import { useState } from "react";
import Field from "../components/Field";
import DateField from "../components/DateField";

interface Event {
  start: string;
  title: string;
  end: string;
}

export default function Add() {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function handleSubmit() {
    const event: Event = { start, title, end };
    const events: Event[] = JSON.parse(localStorage.getItem("events") || "[]");
    localStorage.setItem("events", JSON.stringify([...events, event]));
  }

  return (
    <>
      <h1>Add event</h1>
      <Field label="Event title" value={title} onChange={setTitle} />
      <DateField label="Start date" value={start} onChange={setStart} />
      <DateField label="End date" value={end} onChange={setEnd} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
