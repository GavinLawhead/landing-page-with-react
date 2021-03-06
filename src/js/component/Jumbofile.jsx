import React from "react";

const Jumbo = (props) => {
	let style1 = {
		borderRadius: "10px",
		background: "lightGray",
		marginTop: "3px",
		marginLeft: "80px",
		marginRight: "80px",
	};
	let style2 = { marginLeft: "50px" };
	let style3 = { marginLeft: "50px" };
	let style4 = { margin: "0px 50px 65px 50px" };
	return (
		<div className="jumbotron" style={style1}>
			<h1 className="display-4" style={style2}>
				<strong>A Warm Welcome!</strong>
			</h1>
			<p className="lead" style={style3}>
				{props.description}
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="#"
					role="button"
					style={style4}>
					Call to action!
				</a>
			</p>
		</div>
	);
};
export default Jumbo;
