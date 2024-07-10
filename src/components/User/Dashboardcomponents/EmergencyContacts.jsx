import React from 'react'

function EmergencyContacts() {
  return (
   
        <div
      className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-white mb-5">Emergency Contact</h1>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>Local Wildlife Expert</span>
                <span>9800000000</span>
              </li>
              <li className="list-group-item">
                <span>Tiger Expert</span>
                <span>98839548579</span>
              </li>
              <li className="list-group-item">
                <span>Ambulance</span>
                <span>9873467364</span>
              </li>
              <li className="list-group-item">
                <span>Municipality</span>
                <span>9898475944</span>
              </li>
              <li className="list-group-item">
                <span>IT/Administration</span>
                <span>98459459598</span>
              </li>
              <li className="list-group-item">
                <span>Ranger</span>
                <span>9809845982</span>
              </li>
              <li className="list-group-item">
                <span>Police</span>
                <span>984958294859</span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-6 text-white mb-5">Contact Info</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Office</td>
                  <td>Bardiya,Nepal</td>
                </tr>
                <tr>
                  <td>Head Office</td>
                  <td>Kathmandu,Nepal</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>
                    <p className="mb-2">+012 345 6789</p>
                    <p className="mb-0">ranger@example.com</p>
                  </td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>
                    <p className="mb-2">+012 345 6789</p>
                    <p className="mb-0">support@example.com</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      
    
  )
}

export default EmergencyContacts
