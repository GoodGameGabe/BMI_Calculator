import React from "react";
import PropTypes from "proptypes";
//create your first component


export class Inches extends React.Component {
	render() {
		return (
				<label value={this.props.inchHeight} >({this.props.inchHeight})
				</label>
				<input
					className="form-control"
					placeholder=""
					value={this.state.inchHeight}
					onChange={this.heightInput}
				/>
				);
	}
}

Inches.Proptypes = {
	inchHeight: PropTypes.number
};

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			standard: "Metric",
			h1: "m",
			h2: "",
			w1: "kg",
			height: "",
			height2: "",
			weight: "",
			BMI: "",
			message: "",
			style: ""
		};
	}

	usSet = () => {
		this.setState({ standard: "US", w1: "lb", h1: "feet", h2: "(in.)" });
	};

	metricSet = () => {
		this.setState({ standard: "Metric", w1: "kg", h1: "m", h2: "" });
	};

	heightInput = e => {
		this.setState({ height: e.target.value });
	};

	heightInput2 = e => {
		this.setState({ height2: e.target.value });
	};

	weightInput = e => {
		this.setState({ weight: e.target.value });
	};

	bmiOutput = () => {
		var x;

		if (this.state.standard == "Metric") {
			x = parseFloat(
				this.state.weight / parseFloat(this.state.height ** 2)
			).toFixed(1);
		} else if (this.state.standard == "US") {
			x = parseFloat(
				(this.state.weight * 703) /
					parseFloat((this.state.height * 12) ** 2)
			).toFixed(1);
		}

		this.setState({ BMI: x });

		var BMI = x;

		if (BMI <= 18.5) {
			this.setState({
				message: "ANOREXIC",
				style: "text-danger font-weight-light"
			});
		} else if (18.5 < BMI && BMI < 24.9) {
			this.setState({ message: "NORMAL", style: "text-success" });
		} else if (25 <= BMI && BMI < 29.9) {
			this.setState({
				message: "FAT",
				style: "text-warning font-weight-bold"
			});
		} else if (BMI >= 30) {
			this.setState({
				message: "SUPER FAT",
				style: "text-danger font-weight-bolder"
			});
		} else {
			this.setState({ message: "Be Serious" });
		}
	};

	render() {
		return (
			<div className="container-fluid mt-5">
				{/* TITLE */}
				<div className="row mb-5 justify-content-center">
					<h1 className="text-center">HOW FAT ARE YOU?</h1>
				</div>

				{/* MAIN */}
				<div className="row m-5">
					<div className="card col-sm-12 col-md-6">
						{/* CHNAGE STANDARD BUTTON */}
						<div className="row justify-content-end mr-3 mt-3">
							<div
								className="btn-group btn-group-toggle"
								data-toggle="buttons">
								<label
									className="btn btn-secondary active"
									onClick={this.metricSet}>
									<input type="checkbox" autoComplete="off" />{" "}
									Metric
								</label>
								<label
									className="btn btn-secondary"
									onClick={this.usSet}>
									<input type="checkbox" autoComplete="off" />{" "}
									U.S.
								</label>
							</div>
						</div>

						{/* WEIGHT INPUT */}
						<div className="row justify-content-center mt-4">
							<div className="form-group">
								<label>Weight ({this.state.w1})</label>
								<input
									className="form-control"
									placeholder=""
									value={this.state.weight}
									onChange={this.weightInput}
								/>
							</div>
						</div>

						{/* HEIGHT INPUT */}
						<div className="row justify-content-center">
							<div className="form-group">
								<label>Height ({this.state.h1})</label>
								<input
									className="form-control"
									placeholder=""
									value={this.state.height}
									onChange={this.heightInput}
								/>
							</div>
						</div>

						{/* SUBMIT BUTTON */}
						<div className="row mb-5 justify-content-center">
							<button
								type="submit"
								className="btn btn-primary"
								onClick={this.bmiOutput}>
								Calculate
							</button>
						</div>
					</div>
					{/* Final Output - BMI */}
					<div className="col-sm-12 col-md-5 p-2 align-self-md-center text-center">
						<h1
							className={"mt-5 " + this.state.style}
							value={this.state.BMI}>
							{this.state.BMI}
						</h1>
						<p
							className={this.state.style}
							value={this.state.message}>
							{this.state.message}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
