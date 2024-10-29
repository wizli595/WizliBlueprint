import { TypedTerminal } from "react-component-typed-terminal";
import "./terminal.css";
const PortfolioTerminal = () => {
  const terminalData = [
    {
      command: "whoami",
      results: ["Abdessalam, Software Engineer"],
    },
    {
      command: "page said",
      results: [
        "Welcome to my portfolio!",
        "<a href='/' target='_blank'>Click here</a> to view my resume.",
      ],
    },
    {
      command: "skillset.sh",
      results: ["Full-stack development, Linux, and DevOps"],
    },
    {
      command: "ls projects",
      results: ["face recognition app", "web apps", "automation tools"],
    },
    {
      command: "contact_me.sh",
      results: ["Contact me at: your.email@example.com"],
    },
  ];

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
        
      />
    </div>
  );
};

export default PortfolioTerminal;
