import styled from "styled-components";

export const OtpGroup = styled("div")`
  display: flex;
  width: 100%;
  max-width: 360px;
  column-gap: 10px;
  margin: auto;
  width: 50%;
  padding-top: 100px;
  padding-bottom: 10px;
`;

export const OtpInput = styled("input")`
  width: 100%;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  padding-top: 1rem;
  margin: auto;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;


  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const FormGroup = styled("form")`


  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
display: table;
margin: 0 auto;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 1.875rem;
  padding: 0 0.675rem;
`;