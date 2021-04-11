import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from '../components/Homepage';

export default function Home() {
  return (
      <div className="container">
        <Head>
          <title>İhsan Buğra Coşkun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Nav activeItem="mainpage"/>

        <div>Anasayfa</div>
        <style jsx>{``}</style>
      </div>
    
  )
}


//<div style={{marginBottom: "10px"}}>
//<Button primary>Primary</Button>
//<Button secondary>Secondary</Button>
//</div>
//<div><button className="ui primary button">Primary</button><button className="ui secondary button">Secondary</button></div>
