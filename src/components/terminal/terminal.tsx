import { TypedTerminal } from "react-component-typed-terminal";
import {terminalData} from "./terminalData";
import "./terminal.css";
import { Link } from "@tanstack/react-router";

const PortfolioTerminal = () => {

  return (
    <div className="full-page-terminal">
      <a href="/resume">kkk</a> <br />
      <Link to="/resume" >jo</Link>
      <TypedTerminal
        title="Abdessalam's Portfolio"
        terminalData={terminalData}
        typedJsProps={{
          loop: false,
          typeSpeed: 40,
          backSpeed: 30,
          startDelay: 500,
          cursorChar: "|",

        }}
        promptText="wizli@archlinux:~$"
        key={terminalData.length}
        
      />
     

    </div>
    
  );
};

export default PortfolioTerminal;