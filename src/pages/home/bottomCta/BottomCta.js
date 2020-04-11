import React from "react";
import "./BottomCta.scss";
export default function BottomCta() {
  return (
    <section className="bottom-cta">
      <div className="bottom-cta__wrapper">
        <h2>
          Learn from industry experts, and connect with a global network of
          experience
        </h2>
        <p>On your time. How and when you want.</p>
        <a href="/">Start my free month</a>
        <a href="/" className="bottom-cta__buy">
          Buy for my team
        </a>
      </div>
    </section>
  );
}
