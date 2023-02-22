import React, {useEffect, useState} from 'react';
import RightNavbar from "./RightNavbar";
import styled from "styled-components";
import styles from "@/styles/Navbar.module.css"

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: sticky;
  z-index: 20;  
  display: none;

  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 3px;
    background-color: ${({ open }) => open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


export default function Burger({navbar_text}) {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = !open ? 'auto' : 'hidden';
    }, [open]);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>

            <RightNavbar open={open} onClick={handleLinkClick} navbar_text={navbar_text}/>
            <div className={open ? styles.headerMobileMenuBlackout : ""}>

            </div>
        </>
    );
}