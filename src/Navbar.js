export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site name
      </a>
      <ul>
        <CustmonLink href="/pricing">Pricing</CustmonLink>
        <CustmonLink href="/about">About</CustmonLink>
      </ul>
    </nav>
  );
}

function CustmonLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
