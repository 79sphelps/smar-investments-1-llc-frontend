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
  RentalAgreements,
  ScreeningCharge,
  SecurityDeposit,
  ApplicantIdentification,
  ApplicantRentalHistory,
  ApplicantSufficientIncome,
  CreditAndCriminalHistory,
  NonQualifyingApplications,
  EqualHousing,
  OccupancyStandards,
} from "../partials/screening-criteria-partial";

const ScreeningCriteria = () => {
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
        <Section.InnerContainer>
          <Property.Content>
            <Property.Left>
              <RentalAgreements
                description={
                  "We process Rental Agreements on a first come, first serve basis, and process only one agreement at a time."
                }
              />

              <ScreeningCharge
                description={
                  "A $50.00 screening charge is required at the time of completing the Rental Agreement."
                }
              />

              {/* <SecurityDeposit
                description={
                    "The first month’s rent is pro-rated and a minimum $500.00 security deposit is charged and payable at the time you move in."
                }
                /> */}

              <ApplicantIdentification
                description={
                    `Applicants must show two (2) pieces of identification. One must be picture I.D. The provided ID must allow the Owner/Agent to adequately screen for criminal and/or credit history.  Accepted forms of ID can include any government issued ID regardless of expiration date, a valid resident alien card, immigrant visa or non-immigrant visa. Any non-government ID or a combination of ID’s that permit a reasonable verification of identity may also be considered.`
                }
                />

                <ApplicantRentalHistory
                description={
                    "1) Three (3) years of verifiable rental history from unbiased/unrelated sources. 2) Applicant must provide us with the information necessary to contact past landlords. We reserve the right to deny a Rental Agreement if after making a good faith effort, we are unable to verify prior rental history. 3) Allowances may be made for applicants who provide qualified co-signers or pay a higher security deposit."
                }
                />

                <ApplicantSufficientIncome
                description={
                    "Verifiable income must be 3 times the monthly rent. An exception is applied within the City of Portland, where the financially responsible applicants’ income must be 2 – 2.5 times the amount depending on if the rent is either below or above 80% of MFI as published by the Portland Housing Bureau. *Financially responsible applicant’s income must be from a legal verifiable source and provide the information necessary to verify income and resources through employer contact, pay stubs, and/or bank records." +
                    "If applicant will be using local, state or federal housing assistance as a source of income, “stated rent” is the portion of the rent that will be payable by applicant and excludes any portion of the rent that will be paid through the assistance program." + 
                    "Applicants must provide us with information necessary to verify income and resources through employer contact, pay stubs, tax records, and/or bank statements." +
                    "Income must be reasonably stable and not temporary" +
                    "Allowances may be made for applicants who provide us with co-signers or additional security. Cosigners must have a monthly income at least 3 times the rental amount and less than $100 ODB."
                }
                />

                <CreditAndCriminalHistory
                description={
                    ""
                }
                />

                <NonQualifyingApplications
                description={
                    ""
                }
                />

                <EqualHousing
                description={
                    ""
                }
                />

                <OccupancyStandards
                description={
                    ""
                }
                />
            </Property.Left>
          </Property.Content>
        </Section.InnerContainer>
      </Section>
      {/* <HomeContactContainer /> */}
      <FooterContainer />
    </>
  );
};

export default ScreeningCriteria;
