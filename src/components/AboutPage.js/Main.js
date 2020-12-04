import React from "react";

const Main = () => {
  return (
    <main style={{backgroundColor:'#2a88b0', height:'250px',justifyContent:'center',alignItems:'center', display:'flex'}}>
      <div className="section-title">
        <p style={{color:'white',fontSize:35,letterSpacing:3}}>About Us</p>
        <hr style={{borderColor:'white',width:60}} className="line" />
      </div>
    </main>
  );
};

export default Main;
