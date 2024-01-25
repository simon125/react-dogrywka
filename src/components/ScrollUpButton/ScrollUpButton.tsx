import { FC, useEffect, useState } from "react";

export const ScrollUpButton: FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("scroll", handleScroll);

    return () => {
      window.document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      style={{
        position: "fixed",
        bottom: "3vh",
        right: "3vw",
        width: "fit-content",
        opacity: showButton ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      ScrollUpButton
    </button>
  );
};
