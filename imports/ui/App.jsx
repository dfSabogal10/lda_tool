import React, { Component } from 'react';
import Select from 'react-select';
import RadioImg from 'react-radioimg';
import DatePicker from 'react-datepicker';
import moment from 'moment';

var rb = require('react-bootstrap');

//var RadioImg = require('react-radioimg')

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_lc:1395,
      selected_country:1551,
      selected_program:"GV",
      lcs:[
        { value: 1395, label: 'Andes' },
        { value: 1000, label: 'Rosario' },
      ],
      countries:[
        { value: 1551, label: 'Colombia' },
        { value: 1444, label: 'México' },
      ],
      programs:[
      {
        btnCls: 'program btn',
        btnSelCls: 'btn program program_sel',
        val: 'GV',
        img:'/img/GV.png'
      },
      {
        btnCls: 'program btn',
        btnSelCls: 'btn program program_sel',
        val: 'GT',
        img:'/img/GT.png'
      },
      {
        btnCls: 'program btn',
        btnSelCls: 'btn program program_sel',
        val: 'GE',
        img:'/img/GE.png'
      }
    ],
    types:[
    {
      btnCls: 'btn btn-lg type',
      btnSelCls: 'btn btn-lg type type_sel',
      val: 'incoming',
      label:'Incoming'
    },
    {
      btnCls: 'btn btn-lg type',
      btnSelCls: 'btn btn-lg type type_sel',
      val: 'outgoing',
      label:'Outgoing'
    }
  ]
    };
  };

  componentDidMount() {
    window.load_canvas()
  }




  updateLC(val) {
    this.setState({
      selected_lc: val.value
    })
     console.log("Selected local office: " + val["value"]);
  }

  updateCountry(val) {
    this.setState({
      selected_country: val.value
    })
     console.log("Selected country: " + val["value"]);
  }

  handleChange(e) {
    var change= {};
    change[e.target.name] = e.target.value
    this.setState(change);
  };

  dateChanged(date) {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <rb.Navbar>
          <rb.Navbar.Header>
            <rb.Navbar.Brand>
              LDM Assessment tool
            </rb.Navbar.Brand>
          </rb.Navbar.Header>
          <rb.Nav style={{width:"20%"}}>
            <Select
              name="selected_country"
              value={this.state.selected_country}
              options={this.state.countries}
              onChange={this.updateCountry.bind(this)}
            />
          </rb.Nav>
          <rb.Nav style={{width:"20%"}}>
            <Select
              name="selected_lc"
              value={this.state.selected_lc}
              options={this.state.lcs}
              onChange={this.updateLC.bind(this)}
            />
          </rb.Nav>
          <rb.Nav style={{width:"20%"}}>
            <rb.FormControl
              type="text"
              value={this.state.token}
              name="auth_token"
              onChange={this.handleChange.bind(this)}
              placeholder="Authentication Token"
            />
          </rb.Nav>
        </rb.Navbar>
        <div className="container">
          <header>
            <h1>Todo List</h1>
            <p>{this.state.auth_token}</p>
            <p>{this.state.selected_program}</p>
          </header>
        </div>
        <rb.Grid>
          <rb.Row>
            <rb.Col sm={6} xs={12}>
              <canvas id="ldm_canvas" width="243" height="279"></canvas>
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              v1 2
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              va 3
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              va 4
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              va 5
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              va 6
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              va 7
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              va 8
            </rb.Col>
          </rb.Row>
        </rb.Grid>
        <rb.Grid>
          <rb.Row>
            <rb.Col sm={6} xs={12}>
              <RadioImg
                className="selected_program col-centered"
                options={this.state.programs}
                defaultValue={this.state.selected_program}
                marginSpace="10"
                onChange={(e) => {
                  this.setState({
                    selected_program: e.target.value
                  })}}
              />
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              <div className="col-centered">
                <RadioImg
                  className="type_selector vcenter"
                  options={this.state.types}
                  defaultValue={this.state.selected_type}
                  marginSpace="10"
                  onChange={(e) => {
                    this.setState({
                      selected_type: e.target.value
                    })}}
                />
              </div>
            </rb.Col>
            <rb.Col sm={3} xs={6}>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.dateChanged.bind(this)}
                dateFormat="YYYY-MM-DD"
              />
            </rb.Col>
          </rb.Row>
        </rb.Grid>
      </div>
    );
  }
}
