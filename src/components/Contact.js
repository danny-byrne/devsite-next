import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import { Input, Button } from '@mui/material';

import { STYLE_CONSTANTS } from "../constants";

const { mediaMinWidth } = STYLE_CONSTANTS;

/**
 * eventually implement OATH as described in https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
 *
 * nodemailer tuts: https://www.youtube.com/watch?v=Va9UKGs1bwI
 *
 * API from dev to prod : https://medium.com/the-andela-way/creating-a-react-redux-app-that-consumes-an-api-from-development-to-production-part-1-f03c5cc86ba
 *
 * .env on heroku https://stackoverflow.com/questions/49905070/how-to-add-env-file-or-otherwise-set-environment-variables-in-a-heroku-app
 */

const StyledContact = styled.div`
  .contact-form {
    width: 50vw;

    .textinput {
      margin-bottom: 20px;
    }

    .label {
      padding: 5px;
      font-size: 1.1rem;
    }

    .message {
      height: 40vh;
      margin-bottom: 20px;
    }

    .button {
      width: 20vw;
      height: 25px;
    }

    @media (max-width: ${mediaMinWidth}) {
      width: 90vw;
      .message {
        height: 40vh;
      }
      .textinput {
        height: 5vh;
      }
      button {
        width: 40vw;
      }
    }
  }
`;

const Contact = ({ resetPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const resetForm = () => {
    setName("");
    setMessage("");
    setEmail("");
    setSubject("");
    setButtonText("Send");
  };

  const formSubmit = async (e) => {
    e.preventDefault(e);
    setButtonText("...sending");

    const data = {
      name,
      email,
      message,
      subject,
    };

    emailjs
      .send(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USERID
      )
      .then(
        () => {
          resetForm();
          setSent(true);
          resetPage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContact>
      {sent ? (
        <h3>Contact Form Submitted!</h3>
      ) : (
        <div>
          <form
            className="contact-form fade-in"
            onSubmit={(e) => formSubmit(e)}
          >
            <input
              autoFocus
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              className="textinput"
              type="text"
              placeholder="Name"
              required
              value={name}
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              className="textinput"
              type="email"
              placeholder="your@email.com"
              required
              value={email}
            />

            <input
              onChange={(e) => setSubject(e.target.value)}
              id="subject"
              name="subject"
              className="textinput"
              type="text"
              placeholder="what would you like to talk about?"
              required
              value={subject}
            />

            <input
              multiline
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              cols="60"
              rows="10"
              name="message"
              className="message"
              type="text"
              placeholder="Please write your message here"
              required
              value={message}
            />

            <button type="submit" className="button outlined">
              {buttonText}
            </button>
          </form>
        </div>
      )}
    </StyledContact>
  );
};

export default Contact;
