import React from "react";
import { ScrollTo } from "react-scroll-to";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="Header">
      {/* <div>Welcome</div> */}

      <div className="all">
        <div>
          <ScrollTo>
            {({ scrollTo }) => (
              <button onClick={() => props.scrollPage(20, 100000, scrollTo)}>
                Bottom
              </button>
            )}
          </ScrollTo>
        </div>
        <div>
          <input
            className="Header-input"
            type="text"
            placeholder="Search Game"
          />
          <button>Submit</button>
        </div>
      </div>
    </header>
  );
}
