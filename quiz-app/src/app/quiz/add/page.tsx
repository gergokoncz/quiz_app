"use client";

import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FormEvent, useRef, useState } from "react";

const AddQuizPage: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);

  const quizCreatorRef = useRef<HTMLInputElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const quizData = {};
  };

  return (
    <Container className="flex flex-col max-w-xs">
      <Form className="flex flex-col" onSubmit={submitFormHandler}>
        <Form.Group className="flex flex-col mx-auto my-2 rounded-lg">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">
            quiz creator
          </Form.Label>
          <Form.Control
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={quizCreatorRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="flex flex-col mx-auto my-2 rounded-lg max-w-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">token</Form.Label>
          <Form.Control
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={tokenRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="flex flex-col mx-auto my-2 rounded-lg max-w-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">quiz theme</Form.Label>
          <Form.Control
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={themeRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="flex flex-col mx-auto my-2 rounded-lg max-w-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">
            description
          </Form.Label>
          <Form.Control
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={descriptionRef}
          ></Form.Control>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddQuizPage;
