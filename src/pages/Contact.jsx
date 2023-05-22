import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6302710465!2d66.59495074892502!3d25.19338946981612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680016289247!5m2!1sen!2s"
         title="FORM"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <form
        action="https://formspree.io/f/xpzeyavy"
        className="from"
        method="POST"
      >
        <input
          type="text"
          className="input"
          placeholder="enter name"
          name="username"
        />
        <input
          type="text"
          className="input"
          placeholder="enter email"
          name="email"
        />

        <textarea
          name="messege"
          cols="30"
          rows="10"
          className="input"
          placeholder="type messege"
        ></textarea>
        <input type="submit" value="send" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .map {
    margin: 5vh 0;
  }
  form {
    width: 50%;
    margin: 50px auto;
    display: flex;
    flex-flow: column;
    gap: 30px;

    .input {
      padding: 5px;
      font-size: 16px;
    }

    input[type="submit"] {
      width: max-content;
      padding: 5px 15px;
      color: blue;
      border: 1px solid blue;
      background: none;
      transition: all 0.3s;

      &:hover {
        color: white;
        background: blue;
      }
    }
  }
`;

export default Contact;
