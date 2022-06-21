import { useNavigate } from "react-router-dom";
import { Nav } from "rsuite";

export const NavigationItem = ({ icon, route, title, childRoutes }) => {
  const navigate = useNavigate();

  return (
    <>
      {childRoutes && (
        <Nav.Menu title={title} icon={icon}>
          {childRoutes &&
            childRoutes.map((x) => {
              return (
                <Nav.Item
                  onClick={() => navigate(x.route)}
                  children={x.title}
                  icon={x.icon}
                />
              );
            })}
        </Nav.Menu>
      )}
      {!childRoutes && (
        <Nav.Item
          onClick={() => navigate(route)}
          children={title}
          icon={icon}
        />
      )}
    </>
  );
};
