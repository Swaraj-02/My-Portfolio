import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading, setPortfolioData } from "./redux/rootSlice";
import Loader from "./components/Loader";
import Admin from "./pages/Admin/Admin.jsx";

function App() {
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const { loading, portfolioData } = useSelector((state) => state.root);
  //-> Redux dispatch

  const dispatch = useDispatch();

  useEffect(() => {
    const getPortfolioData = async () => {
      try {
        dispatch(ShowLoading());
        const response = await axios.get(
          "http://localhost:8000/api/portfolio/myportfolio-data"
        );
        dispatch(setPortfolioData(response.data));
        dispatch(HideLoading());
      } catch (error) {
        dispatch(HideLoading());
      }
    };

    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData, setPortfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
