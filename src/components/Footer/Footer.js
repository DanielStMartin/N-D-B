import React from "react";
import { ScrollTo } from "react-scroll-to";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="Footer">
      <div>
        <ScrollTo>
          {({ scrollTo }) => (
            <button onClick={() => props.scrollPage(0, 0, scrollTo)}>
              Top ^
            </button>
          )}
        </ScrollTo>
      </div>
    </div>
  );
}
