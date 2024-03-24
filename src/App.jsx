import { useState } from 'react';
import './App.css';

function App() {
  const [buttonText, setButtonText] = useState("Download");
  
  const handleDownload = () => {
    
    let timer = 10;

    const countdown = setInterval(() => {
      if (timer > 0) {
        setButtonText("Downloading..." + timer);
        timer--;
      } else {
        clearInterval(countdown);
        const link = document.createElement('a');
        link.download = "Demo_Pdf";
        link.href = "/File.pdf"; // Assuming File.pdf exists in the root directory
        link.click();
        setButtonText("Download Again");
      }
    }, 1000);
  };

  return (
    <>
      <div>
        <button onClick={handleDownload}>{buttonText}</button>
      </div>
    </>
  );
}

export default App;
