import React, { useRef } from 'react'




import emailjs from "@emailjs/browser";
import styled from "styled-components";

// images
import Logo from '../images/logo.png';



function Chat({ chat, setChat }) {

    const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
       border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      } 
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xip9mjp",
        "template_zyk3e7d",
        form.current,
        "jdx_FpjNzwiQTlzqh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Your mail is sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    const closeChatCard = () => {
        setChat(!chat);
    }

 




    return (

        <div className='chat-forn'>
            <div className='chat-card' style={{backgroundColor:'grey'}}>
              
                <button onClick={closeChatCard} 
                className='btn-close'>
            
                </button>
                <img className='dmmLogo' src={Logo} alt="DMM-Fitness" />

                <form >
                 <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm> 
                </form>
            </div>
        
        </div>
    )
}

export default Chat