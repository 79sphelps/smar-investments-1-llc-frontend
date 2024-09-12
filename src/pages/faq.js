import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // HeaderContainer,
  OurServicesContainer,
  //   FeaturedListingContainer,
  // FeaturedAgentsContainer,
  // HomeContactContainer,

  FooterContainer,
} from "../containers";
// import { selectRentals } from "../redux/selectors";
// import { getRentals } from "../redux/actions";
// import Loading from "../components/loading";

import { Section, Property, Loading } from "../components";
// import {
//     PropertGallery,
//     PropertyAdditionalDetails,
//     PropertyAddress,
//     PropertyDescription,
//   } from "../partials/property_features_partial.js";
import {
  HowDoIApplyForAnAppartment,
  WillYouRentToMeIfIHaveBeenEvicted,
  IWantToMoveOutWhatDoIDo,
  WhatAreYourLeaseOptions,
  WhatAreTheUpfrontCostsToMoveIn,
  DoYouScreenYourResidentsAndHowMuch,
  IsTheScreeningChargeRefundable,
  DoYouAcceptPets,
  AreTheApartmentsWheelchairAccessible,
} from "../partials/faq-partial";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  //   const listProperties = useSelector(selectRentals);

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    // dispatch(getRentals());
  }, [dispatch]);

  //   if (listProperties.length === 0) {
  //     return <Loading />
  //   }

  return (
    <>
      {/* <HeaderContainer bg="true" source="/images/banners/banner3.jpg" /> */}
      <OurServicesContainer bg="true" source="/images/banners/banner3.jpg" />
    
      <Section bgColor="--bs-fade-info">
        {/* <Section.InnerContainer> */}
        <Section.InnerContainer2>
          <Property.Content2>
            {/* <Property.Left> */}
            <Property.Center>
              <HowDoIApplyForAnAppartment
                description={
                  "The application process is done through the individual managers of each building. Use either the phone number or contact form on the apartment’s page to contact the manager and they will assist you in viewing the apartment and completing the necessary paperwork."
                }
              />

              <WillYouRentToMeIfIHaveBeenEvicted
                description={
                  "We may still rent to you. Our decision will depend upon the date the eviction occurred, the reason for the eviction, and if any debt is still owed to the previous landlord."
                }
              />

              <IWantToMoveOutWhatDoIDo
                description={
                    `Please note that a written 30-day notice is required. A verbal notice does not qualify as an official notice you will be vacating. Contact the manager of your building to receive a vacate form and be sure to include your forwarding address. Your building’s manager can answer any other questions regarding moving out.`
                }
                />

                <WhatAreYourLeaseOptions
                description={
                    "All of our leases are month-to-month tenancies."
                }
                />

                <WhatAreTheUpfrontCostsToMoveIn
                description={
                    "The security deposit and prorated rent must be paid before you move in. The screening charge is paid at the time you complete the application for the apartment."
                }
                />

                <DoYouScreenYourResidentsAndHowMuch
                description={
                    "Yes, we review criminal history, public records, rental history, employment stability, and credit history on each prospective resident. The screening fee is $45.00 per adult listed on your lease agreement."
                }
                />

                <IsTheScreeningChargeRefundable
                description={
                    "The screening charge is non-refundable regardless of whether the application is approved."
                }
                />

                <DoYouAcceptPets
                description={
                    "No, we do not accept pets. Service and companion animals are welcome."
                }
                />

                <AreTheApartmentsWheelchairAccessible
                description={
                    "Not all of them are, please contact the manager listed on a property for further information about each location."
                }
                />
            </Property.Center>
          </Property.Content2>
          {/* </Property.Content> */}
        </Section.InnerContainer2>
        {/* </Section.InnerContainer> */}
      </Section>
      {/* <HomeContactContainer /> */}
      <FooterContainer />
    </>
  );
};

export default FAQ;
