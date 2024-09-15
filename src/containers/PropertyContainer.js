import React, { useEffect } from "react";
import { ContactAgentContainer } from "./index";
import { Section, Property } from "../components";
import {
  PropertGallery,
  PropertyAdditionalDetails,
  PropertyAddress,
  PropertyDescription,
} from "../partials/property_features_partial.js";

const PropertyContainer = ({ property }) => {
  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }, []);

  return (
    <Section bgColor="--bs-fade-info">
      <Section.InnerContainer>
        <Property.Header>
          <Property.HeaderLeft>
            <Property.Title>{property.address}</Property.Title>
            <Property.Location>
              <Property.Icon name="fas fa-map-marker-alt"></Property.Icon>
              <Property.Text>{property.city}</Property.Text>
            </Property.Location>
          </Property.HeaderLeft>
          <Property.HeaderRight>
            <Property.Title>
              Rent {"   "}
              {property.rent}
              <Property.Span>
                {property.type === "rental" ? "/ Month" : ""}
              </Property.Span>
            </Property.Title>
          </Property.HeaderRight>
        </Property.Header>
        <Property.Content>
          <Property.Left>
            <PropertGallery image={property.images} />
            {/* <PropertyFeatures features={property.features} /> */}
            {/* <PropertyAmenities amenities={property.amenities} /> */}
            {/* <PropertyAddress address={property.address} /> */}
            <PropertyAddress
              address={{
                street: property.address,
                city: property.city,
                state: property.state,
                zip: property.zip,
              }}
            />
            <PropertyAdditionalDetails property={property} />
            <PropertyDescription description={property.description} />
          </Property.Left>
          <Property.Right>
            <ContactAgentContainer property={property} />
            {/* <PropertyRelatedContainer
                    property={property}
                    featured={filteredFeatured}
                  /> */}
          </Property.Right>
        </Property.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default PropertyContainer;
