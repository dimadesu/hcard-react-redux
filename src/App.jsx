import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: 'John',
      surname: 'Doe',
      email: 'email@email.com',
      phone: '021 0123 4567',
      // address
      house: '1',
      street: 'Darling Island Road',
      suburb: 'Pyrmont',
      state: 'NSW',
      postcode: '2009',
      country: 'Australia',
    };
    this.onGivenNameChange = this.onGivenNameChange.bind(this);
    this.onSurnameChange = this.onSurnameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    // address
    this.onHouseChange = this.onHouseChange.bind(this);
    this.onStreetChange = this.onStreetChange.bind(this);
    this.onSuburbChange = this.onSuburbChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onPostcodeChange = this.onPostcodeChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  onGivenNameChange(e){
    this.setState({
      givenName: e.target.value
    });
  }

  onSurnameChange(e){
    this.setState({
      surname: e.target.value
    });
  }

  onEmailChange(e){
    this.setState({
      email: e.target.value
    });
  }

  onPhoneChange(e){
    this.setState({
      phone: e.target.value
    });
  }

  // Address

  onHouseChange(e){
    this.setState({
      house: e.target.value,
    });
  }

  onStreetChange(e){
    this.setState({
      street: e.target.value,
    });
  }

  onSuburbChange(e){
    this.setState({
      suburb: e.target.value,
    });
  }

  onStateChange(e){
    this.setState({
      state: e.target.value,
    });
  }

  onPostcodeChange(e){
    this.setState({
      postcode: e.target.value,
    });
  }

  onCountryChange(e){
    this.setState({
      country: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="hcard-editor">
          <form>
            <h1>hCard Builder</h1>
            
            <h2>PERSONAL DETAILS</h2>
            <div className="field-group">
              <div className="field">
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="text" id="given-name" onChange={this.onGivenNameChange} value={this.state.givenName} />
              </div>
              <div className="field">
                <label htmlFor="surname">SURNAME</label>
                <input type="text" id="surname" onChange={this.onSurnameChange} value={this.state.surname} />
              </div>
              <div className="field">
                <label htmlFor="email">EMAIL</label>
                <input type="text" id="email" onChange={this.onEmailChange} value={this.state.email} />
              </div>
              <div className="field">
                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" onChange={this.onPhoneChange} value={this.state.phone} />
              </div>
            </div>

            <h2>ADDRESS</h2>
            <div className="field-group">
              <div className="field">
                <label htmlFor="house">HOUSE NAME OR #</label>
                <input type="text" id="house" onChange={this.onHouseChange} value={this.state.house} />
              </div>
              <div className="field">
                <label htmlFor="street">STREET</label>
                <input type="text" id="street" onChange={this.onStreetChange} value={this.state.street} />
              </div>
              <div className="field">
                <label htmlFor="suburb">SUBURB</label>
                <input type="text" id="suburb" onChange={this.onSuburbChange} value={this.state.suburb} />
              </div>
              <div className="field">
                <label htmlFor="state">STATE</label>
                <input type="text" id="state" onChange={this.onStateChange} value={this.state.state} />
              </div>
              <div className="field">
                <label htmlFor="postcode">POSTCODE</label>
                <input type="text" id="postcode" onChange={this.onPostcodeChange} value={this.state.postcode} />
              </div>
              <div className="field">
                <label htmlFor="country">COUNTRY</label>
                <input type="text" id="country" onChange={this.onCountryChange} value={this.state.country} />
              </div>
            </div>
            <div className="buttons">
              <button type="button">Upload Avatar</button>
              <button type="button">Create hCard</button>
            </div>
          </form>
        </div>
        <div className="hcard-preview">
          <div className="hcard-card vcard">
            <div>HCARD PREVIEW</div>
            <div>Avatar</div>
            <div>
              {this.state.givenName} {this.state.surname}
            </div>
            <dl>
              <dt>EMAIL</dt>
              <dd>{this.state.email}</dd>
            </dl>
            <dl>
              <dt>PHONE</dt>
              <dd>{this.state.phone}</dd>
            </dl>
            <div className="adr">
              <dl>
                <dt>ADDRESS</dt>
                <dd>
                  {this.state.house} {this.state.street},<br/>
                  {this.state.suburb}, {this.state.state}
                </dd>
              </dl>
              <dl>
                <dt>POSTCODE</dt>
                <dd>{this.state.postcode}</dd>
              </dl>
              <dl>
                <dt>COUNTRY</dt>
                <dd>{this.state.country}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
