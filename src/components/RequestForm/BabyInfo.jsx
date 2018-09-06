import React, { Component } from 'react';
// import { connect } from 'react-redux';


class BabyInfo extends Component {



  render() {
    return (


      <div id="babyInfoDiv">
        <div id="babyNameDiv">
          Baby's First Name: <input type="text" placeholder="First Name" />&nbsp;
          Baby's Last Name: <input type="text" placeholder="Last Name" />
        </div>


        <br />
        <br />
        <div id="genderAndStatsDiv">
          <div id="genderDiv">
            Birth Date: <input type="date" />
            <br />
            <br />
            Girl
            <input id="genderGirl" type="radio" name="gender" value="girl" checked />
            <br />
            Boy
            <input id="genderBoy" type="radio" name="gender" value="boy" />
          </div>
          <br />
          <div id="statsDiv">
            Gestation: Weeks:
            <select name="Weeks" id="selectWeeks">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
            </select>
            Days:
            <select name="Days" id="selectDays">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <br />
            <br />
            Weight: Pounds:
            <select name="Pounds" id="selectPounds">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            Ounces:
            <select name="Ounces" id="selectOunces">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
            <br />
            <br />
            <button onClick={this.props.addAnotherBaby}>Add Another Baby</button>
          </div>
        </div>




      </div>



    )
  }
}

export default BabyInfo;