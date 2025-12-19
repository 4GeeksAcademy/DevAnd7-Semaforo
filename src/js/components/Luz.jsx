import { useState } from "react";


//create your first component
const Luz = ({color}) => {
	const [isOn, setIsOn] = useState(false);

const changeLight = ()=>{
	setIsOn(!isOn);
}

	return (
		<div className={`luz rounded-circle ${color} ${isOn ? "shadow-lg":"opacity-50"}`}
		onClick={changeLight} style={{ width: "100px", height: "100px" }}></div>
	);
};

export default Luz;