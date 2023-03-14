import { useState } from "react";
import Values from "values.js";
import "./App.css";

function App() {
	const [color, setColor] = useState("");
	const [colorList, setColorList] = useState(new Values("#ff0000").all(20));
	const onColorHandler = (e) => {
		setColor(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newcolorList = new Values(color).all(10);
		console.log(newcolorList);
		setColorList(newcolorList);

		setColor("");
	};
	console.log(colorList);
	return (
		<div className="App">
			<h1>Color Generator</h1>
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
			<button type="submit" onClick={onSubmitHandler}>
				Generate
			</button>
			<section
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="color_content">
					{colorList.map((index, color) => {
						return (
							<div
								key={index}
								style={{
									backgroundColor: `#${index.hex}`,
									color: `${index < 10 ? "#000000" : "#ffffff"}`,
									border: "1px solid lightgrey",
									marginRight: "10px",
									height: "150px",
									borderRadius: "10px",
									paddingTop: "10px",
								}}
								onClick={() => {
									navigator.clipboard.writeText(`#${index.hex}`);
									alert("Copied the Hex color");
								}}
							>
								#{index.hex}
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default App;
