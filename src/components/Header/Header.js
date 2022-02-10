import React from "react";
import './Header.module.css';

function Header() {
  return (
    <div>
        <div>
          KV
        </div>
          <nav class="nav">
            <ul>
              <li><a href="#contacts">Contacts</a></li>
              <li><a href="#summary">Summary</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#code">Code</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#language">Language</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;