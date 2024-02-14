import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import dayjs from "dayjs";

interface CustomDateTimeFieldProps {
  label: string;
  value?: string;
  onChange: (newValue: string) => void;
}

export default function CustomDateTimeField(props: CustomDateTimeFieldProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimeField
        label={props.label}
        value={props.value ? dayjs(props.value) : dayjs()}
        onChange={function (date) {
          if (props.onChange && date) {
            props.onChange(date.toString());
          }
        }}
      />
    </LocalizationProvider>
  );
}
