import React, { Component,useState,setState  } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from '../components/Homepage';
import Image from 'next/image';
import About_me from './aboutMe';


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
      height: height - 71,
      width: width
    })
    window.addEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight - 71 });
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

        <div style={{color: '#9c1129', position:'fixed',textAlign:'center',width:'100%',height:'100px', top:'170px', fontWeight: '900',fontSize:'50px',fontFamily:'Times New Roman', fontStyle:'italic' }}>Kişisel Sayfama Hoşgeldiniz !</div>

        <style jsx>{`
          .container{
            width: 100%;
            height: calc(100% - 100px);
          }

          .gisphoto{
            width: auto;
            height: 500px;
            z-index: -1;
            opacity: 0.3;
          }
        `}</style>
      </div>
    
    )
  }
}


