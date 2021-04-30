import React, { Component,useState,setState  } from 'react';
import Head from 'next/head'
import { Button,Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from '../components/Homepage';
import Image from 'next/image';
import Link from 'next/link';
import Particles from 'react-particles-js';


export default class home extends Component {
  constructor(props){
    super(props);

    this.state={
      height: 500,
      width: 500
    }
  }

  componentDidMount() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    this.setState ({
      height: height - 76,
      width: width
    })
    window.addEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight - 76 });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }


  render() {
    return (
      <div>
        <Head>
          <title>İhsan Buğra Coşkun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav activeItem="mainpage"/>

        <section id="home" className="main-home parallax-section">
            <div className="overlay"></div>
            <div id="particles-js"><Particles 
              params={{
                particles: {
            			"number": {
                    "value": 80,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#888"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#777",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
            		},
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true,
                "config_demo": {
                  "hide_card": false,
                  "background_color": "#b61924",
                  "background_image": "",
                  "background_position": "50% 50%",
                  "background_repeat": "no-repeat",
                  "background_size": "cover"
                }
              }} 
            /></div>
            <div className="container">
                  <div className="row">

                      <div className="col-md-12 col-sm-12">
                            <h1>Kişisel Sayfama Hoşgeldiniz</h1>
                            <h4>CBS Yazılımcısı İhsan Buğra COŞKUN</h4>
                            <Link className="item" href="/whoami">
                              <a href="" className="smoothScroll btn btn-default">Hakkımda</a>
                            </Link>
                            
                      </div>

                  </div>
            </div>
        </section>

      </div>
      /*
      <div>
        <Head>
          <title>İhsan Buğra Coşkun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Nav activeItem="mainpage"/>

        <div className="gisphoto">
            <Image
              src="/gis2.jpg"
              layout="fixed"
              width={this.state.width}
              height={this.state.height}
              style={{}}
              alt="GIS"
            />
        </div>

        <div className="pagedesign">
          <div className="mainpageHeader">Kişisel Sayfama Hoşgeldiniz !</div>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column floated='right' width={5}>
              <div className="mainpageExp">
                <div>
                  Merhaba, benim adım İhsan Buğra Coşkun. CBS yazılımcısı olarak kariyerime devam ediyorum. Her türlü iş tekliflerine açığım.
                </div><br/>
                <div>
                  Benimle iletişime geçmek için aşağıdaki butonu kullanabilirsiniz.
                </div>

                <div style={{position:'absolute',textAlign:'center',width:'calc(100% - 55px)',bottom:'10px'}}><Link href="/contact"><Button inverted color='green' style={{width: 'calc(100% - 40px)'}}>İletişim</Button></Link></div>
              </div>
              </Grid.Column>
              <Grid.Column columns={3}>
                  <Grid.Row>
                    <Image
                      src="/nextjs.png"
                      layout="fixed"
                      width={200}
                      height={100}
                      style={{}}
                      alt="GIS"
                    />
                  </Grid.Row>
                  <Grid.Row>
                    <Image
                      src="/react.png"
                      layout="fixed"
                      width={100}
                      height={100}
                      style={{}}
                      alt="GIS"
                    />
                  </Grid.Row>
                  <Grid.Row>
                    <Image
                      src="/js.png"
                      layout="fixed"
                      width={160}
                      height={70}
                      style={{}}
                      alt="GIS"
                    />
                  </Grid.Row>
                
              </Grid.Column>
              <Grid.Column floated='left' width={5}>
                <div className="mainpageExp">
                  <div>
                    Bu sayfada geçmiş projelerimden ve güncel çalışmalarımdan bahsedeceğim.
                  </div><br/>
                  <div>
                    Projelerimi görmek için aşağıdaki butona tıklayabilirsiniz.
                  </div>
                  <div style={{position:'absolute',textAlign:'center',width:'calc(100% - 55px)',bottom:'10px'}}><Link href="/myprojects"><Button inverted color='orange' style={{width: 'calc(100% - 40px)'}}>Projelerim</Button></Link></div>

                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        

        <style jsx>{`
          .container{
            width: 100%;
            height: calc(100% - 100px);
          }

          .pagedesign{
            position: absolute;
            top: 170px;
            width: 100%;
            text-align: center;
          }

          .mainpageHeader{
            color: #9c1129;
            top: 170px;
            font-weight: 900;
            font-size: 50px;
            font-family: Times New Roman;
            font-style: italic;
            margin-bottom: 50px;
          }

          .gisphoto{
            width: auto;
            z-index: -1;
            opacity: 0.3;
          }

          .mainpageExp{
            border: 2px solid #1b1c1d;
            border-radius: 25px;
            padding: 20px;
            height: 500px;
            background: #1b1c1d;
            color: #d3d6de;
            font-family: open sans,sans-serif;
          }

          .mainpageExp2{
            border: 2px solid #1b1c1d;
            border-radius: 25px;
            padding: 20px;
            height: 400px;
            width: 300px;
            background: #1b1c1d;
            margin-right: calc(25% - 150px);
            color: #d3d6de;
            font-family: open sans,sans-serif;
          }
        `}</style>
      </div>
          */
    )
  }
}

