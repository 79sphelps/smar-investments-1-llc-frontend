import React from "react";
import { Footer } from "../components";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Content>
          <Footer.Item>
            <Footer.Title>SMAR Investments 1, LLC</Footer.Title>
            <Footer.Text>
              12021 SE 104th Ct, Happy Valley, OR 97086
            </Footer.Text>
            <Footer.List style={{ }}>
              <Footer.ListItem>
                <Footer.Icon name="fas fa-phone-alt" social="true" />
                <Footer.Text>+503-462-2135</Footer.Text>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-whatsapp" social="true" />
                <Footer.Text>+503-462-2135</Footer.Text>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="far fa-envelope" social="true" />
                <Footer.Text>smarinvestments1llc@gmail.com</Footer.Text>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            {/* <Footer.Subtitle>Quick Links</Footer.Subtitle> */}
            <Footer.Title>Quick Links</Footer.Title>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Anchor to="/">Home</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/listings">Properties</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/our-services">Our Services</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/faq">FAQs</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/contact">Contact</Footer.Anchor>
              </Footer.ListItem>
              {/* <Footer.ListItem>
                <Footer.Anchor to="/dashboard">Account</Footer.Anchor>
              </Footer.ListItem> */}
              <Footer.ListItem>
                <Footer.Anchor to="/">Login</Footer.Anchor>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            <Footer.Subtitle>Social Links</Footer.Subtitle>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-facebook-f" social="true" />{" "}
                <Footer.ExternalAnchor to="">Facebook</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-twitter" social="true" />{" "}
                <Footer.ExternalAnchor to="">Twitter</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-linkedin" social="true" />{" "}
                <Footer.ExternalAnchor to="">Linkedin</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-youtube" social="true" />{" "}
                <Footer.ExternalAnchor to="">YouTube</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-instagram" social="true" />{" "}
                <Footer.ExternalAnchor to="">Instagram</Footer.ExternalAnchor>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            <Footer.Subtitle>Download Apps</Footer.Subtitle>
            <Footer.AppDiv>
              <Footer.Anchor to="" app="true">
                <Footer.Icon name="fab fa-google-play" app="true" />
                <Footer.Google>
                  <Footer.Subtitle min="true">Google Play</Footer.Subtitle>
                  <Footer.Text blur>Get It Now</Footer.Text>
                </Footer.Google>
              </Footer.Anchor>
            </Footer.AppDiv>
            <Footer.AppDiv>
              <Footer.Anchor to="" app="true">
                <Footer.Icon name="fab fa-apple" app="true" />
                <Footer.Apple>
                  <Footer.Subtitle min="true">App Store</Footer.Subtitle>
                  <Footer.Text blur>Get It Now</Footer.Text>
                </Footer.Apple>
              </Footer.Anchor>
            </Footer.AppDiv>
          </Footer.Item>
        </Footer.Content>
      </Footer.Container>
      <Footer.Bottom>
        <Footer.Container>
          <Footer.Text>&copy; SMAR Investments 1, LLC - All Rights Reserved</Footer.Text>
        </Footer.Container>
      </Footer.Bottom>
    </Footer>
  );
};

export default FooterContainer;
