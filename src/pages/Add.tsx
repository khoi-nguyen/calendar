import Field from "../components/Field";
import DateField from "../components/DateField";

export default function () {
  return (
    <>
      <h1>Add event</h1>
      <Field label="Event title" />
      <DateField />
    </>
  );
}
