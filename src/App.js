import React from "react";
import { Navigation } from "./UI/Navigation/Navigation";
import { Router } from "./Router/Router";
import { Routes, Route } from "react-router-dom";
import { Container, Content, Sidebar } from "rsuite";
import { NotFound } from "./Pages/NotFound/NotFound";

import "./App.css";

export const App = () => {
  const [expanded, setExpand] = React.useState(true);
  const extractRoutes = Router.filter((r) => r.title).concat(
    Router.filter((r) => r.children && r.children.length)
      .map((r) => r.children)
      .flat()
  );

  return (
    <>
      <div>
        <Container>
          <Sidebar
            className={'sidebar'}
            width={expanded ? 260 : 56}
            collapsible
          >
            <Navigation
              expanded={expanded}
              onExpand={setExpand}
            />
          </Sidebar>
          <Content>
            <Routes>
              {extractRoutes.map((x) => {
                return (
                  <>
                    <Route path={x.route} element={x.component} />
                  </>
                );
              })}
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </Content>
        </Container>
      </div>
    </>
  );
};

export default App;
