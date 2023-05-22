import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Row>
              <Col span={7}>
                <Input
                  type="text"
                  name="voornaam"
                  placeholder=""
                  value={values.voornaam || ""}
                  onChange={handleChange}
                />
                <ValidationType type="voornaam" />
              </Col>
              <Col span={7}>
                <Input
                  type="text"
                  name="tussenvoegsel"
                  placeholder=""
                  value={values.tussenvoegsel || ""}
                  onChange={handleChange}
                />
                <ValidationType type="tussenvoegsel" />
              </Col>
              <Col span={10}>
                <Input
                  type="text"
                  name="achternaam"
                  placeholder=""
                  value={values.achternaam || ""}
                  onChange={handleChange}
                />
                <ValidationType type="achternaam" />
              </Col>
              </Row>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Row>
              <Col span={18}>
                <Input
                  type="text"
                  name="straat"
                  placeholder="Straatnaam"
                  value={values.straatnaam || ""}
                  onChange={handleChange}
                />
                <ValidationType type="straat" />
              </Col>
              <Col span={6}>
                <Input
                  type="text"
                  name="huisnummer"
                  placeholder="Huisnr."
                  value={values.huisnummer || ""}
                  onChange={handleChange}
                />
                <ValidationType type="huisnummer" />
              </Col>
              </Row>
              <Row>
              <Col span={12}>
                <Input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={values.postcode || ""}
                  onChange={handleChange}
                />
                <ValidationType type="postcode" />
              </Col>
              <Col span={12}>
                <Input
                  type="text"
                  name="plaats"
                  placeholder="Plaatsnaam"
                  value={values.plaats || ""}
                  onChange={handleChange}
                />
                <ValidationType type="plaats" />
              </Col>
              </Row>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
