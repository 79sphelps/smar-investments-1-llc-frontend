import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section, Loading } from "../components";
import { ListingItemContainer } from "./index";
import { getRentals } from "../redux/actions";
import { selectRentals } from "../redux/selectors";

const FeaturedListingContainer = () => {
  const dispatch = useDispatch();
  const listProperties = useSelector(selectRentals);

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    if (listProperties.length === 0) {
      dispatch(getRentals());
    }
  }, [dispatch]);

  // if (listProperties.length === 0) {
  //   return <Loading />
  // }

  return (
    <Section bgColor="--bs-light">
      {listProperties && Array.isArray(listProperties) ? (
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title>Featured Properties</Section.Title>
          </Section.Header>
          <Section.Content>
            {listProperties.map((featured, idx) => (
              <ListingItemContainer key={idx} featured={featured} />
            ))}
          </Section.Content>
          <Section.Footer>
            <Section.Button>More Properties</Section.Button>
          </Section.Footer>
        </Section.InnerContainer>
      ) : null}
    </Section>
  );
};

export default FeaturedListingContainer;
