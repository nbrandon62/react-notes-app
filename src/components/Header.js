import React from "react";

const Header = ({ handleTheme }) => {
  //this is a helper function that passes a function into setTheme(). The function says take what gets passed to me and set it to the opposite boolean. In this case, it's whatever the theme state was set to. 
  
  const toggleTheme = () => {
    handleTheme((theme) => !theme)
  }

  return (
    <div className="header">
      <h1>Sticky Notes</h1>
      <button
        className="save"
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
};


export default Header;

