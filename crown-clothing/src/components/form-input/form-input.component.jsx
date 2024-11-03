import { Group, FormInputValue, FormInputLabel } from "./form-input.styles";

export function FormInput({ label, inputOptions }) {
  return (
    <Group>
      <FormInputValue {...inputOptions} />
      {label && (
        <FormInputLabel
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
