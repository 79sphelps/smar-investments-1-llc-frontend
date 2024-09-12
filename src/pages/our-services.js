import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  //   HeaderContainer,
  OurServicesContainer,
  //   FeaturedListingContainer,
  // FeaturedAgentsContainer,
  //   HomeContactContainer,
  FooterContainer,
} from "../containers";
import { selectRentals } from "../redux/selectors";
import { getRentals } from "../redux/actions";
import Loading from "../components/loading";

import { Section } from "../components";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const listProperties = useSelector(selectRentals);

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    dispatch(getRentals());
  }, [dispatch]);

  if (listProperties.length === 0) {
    return <Loading />;
  }

  return (
    <>
      {/* <HeaderContainer bg="true" source="/images/banners/banner4.jpg" /> */}
      <OurServicesContainer bg="true" source="/images/banners/banner3.jpg" />
      {/* <FeaturedListingContainer /> */}
      {/* <HomeContactContainer /> */}
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer2>

          <Section.Header></Section.Header>
          <Section.Content2>
            <Section.Flex2>
              <Section.FlexItem width="90%">
                <Section.SubTitle size="1">
                  Looking For A Home?
                </Section.SubTitle>
                <Section.Text2>
                  SMAR Investments 1, LLC has been been
                  part of the real estate and property management industry in
                  the area since 2022. We are a locally owned company dedicated
                  to helping residents find quality living spaces.
                  <br /> <br />
                  We manage a roster of properties in Portland, convenient to
                  restaurants, dining and entertainment options. Our apartments
                  present a variety of amenities and features and each of our
                  buildings has its own personality.
                  <br /> <br />
                  We provide professional management, responsive maintenance and
                  exceptional locations. View our current vacancies and fill out
                  an application to reserve your space today.
                  <br /> <br />
                  If you are moving to or within Portland, Oregon, make it easy
                  on yourself. Choose your next apartment through SMAR. We are
                  local, experienced, and we care.
                </Section.Text2>
              </Section.FlexItem>
            </Section.Flex2>
          </Section.Content2>
        </Section.InnerContainer2>
      </Section>
      <FooterContainer />
    </>
  );
};

export default OurServices;
