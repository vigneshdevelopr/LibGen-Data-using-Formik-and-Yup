import React from "react";
import ResponsiveDrawer from "./Appbar";

function Base({ title, description, children }) {
  return (
    <React.Fragment>
      <ResponsiveDrawer />
      <div className="main-component">
        <h1> {title}</h1>
        <main className="main-segment">
          {description}
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}

export default Base;
