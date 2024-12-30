import React from "react";
import "./VisualizationPanel.css";

const VisualizationPanel = ({ array }) => {
  return (
    <div className="visualization-panel">
      {array.map((value, index) => (
        <div
	  key={index}
	  className="bar"
	  style={{
	    height: `${value}px`,
	    width: "10px",
	    backgroundColor: "teal",
	    margin: "0 2px",
	  }}
	></div>
      ))}
    </div>
  );
};

export default VisualizationPanel;
