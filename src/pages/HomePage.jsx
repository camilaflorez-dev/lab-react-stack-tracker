
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 

function HomePage({ companies }) {
  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      <ul className="company-list">
        {companies.map((el) => (
          <li key={el.id} className="company-item">
            <img src={el.logo} className="company-logo" alt="" />
            <Link to={`/company/${el.slug}`} className="company-name">
              <span>{el.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;