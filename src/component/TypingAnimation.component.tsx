import React from "react";
import Typewriter from "typewriter-effect";

const TypingAnimation: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack Developer",
          "Data Engineer",
          "Tech Consultant",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypingAnimation;
