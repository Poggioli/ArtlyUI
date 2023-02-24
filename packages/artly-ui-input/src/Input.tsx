import { forwardRef } from "@artly-ui/core";
import { ChangeEvent, FocusEvent, useMemo, useState } from "react";
import {
  StyledFieldSet,
  StyledFlexContainer,
  StyledFlexContainerInput,
  StyledInput,
  StyledInputLabel,
  StyledLegend,
  StyledLegendSpan,
} from "./styles";
import { InputProps } from "./types";

const Input = forwardRef<"input", InputProps>(
  (
    {
      label,
      id,
      css,
      onFocus,
      onBlur,
      onChange,
      shape,
      placeholder,
      required,
      color,
      ...props
    },
    forwardedRef
  ) => {
    const newId = useMemo(() => id ?? Date.now(), [id]);
    const newLabel = useMemo(
      () => (!!required ? `${label} *` : label),
      [label, required]
    );
    const [hasFocus, setHasFocus] = useState(!!props.autoFocus);
    const [hasValue, setHasValue] = useState(!!props.value);
    const placeholderValue = useMemo(
      () => (hasFocus && !hasValue ? placeholder : ""),
      [hasFocus, hasValue, placeholder]
    );

    const handleOnFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
      setHasFocus((previousState) => !previousState);
      if (onFocus) {
        onFocus(event);
      }
    };

    const handleOnBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
      setHasFocus((previousState) => !previousState);
      if (onBlur) {
        onBlur(event);
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!event.target.value);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <StyledFlexContainer direction="column" css={css} color={color}>
        <StyledInputLabel
          htmlFor={newId}
          hasValue={hasValue}
          hasFocus={hasFocus}
          shape={shape}
        >
          {newLabel}
        </StyledInputLabel>
        <StyledFlexContainerInput align="center">
          <StyledInput
            {...props}
            ref={forwardedRef}
            id={newId}
            shape={shape}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleChange}
            placeholder={placeholderValue}
            color={color}
          />
          <StyledFieldSet shape={shape} aria-hidden>
            <StyledLegend hasValue={hasValue || hasFocus}>
              <StyledLegendSpan variant="auxiliary">
                {newLabel}
              </StyledLegendSpan>
            </StyledLegend>
          </StyledFieldSet>
        </StyledFlexContainerInput>
      </StyledFlexContainer>
    );
  }
);

export { Input };
