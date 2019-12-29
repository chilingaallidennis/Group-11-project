import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			// exportEnabled: true,
			theme: "light2",
			title:{
				text: "HIV IN SOME COUNTRIES IN MALAWI"
			},
			axisX: {
				title: "HIV",
				reversed: true,
			},
			axisY: {
				title: "THOSE WHO GO FOR TESTING WITH POSTIVE RESULTS",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  12000000, label: "MALAWI" },
					{ y:  13000000, label: "MOZAMBIQUE" },
					{ y:  10000000, label: "TANZANIA" },
					{ y:  5630000, label: "MOROCO" },
					{ y:  376000, label: "EGYPT" },
					{ y:  336000, label: "ZAMBIA" },
					{ y:  330000, label: "SWITSLAND" }
				]
			}]
		}
		
		return (
		<div>
			<h1>HIV Bar Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BarChart;