import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { Property } from "../components";

export const RentalAgreements = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Rental Agreements</Property.InfoTitle>
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
  
  export const ScreeningCharge = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Screening Charge</Property.InfoTitle>
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

  export const SecurityDeposit = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Security Deposit</Property.InfoTitle>
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
  
  export const ApplicantIdentification = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Applicant Identification</Property.InfoTitle>
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
  

  export const ApplicantRentalHistory = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Applicant Rental History</Property.InfoTitle>
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
  
  export const ApplicantSufficientIncome = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Applicant Sufficient Income</Property.InfoTitle>
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
  
   
  export const CreditAndCriminalHistory = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Credit and Criminal History</Property.InfoTitle>
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

  export const NonQualifyingApplications = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Non-Qualifying Applications</Property.InfoTitle>
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


  export const EqualHousing = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Equal Housing</Property.InfoTitle>
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


  export const OccupancyStandards = ({ description }) => {
    const [descriptionShown, setContentShown] = useState(false);
  
    const contentHandler = () => {
      setContentShown((previousState) => !previousState);
    };
    return (
      <Property.Info>
        <Property.InfoHeader onClick={contentHandler}>
          <Property.InfoTitle>Occupancy Standards</Property.InfoTitle>
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