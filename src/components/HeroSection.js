import React from 'react';
import styled, { keyframes } from 'styled-components';
import modelImage from '../img/n.JPG';     
import backgroundImage from '../img/bg.png'; // Import your background image

const HeroSection = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <StyledImage src={modelImage} alt="Model" />
      </ImageContainer>
      <TextContainer>
        <YearLabel>2024</YearLabel>
        <Name>Nesha Rodrigo</Name>
        <Tagline>The new face of your campaign</Tagline>
        <Description>
          I am an experienced professional Model and I typically accept photography & videography projects and promotions...
        </Description>
        <ArrowButton>→</ArrowButton>
      </TextContainer>
    </HeroContainer>
  );
};

export default HeroSection;

// Animations

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Pushes content to the right side */
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center/cover; /* Add background image */
  color: #fff;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center; /* Center content on smaller screens */
    padding: 2rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 5rem; /* Increased margin to push image further right */
  animation: ${slideInLeft} 1s ease-out, ${fadeIn} 2s ease-in;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const StyledImage = styled.img`
  border-radius: 25px;
  width: 80%; /* Responsive size adjustment */
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 2s ease-in;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const YearLabel = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.2rem;
  color: #ccc;
  animation: ${fadeIn} 2s ease-in 0.5s;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  animation: ${fadeIn} 2s ease-in 1s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.h2`
  color: #ff0000;
  margin-top: 1rem;
  animation: ${fadeIn} 2s ease-in 1.5s;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #ccc;
  animation: ${fadeIn} 2s ease-in 2s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ArrowButton = styled.button`
  margin-top: 2rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: #ff0000;
  cursor: pointer;
  transition: transform 0.2s;
  animation: ${fadeIn} 2s ease-in 2.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
