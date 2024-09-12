import React from "react";
import {
  Container,
  Header,
  Title,
  Footer,
  Button,
  Content,
  Content2,
  InnerContainer,
  InnerContainer2,
  SubTitle,
  Center,
  Text,
  Text2,
  Flex,
  Flex2,
  FlexItem,
  Shadow,
} from "./styles/sections";

import "animate.css";

const Section = ({ children, bgColor, ...restProps }) => {
  return (
    <Container {...restProps} bgColor={bgColor}>
      {children}
    </Container>
  );
};
Section.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
Section.Title = ({ children, ...restProps }) => {
  return (
    <Title className="animate__animated animate__backInLeft" {...restProps}>
      {children}
    </Title>
  );
};

Section.SubTitle = ({ children, size, ...restProps }) => {
  return (
    <SubTitle
      className="animate__animated animate__fadeInRight"
      {...restProps}
      size={size}
    >
      {children}
    </SubTitle>
  );
};
Section.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Section.Text2 = ({ children, ...restProps }) => {
  return <Text2 {...restProps}>{children}</Text2>;
};

Section.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Section.Content2 = ({ children, ...restProps }) => {
  return <Content2 {...restProps}>{children}</Content2>;
};

Section.Center = ({ children, ...restProps }) => {
  return <Center {...restProps}>{children}</Center>;
};
Section.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};
Section.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Section.InnerContainer = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};

Section.InnerContainer2 = ({ children, ...restProps }) => {
  return <InnerContainer2 {...restProps}>{children}</InnerContainer2>;
};

Section.Flex = ({ children, ...restProps }) => {
  return <Flex {...restProps}>{children}</Flex>;
};

Section.Flex2 = ({ children, ...restProps }) => {
  return <Flex2 {...restProps}>{children}</Flex2>;
};

Section.FlexItem = ({ children, bg, relative, flexStart, ...restProps }) => {
  return (
    <FlexItem bg={bg} relative={relative} flexStart={flexStart} {...restProps}>
      {children}
    </FlexItem>
  );
};
Section.Shadow = ({ children, bg, relative, flexStart, ...restProps }) => {
  return <Shadow {...restProps}>{children}</Shadow>;
};

export default Section;
