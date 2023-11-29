
"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
    return (
      <>
        <Navbar expand="md" variant="dark" className="w-full min-h-20 bg-dfds-main sticky top-0">
          <Container fluid>
              <Navbar.Brand href="/">
                <Container className="flex flex-col text-center">
                  <Image
                    src="/dfdslogo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                  />
                </Container>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                data-bs-target="#navbarScroll"
              />
              <Navbar.Collapse id="navbarScroll" className="ms-auto">
                <Nav className="ml-auto">
                  <Nav.Item className="my-2 mr-4"> 
                    <Link href="/quiz/add" className="flex items-end justify-center no-underline text-dfds-main h-12 rounded-lg bg-white font-bold px-4 align-middle hover:text-dfds-light shadow-inner">
                      <p>Create Quiz</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="my-2 mr-4">
                    <Link href="/quiz" className="flex items-end justify-center no-underline text-dfds-main h-12 rounded-lg bg-white font-bold px-4 align-middle hover:text-dfds-light shadow-xl">
                      <p>Take Quiz</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="my-2 mr-4">
                    <Link href="/quiz" className="flex items-end justify-center no-underline text-dfds-main h-12 rounded-lg bg-white font-bold px-4 align-middle hover:text-dfds-light shadow-xl">
                      <p>Run Quiz</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="my-2 mr-4">
                    <Link href="/contact" className="flex items-end justify-center no-underline text-dfds-main h-12 rounded-lg bg-white font-bold px-4 align-middle hover:text-dfds-light shadow-xl">
                      <p>Contact</p>
                    </Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
  };

export default Navigation;