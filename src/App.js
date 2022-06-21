import React from "react";
import { Navigation } from "./UI/Navigation/Navigation";
import { Router } from "./Router/Router";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Container, Content, Sidebar } from "rsuite";

export const App = () => {
  const [activeKey, setActiveKey] = React.useState("1");
  const [openKeys, setOpenKeys] = React.useState(["3", "4"]);
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
          <Sidebar>
            <Navigation
              activeKey={activeKey}
              openKeys={openKeys}
              onSelect={setActiveKey}
              onOpenChange={setOpenKeys}
              expanded={expanded}
              onExpand={setExpand}
            />
          </Sidebar>
          <Content>
            <Routes>
              {Router.map((x) => {
                return (
                  <>
                    <Route path={x.route} element={x.component} />
                    {
                      x.children && (
                        <Route path={x.route} element={x.component} />
                      ) && x.children.map((r) => {
                        return <Route path={r.route} element={r.component} />
                      })
                    }
                  </>
                )
              })}
            </Routes>
          </Content>
        </Container>
      </div>
    </>
  );
};

export default App;
