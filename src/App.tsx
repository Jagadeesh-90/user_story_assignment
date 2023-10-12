import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserTable } from "./components/organisms/UserTable";
import { CandidateDetails } from "./components/organisms/IndividualCandidate";


export const App = () => {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <UserTable/>}/>
   <Route path="/candidate/:id" element={ <CandidateDetails/>}/>
   </Routes>
  </BrowserRouter>
    
  );
};

