import { memo } from "react";
import styled from "styled-components";

interface IInputProps {
  type?: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<any>`
  width: 100%;
  padding: 0;
  border: none;
  outline: 0;
`;

function Input({ type, name, value, onChange }: IInputProps) {
  return (
    <StyledInput
      type={type || "text"}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default memo(Input);
