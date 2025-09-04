import { useEffect, useState } from "react";

const TypeWriter = ({
  words = ["React Developer"],
  typeSpeed = 150,
  deleteSpeed = 75,
  pauseTime = 1500,
  className = "",
  showCursor = true,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));

          if (currentText === currentWord) {
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseTime);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && <span className="animate-pulse ml-1">|</span>}
    </span>
  );
};

export default TypeWriter;
