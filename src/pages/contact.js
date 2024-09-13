import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderContainer,
  FeaturedListingContainer,
  // FeaturedAgentsContainer,
  HomeContactContainer,
  FooterContainer,
} from "../containers";
import { selectRentals } from "../redux/selectors";
import { getRentals } from "../redux/actions";
import Loading from "../components/loading";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  // const listProperties = useSelector(selectRentals);

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    dispatch(getRentals());
  }, [dispatch]);

  // if (listProperties.length === 0) {
  //   return <Loading />
  // }

  return (
    <>
      <HeaderContainer bg="true" source="/images/banners/banner3.jpg" />
      <HomeContactContainer />
      <FooterContainer />
    </>
  );
};

export default Contact;
