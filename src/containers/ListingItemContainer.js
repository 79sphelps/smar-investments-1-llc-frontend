import React from "react";
import { useNavigate } from "react-router-dom";
import { Listing, Loading } from "../components";

const ListingItemContainer = ({ featured, width }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* {featured && featured.images ? ( */}
      {featured ? (
        <Listing width={width}>
          <Listing.Top>

            { featured.images && featured.images[0] ? (
              <Listing.Image loading="lazy" source={featured.images[0]} onClick={() => navigate(`/rentals/${featured._id}`)}/>
            ) : (
              <Loading />
            )}
            {/* <Listing.Image source={featured.images[0]} loading="lazy" onClick={() => navigate(`/rentals/${featured._id}`)}/> */}
            
            <Listing.TopItem>
              <Listing.TopItemContainer>
                <Listing.TopItemInfo>
                  <Listing.Icon></Listing.Icon>
                  <Listing.Text location >
                    {featured && featured.address}
                  </Listing.Text>
                </Listing.TopItemInfo>
              </Listing.TopItemContainer>
            </Listing.TopItem>
          </Listing.Top>
          <Listing.Bottom>
            <Listing.BottomItem>
              <Listing.Title>
                <Listing.Anchor to={`/rentals/${featured._id}`} style={{textDecoration: 'none'}}>
                  {featured && featured.address}
                </Listing.Anchor>
              </Listing.Title>
              <Listing.Price>Rent: {featured.rent}/mon</Listing.Price>
              <Listing.Text description>
                {featured.description && featured.description.substring(0, 100)}
              </Listing.Text>
              <Listing.Button>
                <Listing.Anchor to={`/rentals/${featured._id}`} style={{textDecoration: 'none'}}>
                  Details
                </Listing.Anchor>
              </Listing.Button>

              <Listing.AgentContainer>
                <Listing.AgentImageContainer>
                  <Listing.Image
                    // src={`/images/agents/${featured.agent.image}`}
                    src="https://jls-documents-prod.s3.amazonaws.com/public/users/300002725-3204b409/Tessa%20body%20shot_clipped_rev_2.png"
                    profile="true"
                  />
                </Listing.AgentImageContainer>
                <Listing.AgentName>
                  {/* <Listing.Anchor to={`/agents/${featured.agent.name}`}>
                {featured.agent.name}
              </Listing.Anchor> */}
                  <Listing.Anchor to={`/listings`} style={{textDecoration: 'none'}}>Rachel Phelps</Listing.Anchor>
                </Listing.AgentName>
              </Listing.AgentContainer>
            </Listing.BottomItem>
          </Listing.Bottom>
        </Listing>
      ) : null}
    </>
  );
};

export default ListingItemContainer;
