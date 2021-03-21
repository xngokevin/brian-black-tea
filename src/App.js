import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/main.scss";
import { request } from "graphql-request";
import Home from "./pages/home";
import "jquery";
import "react-bootstrap/dist/react-bootstrap.min";
import { Navbar } from "./components";

function App() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      const { pages } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmhb64bw8qv801z6ge8y1yje/master",
        `
          { 
            pages {
              id
              title
              slug
            }
          }
        `
      );

      console.log(pages);
      setPages(pages);
    };

    fetchPages();
  }, []);

  return (
    <>
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
