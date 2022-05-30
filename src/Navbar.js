import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site name
      </Link>
      <ul>
        <CustmonLink to="/pricing">Pricing</CustmonLink>
        <CustmonLink to="/about">About</CustmonLink>
      </ul>
    </nav>
  );
}

function CustmonLink({ to, children, ...props }) {
  // useMatch compared the current path that we are on to whatever path we want
  // With react router you can have relative/absolute paths.
  //  useResolvedPath takes relative or abs path and combines it with the
  //  current path you are on gives you the full path
  const resolvedPath = useResolvedPath(to);
  // end: true means that the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
