import { TypedTerminal } from "react-component-typed-terminal";
import {terminalData} from "./terminalData";
import "./terminal.css";

const PortfolioTerminal = () => {

  return (
    <div className="full-page-terminal">
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