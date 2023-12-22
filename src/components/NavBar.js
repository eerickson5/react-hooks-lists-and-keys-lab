import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const LinkComponents = links.map((link) => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>
    {LinkComponents}
  </nav>;
}

export default NavBar;
