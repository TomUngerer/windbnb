import React from "react";

const Sidebar = props => {
  return (
    <aside id="site-sidebar">
      {props.children}
    </aside>
  );
};

export default Sidebar;
