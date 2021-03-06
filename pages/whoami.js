import React, { Component } from 'react';
import Head from 'next/head'
import Nav from '../components/Homepage';
import Image from 'next/image';
import About_me from './aboutMe';

export default function Whoami() {
  return (
      <div>
        <Head>
          <title>İhsan Buğra Coşkun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Nav activeItem="aboutme"/>

        <section id="home" className="main-about parallax-section">
            <div className="overlay"></div>
            <div className="container">
                  <div className="row">

                      <div className="col-md-12 col-sm-12">
                            <h1>Ben Kimim?</h1>
                      </div>

                  </div>
            </div>
        </section>
        
        <div className="whoami">
          
          <div style={{width: "calc(100% - 170px)", float: "left", textAlign:"left", marginLeft: "10px"}}>
            <About_me/>
          </div>
          

          <div className="photo2">
            <Image
              src="/photo/logo.jpg"
              alt="Picture of the author"
              layout="fixed"
              width={150}
              height={200}
              alt="My Photo"
              quality={50}
            />
          </div>


        </div>

        <div style={{width: "calc(100% - 170px)", float: "left"}}><h2 style={{textAlign: "center"}}>Ben Kimim?</h2>
            <div style={{marginLeft: "10px"}}>
              Kendimi CBS yazılımcısı olarak ifade ediyorum. Bugüne kadar Python, Javascript, VueJS gibi dilleri kullanarak uydu görüntüsü işleme, algoritma
              geliştirme, web tabanlı CBS projeleri ile kendimi geliştirme fırsatı buldum. Ayrıca openlayers, mapbox, turfjs gibi teknolojilerde çalıştım.
            </div>
        </div>

        

        <style jsx>{`
          .photo{
            padding-right: 10px;
            float: right;
          }

          .whoami{
            width: 100%;
            padding-top: 10px;
          }
        `}</style>
      </div>
    
  )
}
