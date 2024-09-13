import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { HeaderWrapper, Banner, Jumbotron } from "../components";
import {
  // AdvancedSearchContainer,
  SideNavigationContainer,
} from "./index";
// import links from "../constants/routes/nav-links";

const OurServicesContainer = ({ bg, source }) => {
  // const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  // const { isAuthenticated, loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  // const [fixed, setFixed] = useState(false);
  let fixed = false;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: window.location.origin,
  //   });

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };

  const changeBackgroundColorAndPosition = () => {
    // if (window.pageYOffset > 100) {
    if (window.scrollY > 100) {
      fixed = true; // setFixed(true);
    } else {
      fixed = false; // setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  };

  const size = useWindowSize();

  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          { size.width > 1014 ? ( 
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link
              style={{ textDecoration: "none" }}
              className="animate__animated animate__bounce"
              bg={bg}
              fixed={fixed}
              to="/"
            >
              SMAR Investments 1, LLC
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
          ) : null }
          <HeaderWrapper.LinksContainer>
            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor
                  to="/"
                  special="true"
                  style={{ textDecoration: "none" }}
                >
                  {size.width > 1262 ? (
                    <i className="fa fa-fw fa-home">&nbsp;</i>
                  ) : null}
                  Home
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>

            {/* <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor
                  to="/availability"
                  special="true"
                  style={{ textDecoration: "none" }}
                >
                  {size.width > 1262 ? (
                    <i className="fas fa-chart-line">&nbsp;</i>
                  ) : null}
                  Availability
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List> */}

            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor
                  to="/screening-criteria"
                  special="true"
                  style={{ textDecoration: "none" }}
                >
                  {size.width > 1262 ? (
                    <i className="fas fa-chart-line">&nbsp;</i>
                  ) : null}
                  Screening Criteria
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>

            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor
                  to="/faq"
                  special="true"
                  style={{ textDecoration: "none" }}
                >
                  {size.width > 1262 ? (
                    <i className="fa fa-question-circle">&nbsp;</i>
                  ) : null}
                  FAQ
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>

            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor
                  to="/contact"
                  special="true"
                  style={{ textDecoration: "none" }}
                >
                  {size.width > 1262 ? (
                    <i className="fa fa-user-circle-o">&nbsp;</i>
                  ) : null}
                  Contact
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>

            <HeaderWrapper.List side="side">
              <HeaderWrapper.Item>
                <HeaderWrapper.Button onClick={handleSideNavigation}>
                  <HeaderWrapper.Icon name="fa fa-bars" />
                </HeaderWrapper.Button>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
          </HeaderWrapper.LinksContainer>
        </HeaderWrapper.Container>
      </HeaderWrapper>

      {bg === "true" && (
        <Jumbotron>
          <Jumbotron.Left>
            <Jumbotron.Title>Find Your Home Here</Jumbotron.Title>
            <Jumbotron.Text>
              {/* Fresh Ideas | Personal Service | Proven Results */}
              Our Services
            </Jumbotron.Text>
          </Jumbotron.Left>
          {/* <Jumbotron.Right> */}
          {/* <AdvancedSearchContainer /> */}
          {/* <img src='https://jls-documents-prod.s3.amazonaws.com/public/users/300002725-3204b409/Tessa%20body%20shot_clipped_rev_2.png' 
              style={{ width: "72%", }}
            /> */}
          {/* </Jumbotron.Right> */}
        </Jumbotron>
      )}
      <SideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
      />
    </Banner>
  );
};

export default OurServicesContainer;
