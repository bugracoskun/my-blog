import React, { Component,useState,setState  } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Button,Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from '../components/Homepage';
import Image from 'next/image';
import About_me from './aboutMe';
import Link from 'next/link';


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
      <div className="container">
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
    
    )
  }
}

