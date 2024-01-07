import React from "react";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <div data-testid="home-component">
        <div className="div-page">
          <div className="container">
            <h1>Home</h1>
            <p>The application will serve as a platform where users can view a calendar of upcoming Initial Public Offerings (IPOs) and track the latest currency exchange rates. It will integrate the IEX Cloud API for both IPO data and currency rates. The application should be user-friendly, providing clear and concise information.</p>
          </div>
        </div>
      </div>
      </>
  );
}
