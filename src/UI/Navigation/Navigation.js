import { Nav, Sidenav } from "rsuite";
import { Router } from "../../Router/Router";

import "./Navigation.css";
import { NavigationItem } from "./NavigationItem/NavigationItem";

export const Navigation = ({
  appearance,
  expanded,
  onOpenChange,
  onExpand,
  ...navProps
}) => {
  return (
    <div className={"navigation"}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            {Router.map((x) => {
              return (
                <NavigationItem title={x.title} route={x.route} icon={x.icon} childRoutes={x.children} />
              );
            })}
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};
