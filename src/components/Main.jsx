import React from 'react';
import ScriptTag from 'react-script-tag';

function Home() {

  return (
    <>
      <ScriptTag isHydrating={true} type="text/javascript" src="../../public/assets/js/scripts1bce.js?ver=1930" />
      <ScriptTag isHydrating={true} type="text/javascript" src="../../public/assets/js/charts.js" />
      <main className="nk-pages tc-light">
        <section className="section" id="about">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="section-head section-head-s2">
                  <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="All About Us">ABOUT</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-xxl">
            <div className="nk-block">
              <div className="row justify-content-between align-items-center gutter-vr-40px">

                <div className="col-lg-5">
                  <div className="nk-block-text">
                    <h2 className="title animated" data-animate="fadeInUp" data-delay="0.3">About AntiQueSwap</h2>
                    <p className="animated" data-animate="fadeInUp" data-delay="0.4">AntiqueSwap is a DeFi wealth management platform designed to bring simplicity to investors interested in entering the cryptocurrency and the DeFi market.</p>
                    <ul className="btn-grp gutter-vr-20px pdt-m">
                      <li className="animated" data-animate="fadeInUp" data-delay="0.6"><a href="#presale" className="menu-link btn btn-primary btn-round btn-lg"><span>Join Presale</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- // --> */}
        <section className="section" id="tokensale">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="section-head section-head-s2">
                  <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="Tokenomics">Tokenomics</h2>
                  <p className="animated" data-animate="fadeInUp" data-delay="0.2">Breakdown of our Token Recipients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-xxl">
            <div className="nk-block">
              <div className="row align-items-center gutter-vr-50px">
                <div className="col-xxl-4 col-lg-6 px-xl-5 order-xl-1">
                  <div className="animated" data-animate="fadeInUp" data-delay="0.3">
                    <canvas className="chart-canvas" id="token-distribution"></canvas>
                  </div>
                </div>
                <div className="col-xxl col-lg-6">
                  <ul className="chart-data-s2 row" data-canvas="token-distribution" data-canvas-type="pie" data-border-color="#0f1932">
                    <li className="col-sm-8" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Pre-Sale" data-title="Tokens alocate for Pre-Sale" data-subtitle="" data-amount="55"></li>
                    <li className="col-sm-8" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Private Sale" data-title="Tokens alocate for Private Sale" data-subtitle="(6 month lockup for half bonus)" data-amount="25"></li>
                    <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Reserve Fund" data-title="Reserve Fund" data-subtitle="(6 months lockup)" data-amount="8"></li>
                    <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Team & Founder" data-title="Team & Founder" data-subtitle="(3 months lockup)" data-amount="1"></li>
                    <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Bounty & Events" data-title="Bounty & Events" data-subtitle="(1 months lockup)" data-amount="5"></li>
                    <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Burnt" data-title="Burnt" data-subtitle="Burnt" data-amount="6"></li>
                  </ul>
                </div>
                <div className="col-xxl col-xl-12 order-last">
                  <div className="token-info-s2">
                    <div className="row gutter-vr-50px">
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-1 animated" data-animate="fadeInUp" data-delay="0.7">
                          <div className="token-info-title">Start Time</div>
                          <h4 className="token-info-des">June 30, 2022</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-1 animated" data-animate="fadeInUp" data-delay="0.7">
                          <div className="token-info-title">Token Symbol</div>
                          <h4 className="token-info-des">AntiQue</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-1 animated" data-animate="fadeInUp" data-delay="0.7">
                          <div className="token-info-title">Token Supply</div>
                          <h4 className="token-info-des">9,800,000 AntiQue</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-2 animated" data-animate="fadeInUp" data-delay="0.75">
                          <div className="token-info-title">End Time</div>
                          <h4 className="token-info-des">July 30, 2021</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-2 animated" data-animate="fadeInUp" data-delay="0.75">
                          <div className="token-info-title">Tokens Offered</div>
                          <h4 className="token-info-des">5,390,000</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-3 animated" data-animate="fadeInUp" data-delay="0.8">
                          <div className="token-info-title">Soft Cap</div>
                          <h4 className="token-info-des">25,000 USD</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-3 animated" data-animate="fadeInUp" data-delay="0.8">
                          <div className="token-info-title">Hard Cap</div>
                          <h4 className="token-info-des">100,000 USD</h4>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-6 col-lg-3">
                        <div className="token-info-item color-4 animated" data-animate="fadeInUp" data-delay="0.85">
                          <div className="token-info-title">Crowdsale</div>
                          <h4 className="token-info-des">3,390,000 AQE</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- // --> */}
        <section className="section" id="roadmap">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="section-head section-head-s2">
                  <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="AntiqueSwap">AntiqueSwap ROADMAP</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-xxl">
            <div className="nk-block">
              <div className="roadmap-wrap roadmap-wrap-ovl-right text-center animated" data-animate="fadeInUp" data-delay="0.3">
                <div className="roadmap-line-s2"></div>
                <div className="roadmap-slider has-carousel carousel-nav-center" data-blank="true" data-items="5" data-items-tab-l="4" data-items-tab-p="3" data-items-mobile="2" data-margin="-1" data-navs="true">
                  <div className="roadmap roadmap-s2 roadmap-i1 roadmap-running">
                    <h6 className="roadmap-year-s2">Phase 1</h6>
                    <div className="roadmap-text">
                      <p>- Website Launch V1</p>
                      <p>- Social Media Launch</p>
                      <p>- Launch Swap</p>
                      <p>- Trading Start</p>
                    </div>
                  </div>
                  <div className="roadmap roadmap-s2 roadmap-i2 roadmap-date">
                    <h6 className="roadmap-year-s2">Phase 2</h6>
                    <div className="roadmap-text">
                      <p>- Luanch Staking V1</p>
                      <p>- Launch Mobile APP</p>
                      <p>- Add New Token For Swap</p>
                      <p>- Launching On Small Exchange</p>
                      <p>- 25.000+ Token Holders</p>
                    </div>
                  </div>
                  <div className="roadmap roadmap-s2 roadmap-i3">
                    <h6 className="roadmap-year-s2">Phase 3</h6>
                    <div className="roadmap-text">
                      <p>- Update Website To V2</p>
                      <p>- Listing On Major Exchanges</p>
                      <p>- 50,000+ Token Holders</p>
                    </div>
                  </div>
                  <div className="roadmap roadmap-s2 roadmap-i4">
                    <h6 className="roadmap-year-s2">Phase 4</h6>
                    <div className="roadmap-text">
                      <p>- Crosschain Swap</p>
                      <p>- NFT Platform Launch</p>
                      <p>- New Partnership</p>
                      <p>- Create Our Blockcahin</p>
                    </div>
                  </div>
                  <div className="roadmap roadmap-s2 roadmap-i5">
                    <h6 className="roadmap-year-s2">Phase 5</h6>
                    <div className="roadmap-text">
                      <p>- Update All information</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- // --> */}

        {/* // <!-- // --> */}
        <section className="section" id="Team">

          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="section-head section-head-s2">
                  <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="AntiqueSwap Team">AntiqueSwap Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-xxl">
            <div className="nk-block">
              <div className="row text-center align-items-lg-start gutter-vr-40px">
                <div className="col-lg-3 col-sm-6">
                  <div className="feature feature-s6 feature-s6-1 animated" data-animate="fadeInUp" data-delay="0.3">
                    <div className="feature-text">
                      <img src="images/profile_user1.html" width="80%" />
                      <h5 className="title title-sm ttu" style={{ marginTop: 20 }}>Kendrick F. Edwards</h5>
                      <p> Frontend developer and designer.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="feature feature-s6 feature-s6-2 animated" data-animate="fadeInUp" data-delay="0.4">
                    <div className="feature-text">
                      <img src="images/profile_user2.html" width="80%" />
                      <h5 className="title title-sm ttu" style={{ marginTop: 20 }}>Patricia O. Gamble</h5>
                      <p>CEO & Co-founder</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="feature feature-s6 feature-s6-3 animated" data-animate="fadeInUp" data-delay="0.5">
                    <div className="feature-text">
                      <img src="images/profile_user3.html" width="80%" />
                      <h5 className="title title-sm ttu" style={{ marginTop: 20 }}>Dayna J. Epley</h5>
                      <p> Backend developer & Server admin</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="feature feature-s6 feature-s6-3 animated" data-animate="fadeInUp" data-delay="0.6">
                    <div className="feature-text">
                      <img src="images/profile_user4.html" width="80%" />
                      <h5 className="title title-sm ttu" style={{ marginTop: 20 }}>Brian J. Zahn
                      </h5>
                      <p>   Smart Contract Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block" data-animate="fadeInUp" data-delay="0.2">
                <img src="images/globe-particle.png" alt="globe" />
              </div>
            </div>
          </div>
        </section>
        {/* /* < !--Block @s--> */}
        <div className="nk-block block-partners">
          <h6 className="title title-md ttu text-center animated" data-animate="fadeInUp" data-delay="0.65">Our Partners</h6>
          <ul className="has-carousel partner-list justify-content-center animated" data-items="7" data-items-mobile="2" data-auto="true" data-loop="true" data-animate="fadeInUp" data-delay="0.75">
            <li className="partner-logo"><img src="images/partners/a-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/b-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/c-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/d-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/e-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/f-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/g-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/a-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/b-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/c-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/d-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/e-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/f-light.png" alt="" /></li>
            <li className="partner-logo"><img src="images/partners/g-light.png" alt="" /></li>
          </ul>
        </div>
        {/* /* <!-- Block @e --> */}




        <section className="section" id="contact">

          <div className="container">
            {/* <!-- Block @s --> */}
            <div className="nk-block nk-block-about">
              <div className="row justify-content-between align-items-center gutter-vr-50px">
                <div className="col-lg-6">
                  <div className="nk-block-text">
                    <div className="nk-block-text-head">
                      <h2 className="title title-lg ttu animated" data-animate="fadeInUp" data-delay="0.7">Contact Us</h2>
                      <p className="animated" data-animate="fadeInUp" data-delay="0.8">We are always open and we welcome and questions you have for our team.</p>
                    </div>

                  </div>
                </div>
                <div className="col-lg-5 text-center order-lg-first">
                  <div className="nk-block-contact nk-block-contact-s1  animated" data-animate="fadeInUp" data-delay="0.1">
                    <ul className="contact-list">
                      <li className="animated" data-animate="fadeInUp" data-delay="0.3">
                        <em className="contact-icon fas fa-envelope"></em>
                        <div className="contact-text">
                          <span>@AntiQueSwap</span>
                        </div>
                      </li>
                      <li className="animated" data-animate="fadeInUp" data-delay="0.4">
                        <em className="contact-icon fas fa-envelope"></em>
                        <div className="contact-text">
                          <span>antique2022technology@gmail.com</span>
                        </div>
                      </li>
                    </ul>
                    <div className="nk-circle-animation nk-df-center white small"></div>
                    {/* <!-- .circle-animation --> */}
                  </div>

                  <ul className="social-links social-links-s2 justify-content-center animated" data-animate="fadeInUp" data-delay="0.6">
                    <li><a href=""><em className="fab fa-twitter"></em></a></li>
                    <li><a href=""><em className="fab fa-github"></em></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- .block @e --> */}
          </div>
        </section>

      </main >
    </>
  );
}

export default Home;
