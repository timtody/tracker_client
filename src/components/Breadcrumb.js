import React from "react";

export default () => {
  return (
    <ul class="uk-breadcrumb">
      <li>
        <a href="#">Item</a>
      </li>
      <li>
        <a href="#">Item</a>
      </li>
      <li class="uk-disabled">
        <a>Disabled</a>
      </li>
      <li>
        <span>Active</span>
      </li>
    </ul>
  );
};
