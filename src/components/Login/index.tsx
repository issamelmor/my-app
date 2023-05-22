import { useMemo } from "react";
import { ButtonContainer, FormGroup, OtpGroup, OtpInput, Span } from "./styles";
import { RE_DIGIT } from './constants';
import { Fade, Zoom } from "react-awesome-reveal";
import { Col, Row } from "antd";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import { ValidationTypeProps } from "./types";



export type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

export default function LoginBlock({ value, valueLength, onChange }: Props) {

  

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Submitting code to API");
  // };

  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

    // only delete digit if next input element has no value
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    // keep the selection range position
    // if the same digit was typed
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== 'Backspace' || targetValue !== '') {
      return;
    }

    focusToPrevInput(target);
  };
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    // keep focusing back until previous input
    // element has value
    const prevInputEl =
      target.previousElementSibling as HTMLInputElement | null;

    if (prevInputEl && prevInputEl.value === '') {
      return prevInputEl.focus();
    }

    target.setSelectionRange(0, target.value.length);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any

  console.log(valueItems)
  ;

  return (
    <Fade direction="up">
      <Row justify="space-between" align="middle">
        <Col lg={24} md={24} sm={12} xs={12}>
          <FormGroup autoComplete="off" onSubmit={handleSubmit}>
            <OtpGroup>
              {valueItems.map((digit, idx) => (
                <OtpInput
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="\d{1}"
                  maxLength={valueLength}
                  className="otp-input"
                  value={digit}
                  onChange={(e) => inputOnChange(e, idx)}
                  onKeyDown={inputOnKeyDown}
                  onFocus={inputOnFocus}
                />
                
              ))}
             
            </OtpGroup>
            <ValidationType type="otp" />
            <ButtonContainer>
              <Button name="submit">Login</Button>
            </ButtonContainer>
          </FormGroup>

        </Col>
        <Row justify="space-between" align="middle">
          <Col lg={24} md={24} sm={12} xs={12}>

          </Col>
        </Row>
      </Row>

    </Fade>
  );
}