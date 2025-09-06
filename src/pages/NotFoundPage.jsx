import React from "react";
import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";

function NotFoundPage() {
  return (
    <section className="notfound">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="notfound-button">
        <IoMdReturnLeft /> Kembali ke Beranda
      </Link>
    </section>
  );
}

export default NotFoundPage;
