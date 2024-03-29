import React from 'react';
import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io";
import Link from "next/link"
import styles from "@/styles/Navbar.module.css"
import {useRouter} from "next/router";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  
  
  @media (max-width: 820px) {
    flex-flow: column;
    background-color: #FFFFFF;
    opacity: 0.95;
    z-index: 10;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 270px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;


export default function RightNavbar(props) {
    const router = useRouter();
    const { locales, locale: activeLocale } = router;



    const otherLocales = locales?.filter(
        (locale) => locale !== activeLocale
    );

    return (
        <Ul open={props.open}>
            <li className={styles.nav__listitem}>
                <Link href="/" onClick={props.onClick}>{props.navbar_text.home}</Link>
            </li>
            <li className={`${styles.dropdown} ${styles.nav__listitem}`}>
                <Link href="" onClick={(event) => event.preventDefault()}>
                    {props.navbar_text.services}
                    <IoIosArrowDown size={13}/>
                </Link>
                <ul className={styles.nav__listitemdrop}>
                    <li>
                        <Link href="/terrace-construction" onClick={props.onClick}>{props.navbar_text.construction}</Link>
                    </li>
                    <li>
                        <Link href="/floor-resurfacing" onClick={props.onClick}>{props.navbar_text.repair}</Link>
                    </li>
                    <li>
                        <Link href="/consultation" onClick={props.onClick}>{props.navbar_text.consultations}</Link>
                    </li>
                </ul>

            </li>
            <li className={styles.nav__listitem}>
                <Link href="/gallery" onClick={props.onClick}>{props.navbar_text.gallery}</Link>
            </li >

            {/*<li className={styles.nav__listitem}>*/}
            {/*    <Link href="components#price">{props.navbar_text.price}</Link>*/}
            {/*</li>*/}

            <li className={styles.nav__listitem}>
                <Link href="/contact" onClick={props.onClick}>{props.navbar_text.contacts}</Link>
            </li>

            <div className={styles.linkButton}>
                <Link href="/offer" onClick={props.onClick}>{props.navbar_text.offer}</Link>
            </div>

            <li className={`${styles.dropdown} ${styles.nav__listitem} ${styles.language}`}>
                {otherLocales?.map((locale) => {
                    const { pathname, query, asPath } = router;

                    return(
                        <span key={"locale-" + locale}>
                            <Link href={{ pathname, query }} as={asPath} locale={locale}>

                                    {locale === "ru" ? "Русский" : locale === "ee" ? "Eesti" : null}
                            </Link>
                        </span>
                    )
                })}
            </li>

        </Ul>
    );
}