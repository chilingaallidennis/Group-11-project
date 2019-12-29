import React, { Component } from 'react';
import logo from '../logo.png';
import Api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button, ButtonToolbar} from 'react-bootstrap';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import './PieChart'
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            charts:'',
            dashboards:[]
        };
    }
    state = {
        charts:[]
      
    }
    state = {
        dashboards:[]
    }
 componentDidMount(){
        Api.getDashboards()
            .then(data => {  
                this.setState({dashboards: data});
                this.setState({dashboards: data.dashboards[0], loading:false});
                this.setState({dashboards: data.dashboards[1]});
                console.log(data)
            })
            .catch(error => {
                console.error('Error during data retrieval:', error);
            });

             Api.getCharts()
             .then(data=>{
                 this.setState({charts:data});
                 this.setState({charts:data.charts});
                 console.log(data);
                })
                .catch(error => {
                    console.error('Error during data retrieval:', error);
                });

        }

    render() {

        const{charts, dashboards} = this.state
        if(!charts || !dashboards){
            return <div>loading...</div>
        }
        return (
            <div>
               <Navbar bg="light" expand="lg" className="change-bg">
                <Navbar.Brand href="#home" style={{color:"white"}}>DHIS2 WEB PORTAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                <ButtonToolbar>
                    <Button variant="primary">{this.state.dashboards.displayName[0] }</Button>
                    <Button variant="secondary">{this.state.dashboards.displayName[1]}</Button>
                    <Button variant="success">{this.state.dashboards.displayName[2]}</Button>
                    <Button variant="warning">{this.state.dashboards.displayName[3]}</Button>
              </ButtonToolbar>
                <LineChart />
                <PieChart />
                <BarChart />
            </div>
        );
    }
}

export default App;
