interface FieldProps {
  label: string;
}

export default function (props: FieldProps) {
  return (
    <div>
      <label>
        {props.label}: <input />
      </label>
    </div>
  );
}
