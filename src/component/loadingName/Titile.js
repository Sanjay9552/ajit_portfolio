import React, { useEffect, useState } from "react";

const Title = ({ onload = () => {} }) => {
  const [name, setName] = useState("");
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      load();
    }, 2000);

    return () => {
      clearTimeout(timeInterval);
    };
  }, []);
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const load = async () => {
    const texts = [
      "Hi there! ",
      "I am a ",
      "✨ ANIMATOR ✨",
      "🌿 WILD LIFE PHOTOGRAPHER 🦁 ",
      "📸 CAPTURING NATURE'S WONDERS ",
      "🌟 STORYTELLER THROUGH LENSES ",
      "AJIT BHANDARE ",
      "Welcome to My World 🌍",
      "Let's Create Magic Together! ",
    ];
    for (let i = 0; i < texts.length; i++) {
      let currentText = "";
      if (i == 0 || i == texts.length - 1) {
        for (let j = 0; j < texts[i].length - 1; j++) {
          currentText += texts[i][j];
          console.log("current vale ", currentText);
          setName(currentText);
          await delay(100);
        }
      } else {
        setName(texts[i]);
      }
      await delay(i == 0 ? 2000 : 500);
      setName("AJIT BHANDARE");
    }
    setIsEnd(true);
    onload();
  };

  return (
    <div className="flex-1 bg-red-60 flex p-10 items-center justify-center">
      <div
        style={{
          fontSize: 35,
          fontWeight: "bold",
          fontFamily: "monospace",
          color: isEnd ? "white" : "black",
        }}
      >
        {name ? name : ""}
      </div>
      {isEnd && (
        <div
          style={{
            fontSize: 35,
            fontWeight: "bold",
            fontFamily: "monospace",
            color: isEnd ? "white" : "black",
          }}
        >
          WILD LIFE PHOTOGRAPHER
        </div>
      )}
    </div>
  );
};

export default Title;
