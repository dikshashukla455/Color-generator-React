import { useState } from "react";
import Values from "values.js";
import "./App.css";
import ColorBox from "./components/ColorBox";

function App() {
	/* input field for hex-color */
	const [color, setColor] = useState("");
	/* list of several hex-colors of the entered hex color*/
	const [colorList, setColorList] = useState(new Values("#ff0000").all(10));
	const onColorHandler = (e) => {
		setColor(e.target.value);
	};
	/* generating the colors by clicking on the button */
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newcolorList = new Values(color).all(10);
		setColorList(newcolorList);

		setColor("");
	};
	return (
		<div className="App">
		 
			<h1>Color Generator</h1>
			{/* Input fields for hex color (text) */}
			<label htmlFor="">
				Enter:
				<input
					type="text"
					onChange={onColorHandler}
					value={color}
					placeholder="#ff0000"
					style={{ marginRight: "1rem" }}
				/>
			</label>
			OR &nbsp;&nbsp;&nbsp;
			{/* Input fields for hex color (color) */}
			<label htmlFor="">
				Select:
				<input
					type="color"
					onChange={onColorHandler}
					value={color}
					placeholder="#ff0000"
					style={{ marginRight: "1rem" }}
				/>
			</label>
			{/* button for generating the colors by clicking on it */}
			<button type="submit" onClick={onSubmitHandler}>
				Generate
			</button>
			{/* list of the hex-colors */}
			<section
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="color_content">
					{colorList.map((index) => {
						return (
							<>
							{/* generated hex-color component */}
								<ColorBox HexColor={index.hex} key={index.hex} />
							</>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default App;
