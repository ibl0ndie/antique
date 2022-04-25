import React from "react";

function Header() {
  return (
    <>
      <header className="nk-header page-header is-transparent is-sticky is-dark" id="header">
        {/* <!-- Header @s --> */}
        <div className="header-main">
          <div className="header-container container container-xxl">
            <div className="header-wrap">
              {/* <!-- Logo @s --> */}
              <div className="header-logo logo animated" data-animate="fadeInDown" data-delay=".6">
                <div className="logo-link">
                  <a href="./">
                    <img className="logo-light" src="images/token.svg" srcset="images/token.svg 2x" alt="logo" />
                  </a>
                </div>
              </div>

              {/* <!-- Menu Toogle @s --> */}
              <div className="header-nav-toggle">
                <a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
                  <div className="toggle-line">
                    <span></span>
                  </div>
                </a>
              </div>

              {/* <!-- Menu @s --> */}
              <div className="header-navbar animated" data-animate="fadeInDown" data-delay=".6">
                <nav className="header-menu" id="header-menu">
                  <ul className="menu">
                    <li className="menu-item"><a className="menu-link nav-link" href="swap/index.html">Swap</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#about">RoadMap</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#tokensale"></a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#roadmap">White-paper</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#Team">Airdrop</a></li>
                  </ul>
                </nav>
              </div>
              {/* <!-- .header-navbar @e --> */}
            </div>
          </div>
        </div>
        {/* <!-- .header-main @e --> */}

        <div className="banner banner-fs tc-light">

          <div className="nk-block nk-block-header nk-block-sm my-auto">


            <div className="container pt-5">
              <div className="banner-caption text-center">
                <h1 className="title title-xl-2 ttu animated" data-animate="fadeInUp" data-delay="0.7">AntiQueSwap</h1>
                <div className="row justify-content-center pb-3">
                  <div className="col-sm-11 col-xl-11 col-xxl-8">
                    <p className="lead animated" data-animate="fadeInUp" data-delay="0.8">EASY CRYPTO SWAP</p>
                  </div>
                </div>
                <span className="gfx animated" data-animate="fadeInUp" data-delay="0.2">
                  <img src="images/aqe.gif" alt="gfx" style={{ width: "auto", height: "39vh" }} />
                </span>
                <div className="cpn-action">
                  <ul className="btn-grp mx-auto">
                    <li className="animated" data-animate="fadeInUp" data-delay="1"><a href="#presale" className="menu-link btn btn-round btn-outline btn-primary">TOKEN SALE</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nk-block nk-block-actions">
            <div className="container container-xxl">
              <div className="row gutter-vr-40px align-items-center">
                <div className="col-sm-7 d-flex justify-content-center justify-content-sm-start">
                  <ul className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
                    <li className="animated" data-animate="fadeInUp" data-delay="0.9"><a href="#" className="link link-light link-break"><em className="icon-circle icon-border far fa-lightbulb"></em><span>Why buy Tokens now?</span></a></li>
                  </ul>
                </div>
                <div className="col-sm-5">
                  <ul className="social-links social-links-s2 justify-content-center justify-content-sm-end animated" data-animate="fadeInUp" data-delay="1">
                    <li><a href="http://twitter.com/antique_swap"><em className="fab fa-twitter"></em></a></li>
                    <li><a href="http://t.me/antiqueswap"><em className="fab fa-telegram"></em></a></li>
                    <li><a href="https://discord.gg/VUrg3AxNvG"><em className="fab fa-discord"></em></a></li>
                    <li><a href="http://instagram.com/antiquetechnology"><em className="fab fa-instagram"></em></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Place Particle Js --> */}
          <div id="particles-bg" className="particles-container is-fixed particles-bg op-20"></div>
        </div>
      </header >
    </>
  );
}

export default Header;
