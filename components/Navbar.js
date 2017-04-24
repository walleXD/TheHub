import React from 'react'

const Navbar = () => (
  <header>
    <div className="header-container">
      <div className="logo">LOGO</div>
      <div className="ham"> &#9776; </div>
      <ul>
        <a href="#"><li>Publish</li></a>
        <a href="#"><li>Publish</li></a>
        <a href="#"><li>Publish</li></a>
        <a href="#"><li>Publish</li></a>
      </ul>
    </div>
    <style jsx>{`
      header {
        background: #771B9A;
        height: 60px;
        width: 100%;
        display: inline-block;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, .3);
      }
      .header-container{
        position:relative;
        margin: 0 auto;
        width:80%;
        height: 100%;
      }
      .header-container div{
        margin: 0;
        display: inline-block;
        padding: 10px;
      }
      .header-container .logo{
        width: 10%;
        height: auto;
      }
      .header-container .ham{
        line-height: 40px;
        cursor: pointer;
        font-size: 1.4em;
        font-weight: bold;
        outline: none;
      }
      .header-container ul{
        padding: 0; margin: 0;
        position: absolute;
        right: 0; top: 15%;;
        width: 50%;

      }
      ul a, ul a:active, ul a:visited{
        color: #000;
      }
      .header-container ul a li{
        display: inline-block;
        padding: 10px;
        margin-right: 10px;
        width: 18%;
        border: 1px solid #000;/*remove this later*/
      }
    `}
    </style>
  </header>
)

export default Navbar
