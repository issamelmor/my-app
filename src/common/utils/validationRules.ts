import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.voornaam) {
    errors.voornaam = "Verplicht";
  }
  if (!values.achternaam) {
    errors.achternaam = "Verplicht";
  }
  if ((values.email) && (!/\S+@\S+\.\S+/.test(values.email))) {
    errors.email = "Email adres is onjuist";
  } 
  if (!values.straat) {
    errors.straat = "Verplicht";
  }
  if (!values.huisnummer) {
    errors.huisnummer = "Verplicht";  
  }
  if (!values.postcode) {
    errors.postcode = "Verplicht";
  }
  if (!values.plaats) {
    errors.plaats = "Verplicht";
  }
  
  if (!values.message) {
    errors.message = "Verplicht";
  }

  if (!values.otp) {
    errors.otp = "Onjuiste code.";
  }


  
  return errors;
}
