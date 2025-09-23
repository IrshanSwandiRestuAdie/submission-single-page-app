import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network_data";
import { LocaleContext } from "../contexts/LocaleContext";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  // Translation object
  const texts = {
    id: {
      title: "Register",
      name: "Nama",
      email: "Email",
      password: "Password",
      registerBtn: "Register",
      haveAccount: "Sudah punya akun?",
      login: "Login",
      errorRegister: "Registrasi gagal, coba lagi.",
      successRegister: "Registrasi berhasil! Silakan login.",
      namePlaceholder: "Masukkan nama",
      emailPlaceholder: "Masukkan email",
      passwordPlaceholder: "Masukkan password",
    },
    en: {
      title: "Register",
      name: "Name",
      email: "Email",
      password: "Password",
      registerBtn: "Register",
      haveAccount: "Already have an account?",
      login: "Login",
      errorRegister: "Registration failed, please try again.",
      successRegister: "Registration successful! Please login.",
      namePlaceholder: "Enter name",
      emailPlaceholder: "Enter email",
      passwordPlaceholder: "Enter password",
    },
  };

  const t = texts[locale];

  const onSubmit = async (e) => {
    e.preventDefault();

    const { error } = await register({ name, email, password });

    if (error) {
      setErrorMsg(t.errorRegister);
      return;
    }

    alert(t.successRegister);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>{t.title}</h2>
      {errorMsg && <p className="error-ms">{errorMsg}</p>}

      <form onSubmit={onSubmit}>
        <div>
          <label>{t.name}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            required
          />
        </div>

        <div>
          <label>{t.email}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            required
          />
        </div>

        <div>
          <label>{t.password}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.passwordPlaceholder}
            required
          />
        </div>

        <button type="submit">{t.registerBtn}</button>
      </form>

      <p className="switch-link">
        {t.haveAccount}{" "}
        <button onClick={() => navigate("/login")}>{t.login}</button>
      </p>
    </div>
  );
}

export default RegisterPage;
