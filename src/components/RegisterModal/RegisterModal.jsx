import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ closeModal, activeModal, handleLoginClick }) {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "register"}
    >
      <label className="modal__label">
        {" "}
        <input
          type="text"
          className="modal__input"
          id="registerName"
          name="username"
          placeholder="Username"
        />
      </label>
      <label className="modal__label">
        {" "}
        <input
          type="email"
          className="modal__input"
          id="registerEmail"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label className="modal__label">
        {" "}
        <input
          type="password"
          className="modal__input"
          id="registerPassword"
          name="password"
          placeholder="Password"
          required
        />
      </label>
      <label className="modal__label">
        {" "}
        <input
          type="password"
          className="modal__input"
          id="registerPassword"
          name="password"
          placeholder="Password again"
          required
        />
      </label>
      <div className="modal__login-buttons">
        <button className="modal__login-button" type="submit">
          Sign up
        </button>
        <button
          className="modal__register-button"
          type="button"
          onClick={handleLoginClick}
        >
          {" "}
          or Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
