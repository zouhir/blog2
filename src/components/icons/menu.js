import { h, Component } from "preact";

const Menu = ({ color = "#aae6de" }) => {
  return (
    <svg width="28px" viewBox="0 0 35 20">
      <g
        id="Home"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="square"
      >
        <g id="Artboard" stroke={color} stroke-width="2">
          <g id="Group">
            <path d="M0,1 L35,1" id="Line" />
            <path d="M0,19 L35,19" id="Line" />
            <path d="M0,10 L35,10" id="Line" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Menu;
