import React from "react";

function ColorBox({ HexColor }) {
    /* implement the copying hex-color functionality */
	const [clicked, setClicked] = React.useState(false); // setting the state whether the child component(color-box) is clicked
	const ClickedClass = clicked ? "color_copy" : "none_copy"; // adding classes to the child component(color-box) if clicked

	return (
		<div className="color_section color_box" key={HexColor}>
			<div
				style={{
					backgroundColor: `#${HexColor}`,
					border: "1px solid lightgrey",
					marginRight: "10px",
					height: "150px",
					borderRadius: "10px",
					paddingTop: "10px",
					cursor: "pointer",
				}}
				onClick={() => {
					navigator.clipboard.writeText(`#${HexColor}`); // copying the hex color to clipboard
					setClicked(true);
					setTimeout(() => {
						setClicked(false);
					}, 800);
				}}
			>
            {/* Generated color data */}
				#{HexColor}
			</div>
            {/* styles for copy functionality */}
			<div className={`${ClickedClass}`}>Copied!</div>
		</div>
	);
}

export default ColorBox;
