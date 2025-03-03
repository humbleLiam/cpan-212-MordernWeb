const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 8000;




// Enabler requests from front(port 3000)
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // Middleware to parse JSON requests

// Resume Data
//Got this object from throwing my resume into chatgpt. 
// its the best for this type of shit
const resumeData = {
    education: [
      { degree: "Advanced Diploma, Computer Programming and Analysis", school: "Humber Polytechnic", year: "Grad 2026" },
      { degree: "Software Engineering – 2 years completed", school: "University of Guelph", year: "2023" },
      { degree: "Google Cybersecurity Professional Certificate", school: "Online", year: "Feb 2024" },
    ],
    experience: [
      { role: "Field Recreation Team Member", company: "City Of Brampton", duration: "April 2023 – October 2024" },
      { role: "Production Associate", company: "Honda Canada", duration: "April 2022 – August 2022" },
      { role: "Cybersecurity Intern", company: "Oakwood Health Network", duration: "April 2021 – April 2022" },
    ],
    overview: "Enthusiastic programming student seeking an internship. Skilled in Python, JavaScript, and C...",
    skills: {
        softSkills: ["Organized", "Flexible", "Effective Communicator", "Outgoing", "Team Player"],
        technicalSkislls: [
          "JavaScript", "HTML & CSS", "XML", "C", "Bash", "C++", "Java", "Python", "Perl", "SQL", "OracleSQL"
        ],
        frameworksAndTools: [
          "Git", "UNIX/Linux", "GNU Debugger", "Valgrind", "React", "Vercel"
        ],
      },
      who: "My name is Liam Humbe and you can contact me at humblelee@live.ca!"
  };

// Endpoints
app.get("/getWhoAmI",(req, res)=>{
    res.json(resumeData.who);
})

app.get("/getEdu",(req, res)=>{
    res.json(resumeData.education);
})

app.get("/getExp",(req, res)=>{
    res.json(resumeData.experience);
})

app.get("/getOverview",(req, res)=>{
    res.json(resumeData.overview);
})

// didnt set my self enough time to do the front end of the everision lol
app.get("/getSkils",(req, res)=>{
    res.json(resumeData.skills);
})





// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
