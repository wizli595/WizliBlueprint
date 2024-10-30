import { TypedTerminal } from "react-component-typed-terminal";
import "./terminal.css";
const PortfolioTerminal = () => {
  const terminalData = [
    {
      command: "<span class='command'> whoami</span>",
      results: ["Abdessalam, Software Engineer"],
    },
    {
      command: "<span class='command'>pagesay </span > ",
      results: [
        "Welcome to my portfolio!",
        "<a class='link' href='/' target='_blank'>Click here</a> to view my resume.",
      ],
    },
    {
      command: "<span class='command'>skillset.sh </span >",
      results: ["Full-stack development, Linux, and DevOps"],
    },
    {
      command: "<span class='command'>ls</span > projects",
      results: ["face recognition app", "web apps", "automation tools"],
    },
    {
      command: "<span class='command'>contact_me.sh</span >",
      results: ["mail: a className='link' href='mailto:abdoowizli@gmail.com?subject=Hello&body=Hi there!'>abdoo</a>", "LinkedIn : <a  class='link' href='https://www.linkedin.com/in/abdessalam-wizli/' target='_blank'>abdessalam ouazri</a>"],
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
        key={terminalData.length}
        
      />
     

    </div>
    
  );
};

export default PortfolioTerminal;