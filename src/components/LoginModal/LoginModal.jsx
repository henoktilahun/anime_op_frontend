import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
function LoginModal({ closeModal, activeModal, handleRegistrationClick }) {
  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Log In"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "login"}
    >
      <label className="modal__label">
        {" "}
        <input
          type="email"
          className="modal__input"
          id="loginEmail"
          placeholder="Email"
        />
      </label>
      <label className="modal__label">
        {" "}
        <input
          type="password"
          className="modal__input"
          id="loginPassword"
          placeholder="Password"
        />
      </label>
      <div className="modal__login-buttons">
        <button className="modal__login-button" type="submit">
          Sign in
        </button>
        <button
          className="modal__register-button"
          type="button"
          onClick={handleRegistrationClick}
        >
          {" "}
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
