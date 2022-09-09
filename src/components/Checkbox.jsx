import { useEffect, useRef } from "react";
import styled from "styled-components";
import { CHECKED_STATES } from "../constants/checkbox";

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: 400;
  font-family: Lato,Arial,serif;
  cursor: pointer;
`
const StyledInput = styled.input`
  margin-right: 8px;
  width: 18px;
  cursor: pointer;
`
const Checkbox = ({ id, label, value, onChange, disabled, dataTestId}) => {
    const checkboxRef = useRef();

    useEffect(() => {
        if (value === CHECKED_STATES.Checked) {
            checkboxRef.current.checked = true;
            checkboxRef.current.indeterminate = false;
        } else if (value === CHECKED_STATES.Empty) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = false;
        } else if (value === CHECKED_STATES.Indeterminate) {
            checkboxRef.current.checked = false;
            checkboxRef.current.indeterminate = true;
        }
    }, [value]);

    return (
        <StyledLabel>
            <StyledInput data-testid={dataTestId} disabled={disabled} id={id} ref={checkboxRef} type="checkbox" onChange={onChange} defaultValue="false" />
            {label}
        </StyledLabel>
    );
};

export default Checkbox;