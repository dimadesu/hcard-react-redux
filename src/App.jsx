import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
    };
    this.onGivenNameChange = this.onGivenNameChange.bind(this);
    this.onSurnameChange = this.onSurnameChange.bind(this);
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
                <input type="text" id="email" />
              </div>
              <div className="field">
                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" />
              </div>
            </div>

            <h2>ADDRESS</h2>
            <div className="field-group">
              <div className="field">
                <label htmlFor="house">HOUSE NAME OR #</label>
                <input type="text" id="house" />
              </div>
              <div className="field">
                <label htmlFor="street">STREET</label>
                <input type="text" id="street" />
              </div>
              <div className="field">
                <label htmlFor="suburb">SUBURB</label>
                <input type="text" id="suburb" />
              </div>
              <div className="field">
                <label htmlFor="state">STATE</label>
                <input type="text" id="state" />
              </div>
              <div className="field">
                <label htmlFor="postcode">POSTCODE</label>
                <input type="text" id="postcode" />
              </div>
              <div className="field">
                <label htmlFor="country">COUNTRY</label>
                <input type="text" id="country" />
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
              <dd>sam.faifax@fairfax.com.au</dd>
            </dl>
            <dl>
              <dt>PHONE</dt>
              <dd>02 9282 2833</dd>
            </dl>
            <div className="adr">
              <dl>
                <dt>ADDRESS</dt>
                <dd>1 Darling Island Road,<br/>Pyrmont, NSW</dd>
              </dl>
              <dl>
                <dt>POSTCODE</dt>
                <dd>2009</dd>
              </dl>
              <dl>
                <dt>COUNTRY</dt>
                <dd>Australia</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
