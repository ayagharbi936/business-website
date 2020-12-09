import React from "react";
import img1 from "../../images/about-img1.jpg";
import img2 from "../../images/about-img2.jpg";
import img3 from "../../images/about-img4.jpg";
const Overview = () => {
  return (
    <div className="overview-about">
      <div className="overview-about-container">
        <div className="overview-content">
          <p className="title">OUR VISION</p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            nisl placerat, efficitur magna vitae, facilisis lacus.
            <br /> <br />
            Pellentesque sed lacus sed ligula fringilla sodales. Pellentesque
            vitae mi vel augue luctus elementum. Sed ut eros enim. Pellentesque
            dolor est, feugiat vel nisi ut,ugue luctus, pellentesque massa sit
            amet, hendrerit ante. <br /> <br /> Fusce accumsan maximus metus, et
            tempor massa facilisis sit amet. Curabitur ut ullamcorper arcu.
            Etiam leo magna, ultricies quis facilisis ut, varius at dolor.{" "}
            <br /> <br />
            Sed cursus vitae ex sit amet mattis. Quisque quis sem quam. Etiam ut
            diam vel elit dignissim viverra in a leo.
          </p>
        </div>
        <div className="overview-img">
          <img alt="" src={img1} />
        </div>
      </div>
      <div className="overview-about-container">
        <div className="overview-img">
          <img alt="" src={img2} />
        </div>
        <div className="overview-content">
          <p className="title">OUR APPROCH</p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            nisl placerat, efficitur magna vitae, facilisis lacus.
            <br /> <br />
            Pellentesque sed lacus sed ligula fringilla sodales. Pellentesque
            vitae mi vel augue luctus elementum. Sed ut eros enim. Pellentesque
            dolor est, feugiat vel nisi ut,ugue luctus, pellentesque massa sit
            amet, hendrerit ante. <br /> <br /> Fusce accumsan maximus metus, et
            tempor massa facilisis sit amet. Curabitur ut ullamcorper arcu.
            Etiam leo magna, ultricies quis facilisis ut, varius at dolor.{" "}
            <br /> <br />
            Sed cursus vitae ex sit amet mattis. Quisque quis sem quam. Etiam ut
            diam vel elit dignissim viverra in a leo.
          </p>
        </div>
      </div>
      <div className="overview-about-container">
        <div className="overview-content">
          <p className="title">OUR PROCESS</p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            nisl placerat, efficitur magna vitae, facilisis lacus.
            <br /> <br />
            Pellentesque sed lacus sed ligula fringilla sodales. Pellentesque
            vitae mi vel augue luctus elementum. Sed ut eros enim. Pellentesque
            dolor est, feugiat vel nisi ut,ugue luctus, pellentesque massa sit
            amet, hendrerit ante. <br /> <br /> Fusce accumsan maximus metus, et
            tempor massa facilisis sit amet. Curabitur ut ullamcorper arcu.
            Etiam leo magna, ultricies quis facilisis ut, varius at dolor.{" "}
            <br /> <br />
            Sed cursus vitae ex sit amet mattis. Quisque quis sem quam. Etiam ut
            diam vel elit dignissim viverra in a leo.
          </p>
        </div>
        <div className="overview-img">
          <img alt="" src={img3} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
