import { Input } from "@nextui-org/react";
import { FC } from "react";
import "./primaryInput.css";
import { InputError } from "@/types/Form";

type InputType = "text" | "email" | "number";

interface Props {
  label: string;
  name: string;
  value?: string;
  required?: boolean;
  type?: InputType;
  error?: InputError;
  onChange?: ({ key, value }: { key: string; value: string }) => void;
}
const PrimaryInput: FC<Props> = ({
  label,
  type = "text",
  required = true,
  name,
  value,
  error,
  onChange,
}) => {
  return (
    <Input
      name={name}
      type={type}
      value={value}
      onChange={(e) => {
        if (typeof onChange === "function") {
          onChange({ key: name, value: e.target.value });
        }
      }}
      isInvalid={!!error?.[name]}
      errorMessage={error?.[name]}
      label={
        <div className="relative">
          {label} {required && <span className="absolute -right-2">*</span>}
        </div>
      }
      className="primary-input"
    />
  );
};

export default PrimaryInput;
