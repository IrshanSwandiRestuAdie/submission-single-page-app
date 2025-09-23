import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, putAccessToken, getUserLogged } from "../utils/network_data";
import { LocaleContext } from "../contexts/LocaleContext";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  // Translation object
  const texts = {
    id: {
      title: "Login",
      email: "Email",
      password: "Password",
      loginBtn: "Login",
      noAccount: "Belum punya akun?",
      register: "Register",
      errorLogin: "Login gagal, periksa kembali email & password.",
      errorUser: "Tidak bisa mendapatkan data user.",
      emailPlaceholder: "Masukkan email",
      passwordPlaceholder: "Masukkan password",
    },
    en: {
      title: "Login",
      email: "Email",
      password: "Password",
      loginBtn: "Login",
      noAccount: "Don't have an account?",
      register: "Register",
      errorLogin: "Login failed, check your email & password.",
      errorUser: "Unable to get user data.",
      emailPlaceholder: "Enter email",
      passwordPlaceholder: "Enter password",
    },
  };

  const t = texts[locale];

  const onSubmit = async (e) => {
    e.preventDefault();

    const { error, data } = await login({ email, password });

    if (error) {
      setErrorMsg(t.errorLogin);
      return;
    }

    putAccessToken(data.accessToken);

    const user = await getUserLogged();
    if (user.error) {
      setErrorMsg(t.errorUser);
      return;
    }

    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>{t.title}</h2>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      <form onSubmit={onSubmit}>
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

        <button type="submit">{t.loginBtn}</button>
      </form>

      <p className="switch-link">
        {t.noAccount}{" "}
        <button onClick={() => navigate("/register")}>{t.register}</button>
      </p>
    </div>
  );
}

export default LoginPage;
