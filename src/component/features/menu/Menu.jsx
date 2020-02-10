import React from "react";

import "./Menu.css";

function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li>Open</li>
        <li>Archived</li>
        <li>Snoozed</li>
        <li>Trash</li>
      </ul>
    </div>
  );
}

export default Menu;
