import type { ChangeEvent } from "react";
interface FieldProps {
  label: string;
  value: string;
  onChange?: (newValue: string) => void;
}

export default function (props: FieldProps) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (props.onChange && event) {
      props.onChange(event.target.value);
    }
  }

  return (
    <div>
      <label>
        {props.label}: <input value={props.value} onChange={handleOnChange} />
      </label>
    </div>
  );
}
