interface FieldProps {
  label: string;
}

export default function (props: FieldProps) {
  return (
    <>
      <label>
        {props.label}: <input />
      </label>
    </>
  );
}
