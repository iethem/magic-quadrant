import { memo } from "react";
import styled from "styled-components";

interface InputProps {
  type?: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  outline: 0;
`;

function Input({ type, name, value, onChange }: InputProps) {
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
