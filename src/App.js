import React, { Component } from 'react';
// import MyMap from './myMap';
import Head from './img/head.png';
import Heart from './img/heart.png';
import GreyHeart from './img/greyHeart.png';
import car from './img/car.png';
import play from './img/play.png';
import bookmark from './img/bookmark.png';
import add_button from './img/add_button.png';
import share from './img/share.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {

    return (
      <div style={{ marginBottom: "40px" }}>
        {/* container-fluid */}
        {/* Main_Profile_Pic */}
        <div className="" style={{ position: 'relative' }}>
          <img src={Head} alt="img" className="Head-img" />
          <div className="">

            <div className=" profile_detail">
              <div className="row" style={{ marginTop: '10px' }}>
                <div className="col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-sm-6 col-md-6 col-lg-6 Add_Your_Photo"><h1>Add Your Photo</h1></div>
                <div className="col-sm-3 col-md-3 col-lg-3"><img src={share} alt="img" className="" width="20%" /></div>
              </div>

              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4"><h1>65</h1><p>Searches</p></div>
                <div className="col-sm-4 col-md-4 col-lg-4"><img src={add_button} alt="img" className="" width="20%" /></div>
                <div className="col-sm-4 col-md-4 col-lg-4"><h1>856</h1><p>Session</p></div>
              </div>
            </div>
          </div>

        </div>

        {/* profile content */}

        <div className="container">
          <div className="profile_content">

            {/* 2nd */}
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="profile_img">
                  <img src={Head} alt="img" />
                </div>
                <div className="heart">
                  <img src={Heart} alt="img" className="" />
                </div>
              </div>

              <div className="col-sm-8 col-md-8 col-lg-8 description">
                <h1>Asana Vinyasa</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum dolor sit amet consectetur adipisi. Lorem ipsum dolor sit amet consectetur adipisi.</p>
              </div>
            </div>

            {/* 3rd */}
            <div className="row list">
              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>

              {/* 1 */}
              <div className="col-sm-4 col-md-3 col-lg-3 ">
                <center>
                  <div className="item">
                    <div className="list_profile_img">
                      <img src={Head} alt="img" />
                    </div>
                    <div className="list_heart">
                      <img src={GreyHeart} alt="img" className="" />
                    </div>
                    <p className="profile_title">Aryan</p>
                  </div>
                </center>
              </div>
            </div>
            {/* end 3rd */}
          </div>

          {/* Cars */}
          <div className="profile_content" style={{ padding: '0%' }}>
            <div className="msg">
              <h1>Message from Kwaku</h1>
              <p>Looks at this video, my friend!!!</p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img src={car} alt="img" className="car" />
                <img src={play} alt="img" className="play" />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img src={car} alt="img" className="car" />
                <img src={play} alt="img" className="play" />
              </div>
            </div>
          </div>

          {/* Cars List */}
          <div className="profile_content" style={{ padding: '0%' }}>
            <br />
            <br />
          <div className="last">
              <div className="row ">
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <img src={car} alt="img" className="car_list" />
                </div>
                <div className="col-sm-7 col-md-7 col-lg-7">
                  <h1>East Merlin</h1>
                  <p>Precautionary Mearsures For Hernia</p>
                  <span>2.7 Million Follow</span>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2"><img src={bookmark} alt="img" width="70%" /></div>
              </div>
            </div>

            <div className="last">
              <div className="row ">
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <img src={car} alt="img" className="car_list" />
                </div>
                <div className="col-sm-7 col-md-7 col-lg-7">
                  <h1>East Merlin</h1>
                  <p>Precautionary Mearsures For Hernia</p>
                  <span>2.7 Million Follow</span>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2"><img src={bookmark} alt="img" width="70%" /></div>
              </div>
            </div>
          <br />
          <br />
          </div>
          {/* end Cars List */}

        </div>
      </div>
    )
  }

}
export default App;
