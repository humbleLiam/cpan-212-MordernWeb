import { useEffect, useState } from "react";
import ResumeSection from "./ResumeSection";
import BasicResumeSection from "./basicResumeSection";
import './App.css';

const App = () => {
  const [isLoading , setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState({
    education: [],
    experience: [],
    overview: {},
    who: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const[eduRes, expRes, overviewRes, whoRes] = await Promise.all([
          fetch("http://localhost:8000/getEdu"),
          fetch("http://localhost:8000/getExp"),
          fetch("http://localhost:8000/getOverview"),
          fetch("http://localhost:8000/getWhoAmI")
        ]);
        const eduData =await eduRes.json();
        const expData =await expRes.json();
        const whoData =await whoRes.json();
        const overviewData= await overviewRes.json();
        // debug
        // console.log("Education data:", eduData);
        // console.log("Experience data:", expData);
        // console.log("Overview data:", overviewData);
  
        setResumeData({
          education: eduData,
          experience: expData,
          overview: overviewData,
          who: whoData
        });
        setIsLoading(false);
      } catch (e) {
        console.log(e);
  
      }
    }
    fetchData();
  }, []);

  return (
    <div >
      { isLoading ? (
        <div>
          Loading the data......
        </div>
      ) : ( 
        <div className="centerContainer">
          {resumeData.who && <BasicResumeSection title="About me" data={resumeData.who} />}
          {resumeData.overview && <BasicResumeSection title="Over View" data={resumeData.overview} />}
          {resumeData.education &&  <ResumeSection title="Education" data={resumeData.education} />}
          {resumeData.experience  && <ResumeSection title="Experience" data={resumeData.experience} />}
        </div>
      )}
    </div>
  );
};

export default App;