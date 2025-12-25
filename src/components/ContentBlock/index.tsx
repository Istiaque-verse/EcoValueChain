import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  ProductCardWrapper,
  ProductCard,
  ProductName,
  ProductPills,
  ProductPill,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const isProductSection = id === "product";
  const productData = isProductSection ? (content as any) : null;

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          {/* Image column */}
          <Col
            lg={isProductSection ? 9 : 11}
            md={isProductSection ? 10 : 11}
            sm={12}
            xs={24}
          >
            <SvgIcon
              src={icon}
              width={isProductSection ? "140%" : "110%"}
              height={isProductSection ? "415%" : "410%"}
            />
          </Col>

          {/* Text + (optional) product card */}
          <Col
            lg={isProductSection ? 9 : 11}
            md={isProductSection ? 20 : 20}
            sm={11}
            xs={24}
          >
            <ContentWrapper>
              {isProductSection ? (
                <>
                  <h6>{t(title)}</h6>
                  {productData?.text && (
                    <Content>{t(productData.text)}</Content>
                  )}

                  <ProductCardWrapper>
                    <ProductCard>
                      <ProductName>
                        {productData?.title || t(title)}
                      </ProductName>
                      <ProductPills>
                        <ProductPill>
                          Unit price: {productData?.unitPrice}
                        </ProductPill>
                        <ProductPill>
                          Current stock: {productData?.currentStock}{" "}
                          {productData?.unitLabel}
                          {productData?.currentStock === 1 ? "" : "s"}
                        </ProductPill>
                        <ProductPill>
                          Total sold: {productData?.totalSold}
                        </ProductPill>
                      </ProductPills>
                    </ProductCard>
                  </ProductCardWrapper>
                </>
              ) : (
                <>
                  <h6>{t(title)}</h6>
                  <Content>{t(content as string)}</Content>
{direction === "right" ? (
  <ButtonWrapper>
    {typeof button === "object" &&
      button?.map(
        (
          item: {
            color?: string;
            title: string;
          },
          idx: number
        ) => (
          <Button
            key={idx}
            color={item.color}
            onClick={() => scrollTo("about")}
          >
            {t(item.title)}
          </Button>
        )
      )}

    {/* Facebook icon ONLY for intro section */}
    {id === "intro" && (
      <a
        href="https://www.facebook.com/share/17k3vs1aST/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "0.75rem",
          marginTop: "2px",
        }}
      >
        <img
          src="/img/svg/facebook-svgrepo-com.svg"
          alt="EcoValue Chain on Facebook"
          style={{ width: 28, height: 28, display: "block" }}
        />
      </a>
    )}
  </ButtonWrapper>
) : (
  <ServiceWrapper>
    <Row justify="space-between">
      {typeof section === "object" &&
        section?.map(
          (
            item: {
              title: string;
              content: string;
              icon: string;
            },
            idx: number
          ) => (
            <Col key={idx} span={11}>
              <SvgIcon src={item.icon} width="60px" height="60px" />
              <MinTitle>{t(item.title)}</MinTitle>
              <MinPara>{t(item.content)}</MinPara>
            </Col>
          )
        )}
    </Row>
  </ServiceWrapper>
)}



                </>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
