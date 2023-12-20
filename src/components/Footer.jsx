import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>Copyright © {currentYear} || With ❤️ Avinash</footer>
    </div>
  );
}

export default Footer;
