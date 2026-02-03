import React, { useState } from 'react';
import './App.css';

const App = () => {
  const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
  ];

  const [noIndex, setNoIndex] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(50);
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [bannerSrc, setBannerSrc] = useState('/images/mid.gif');
  const [bannerKey, setBannerKey] = useState(0);

  const handleNoClick = () => {
    if (clicks === 0) {
      setBannerSrc('/images/no.gif');
      setBannerKey(prev => prev + 1); // Force refresh
    }
    
    setClicks(prev => prev + 1);
    
    // Increase yes button size
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    setYesButtonSize(prev => prev + sizes[random]);
    
    // Change no button text
    if (noIndex < answers_no.length - 1) {
      setNoIndex(prev => prev + 1);
    } else {
      alert(answers_no[noIndex]);
      setNoIndex(0);
      setYesButtonSize(50);
    }
  };

  const handleYesClick = () => {
    setBannerSrc('/images/yes.gif');
    setBannerKey(prev => prev + 1); // Force refresh
    setShowMessage(true);
  };

  return (
    <div className="container">
      <div className="banner-gif">
        <img 
          id="banner" 
          key={bannerKey}
          src={bannerSrc} 
          alt="banner" 
        />
      </div>
      
      <h1 id="question-heading">Do you wanna go out on a date with me?</h1>
      
      {!showMessage ? (
        <div className="buttons">
          <button 
            id="yes-button" 
            onClick={handleYesClick}
            style={{ 
              height: `${yesButtonSize}px`, 
              width: `${yesButtonSize}px` 
            }}
          >
            <p>Yes</p>
          </button>
          <button 
            id="no-button" 
            onClick={handleNoClick}
          >
            <p>{answers_no[noIndex]}</p>
          </button>
        </div>
      ) : (
        <div className="message">
          <h2 id="success-message">Yepppie, see you sooonnn :3</h2>
        </div>
      )}
    </div>
  );
};

export default App;
