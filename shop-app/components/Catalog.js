import React from "react";

export const Catalog = (props) => {
  return (
    <div>
      <h2>My Dynamic Component:</h2>
      <hr />
      <p>{props.data}</p>
    </div>
  );
}
export default Catalog;