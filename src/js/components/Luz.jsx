import React from "react";


//create your first component
const Luz = (props) => {
	return (
		<div className="luz rounded-circle" style={{background: props.color, width: "100px", height: "100px"}}></div>
	);
};

export default Luz;