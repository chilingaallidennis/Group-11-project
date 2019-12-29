import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {

	
    

    render() {
        const options = {
			// exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Malaria Cases"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Malawi" },
					{ y: 49, label: "Tazania" },
					{ y: 9, label: "Mozambique" },
					{ y: 5, label: "Egpyt" },
					{ y: 19, label: "Pretoria" }
				]
			}]
		}
		
		return (
		<div>
			<h1>Malaria Cases</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;