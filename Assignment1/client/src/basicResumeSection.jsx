import "./ResumeSection.css";
const BasicResumeSection = ({ title, data }) => {
    return (
      <div className="resumeSection">
        <div className="sectionHeader" style={{ backgroundColor: "#007bff", color: "white", padding: "10px", textAlign: "center" }}>
          <h2>{title}</h2>
        </div>
        <div className="resumeCard" style={{ padding: "15px" }}>
          <p>{data}</p>
        </div>
      </div>
    );
  };
export default BasicResumeSection;