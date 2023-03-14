import { useState } from "react";
import Values from "values.js";
import "./App.css";

function App() {
	const [color, setColor] = useState("");
	const [colorList, setColorList] = useState(new Values("#ff0000").all(20));
	//const [clicked, setClicked] = useState();

	//var copyText = clicked ? <div className="color_copy">Copied</div> : "";

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
					{colorList.map((index) => {
						return (
							<>
								<div
									key={index.hex}
									style={{
										backgroundColor: `#${index.hex}`,
										border: "1px solid lightgrey",
										marginRight: "10px",
										height: "150px",
										borderRadius: "10px",
										paddingTop: "10px",
										position: "relative",
										cursor: "pointer",
									}}
									className="color_box"
									onClick={() => {
										navigator.clipboard.writeText(`#${index.hex}`);
										//setClicked(!clicked);
										alert("Copied the hex color");
									}}
								>
									#{index.hex}
									{/* {copyText} */}
								</div>
							</>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default App;
