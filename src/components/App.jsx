import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "pages/AboutUs";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/" element={<AboutUs />}/>
    <Route path="*" element={<Navigate to="/" />} />
    </Route>
   </Routes>
    </>
  );
};
