import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import {useHistory} from "react-router-dom";
import {scroller} from "react-scroll";



const Header = ({ t }: any) => {

  const history = useHistory();
  const scrollTarget = (target: any) => scroller.scrollTo(target, {smooth: true, duration: 700, offset: -50});

  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollToPage = async (target: any) => {
      if (history.location.pathname !=='/') {
          await history.push('/');
      }
      scrollTarget(target);
  };

  /*  const scrollTo = async (id: string) => {
      if (history.location.pathname !=='/') {
        await history.push('/');
    }
      const element = document.getElementById(id) as HTMLDivElement;
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      setVisibility(false);
     
    }; */
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollToPage("product")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollToPage("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollToPage("about")}>
          <Span>{t("Product")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollToPage("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "80px" }}
          onClick={(e) => {
            e.preventDefault();
            
            window.location.href='/login';
            }}
        >
          <Span>
            <Button>{t("Login")} </Button>
          </Span>
        </CustomNavLinkSmall>
      </>
      
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logosjk.png" width="195px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
