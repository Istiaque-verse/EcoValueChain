import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import {
  FooterSection,
  Brand,
  BrandName,
  Tagline,
  InfoGroup,
  InfoLabel,
  InfoText,
  Divider,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <FooterSection>
      <Container>
        <Row gutter={[32, 32]}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Brand>
              <BrandName>Eco Value Chain</BrandName>
              <Tagline>
                Building sustainable, transparent value chains for a greener future.
              </Tagline>
            </Brand>
          </Col>

          <Col lg={12} md={12} sm={24} xs={24}>
            <InfoGroup>
              <InfoLabel>Address</InfoLabel>
              <InfoText>Sylhet, Bangladesh</InfoText>
            </InfoGroup>

            <InfoGroup>
              <InfoLabel>Email</InfoLabel>
              <InfoText>
                <a href="mailto:ecovaluechain@gmail.com">
                  ecovaluechain@gmail.com
                </a>
              </InfoText>
            </InfoGroup>
          </Col>
        </Row>

        <Divider />

        <Row justify="center">
          <InfoText style={{ fontSize: 12 }}>
            © {new Date().getFullYear()} Eco Value Chain. All rights reserved.
          </InfoText>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
