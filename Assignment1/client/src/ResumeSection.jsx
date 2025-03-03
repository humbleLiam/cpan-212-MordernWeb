import { useState } from "react";
import "./ResumeSection.css";

const ResumeSection = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleSection = () =>{
    setIsOpen(!isOpen);
  } 

    return (
        <div className="resumeSection">
        <div className="sectionHeader" onClick={toggleSection}>
          <h2>{title}</h2>
        </div>
  
        {isOpen && (
          <div className="sectionContent">
            {Array.isArray(data) ? (
              data.map((item, index) => (
                <div key={index} className="resumeCard">
                  {Object.values(item).map((val, i) => (
                    <p key={i}>{val}</p>
                  ))}
                </div>
              ))
            ) : (
              <p>{data}</p>
            )}
          </div>
        )}
      </div>
      );
}
    


export default ResumeSection;