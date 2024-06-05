import React from "react";
import Typewriter from "typewriter-effect"

export function Type() {
    return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Data Scientist","Software Engineer","Machine Learning Scientist"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
    );
}

export default Type;