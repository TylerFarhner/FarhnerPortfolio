import { Link } from "react-router-dom";
import "./Header.css";

import InstagramIcon from "../Icons/InstagramIcon";
import GithubIcon from "../Icons/GithubIcon";
import ResumeIcon from "../Icons/ResumeIcon";

export default function Header() {
  return (
    <header className="Header">
      <nav className="HeaderNavBar">
        <ul className="NavLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Cameras">Cameras</Link>
          </li>
          <li>
            <Link to="Coding">Coding</Link>
          </li>
          <li>
            <Link to="Consulting">Consulting</Link>
          </li>
        </ul>
      </nav>
      <div className="ExternalIcons">
        {/* INSTAGRAM */}
        <a
          className="ExternalIcon"
          href="https://www.instagram.com/tyfriedrice/"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </a>

        {/* GITHUB */}
        <a
          className="ExternalIcon"
          href="https://github.com/TylerFarhner"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon />
        </a>

        {/* RESUME */}
        <a
          className="ExternalIcon"
          href="https://www.dropbox.com/s/xsvgrztq8hmj72b/FarhnerResume.pdf?dl=0"
          rel="noreferrer"
          target="_blank"
        >
          <ResumeIcon />
        </a>
      </div>
    </header>
  );
}
