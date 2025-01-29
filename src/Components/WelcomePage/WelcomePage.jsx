import React, { useState } from "react";
import { WelcomeNote } from "../CommonServices/Static";
import styles from "./WelcomePage.module.css"
import LoginCard from "../Atoms/LoginCard/LoginCard";
import RegCard from "../Atoms/RegCard/RegCard";

function WelcomePage() {

  const [currentPage ,setCurrentPage] =useState('login') 

  const getwelcomeNoteData =  (pageType)=>{
    return WelcomeNote.find(page=>page.type===pageType)
  }
  const welcomeNoteData = getwelcomeNoteData(currentPage)
  return (
    <div className={styles["welcome-wrapper"]} >
      <ul className={styles["welcome__list"]}>
        
            <li>
             <h1>{welcomeNoteData.heading}</h1>
             <p>{welcomeNoteData.description}</p>
            </li>
       
        
      </ul>
      {currentPage === "login" ? (
        <LoginCard onSwitch={() => setCurrentPage("signup")} />
      ) : (
        <RegCard onSwitch={() => setCurrentPage("login")} />
      )}
      
 
    </div>
  );
}

export default WelcomePage;
