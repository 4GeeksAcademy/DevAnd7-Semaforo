
//create your first component
const Luz = ({ color, isOn, onClick }) => {

	return (
		<div
			className={`luz rounded-circle ${color} ${isOn ? "shadow-lg" : "opacity-50"}`}
			onClick={onClick}
			style={{ width: "100px", height: "100px" }}
		></div>
	);
};

export default Luz;