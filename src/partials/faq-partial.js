import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { Property } from "../components";

export const HowDoIApplyForAnAppartment = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>How Do I Apply for an Appartment?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };
  
  export const WillYouRentToMeIfIHaveBeenEvicted = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Will You Rent to Me if I Have Been Evicted?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };

  export const IWantToMoveOutWhatDoIDo = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>I Want to Move Out What Do I Do?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };
  
  export const WhatAreYourLeaseOptions = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>What Are Your Lease Options?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };
  
  export const WhatAreTheUpfrontCostsToMoveIn = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>What Are the Upfront Costs to Move In?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };
  
  export const DoYouScreenYourResidentsAndHowMuch = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Do You Screen Your Residents and How Much?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };
  
   
  export const IsTheScreeningChargeRefundable = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Is the Screening Charge Refundable?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };

  export const DoYouAcceptPets = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Do You Accept Pets?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };

  export const AreTheApartmentsWheelchairAccessible = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Are the Apartments Wheelchair Accessible?</Property.InfoTitle>
          <Property.Icon
            name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            info></Property.Icon>
        </Property.InfoHeader>
        <Property.InfoContent block="true" contentShown={descriptionShown}>
          <Property.Text>{description}</Property.Text>
        </Property.InfoContent>
      </Property.Info>
    );
  };
