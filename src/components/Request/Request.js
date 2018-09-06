import React, { Component } from 'react';
import './Request.css';

const RequestDetail = ({ title, data }) => (
  <div className="RequestDetail">
    <p>{title}</p>
    <p>{data}</p>
  </div>
)

class Request extends Component {
  
  state = { open: false }

  renderRequestDetails() {
    console.log(this.props)
    const {
      baby,
      address,
      address2,
      city,
      state,
      zip,
      subscription,
      nominatorEmail,
      parentEmail
    } = this.props;
    return (
      <div className={`request-details ${this.state.open ? 'open' : null}`}>
        <div>
          <div style={{ display: 'flex' }}>
          { baby.map((b, i) => (
            <div key={i}>
              <RequestDetail title="DOB" data={b.dob} />      
              <RequestDetail title="Gender" data={b.gender} />      
              <RequestDetail title="Gestation" data={`${b.weeks} weeks`} />
              { b.days > 0 && <RequestDetail data={`${b.days} days`} /> }
              <RequestDetail title="Weight" data={`${b.pounds} pounds`} />
              { b.ounces > 0 && <RequestDetail data={`${b.ounces} ounces`} /> }
            </div>
          )) }
          </div>     
        </div> 
        <div>
          <RequestDetail title="Email" data={nominatorEmail} />
          { subscription && <RequestDetail title="Subscribed" data={String(subscription)} /> }
        </div> 
        <div>
          <RequestDetail title="Email" data={parentEmail} />
        </div>
        <div>
          <RequestDetail title="Address" data={address} />
          <RequestDetail data={address2} />
          <RequestDetail data={`${city}, ${state} ${zip}`} />
        </div>
      </div> 
    )
  }

  render() {
    const {
      baby,
      nominatorName,
      parentName,
      hospitalName
    } = this.props;
    return (
        <div
          className="Request"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <div className="request-header">

              <div>
                <p>{baby[0].first}</p>
              </div>

              <div>
                <p>{nominatorName}</p>
              </div>

              <div>
                <p>{parentName}</p>
              </div>

              <div>
                <p>{hospitalName}</p>
              </div>
  
          </div>

          { this.renderRequestDetails() }

        </div>
    )
  }
}

export default Request;