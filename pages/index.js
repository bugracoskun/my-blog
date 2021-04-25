import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from '../components/Homepage';
import Image from 'next/image';
import About_me from './aboutMe';

export default function Home() {
  return (
      <div className="container">
        <Head>
          <title>İhsan Buğra Coşkun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Nav activeItem="mainpage"/>

        <div className="whoami">
          <div style={{width: "calc(100% - 170px)", float: "left"}}><h2 style={{textAlign: "center"}}>Ben Kimim?</h2>
            <div style={{marginLeft: "10px"}}>
              Benim adım İhsan Buğra Coşkun. 23 Mayıs 1996 tarihinde Ankara'da doğdum. 2014 yılında Hacettepe Üniversitesi Geomatik Mühendisliğini kazandım.
              Hazırlıkla beraber toplam 5 yıllık bir %100 ingilzice eğitim aldığım bir lisans hayatım oldu. Lisans hayatım boyunca ödevler dışında kendimi
              geliştirmek amaçlı ufak çaplı bir çok yazılım projeleri geliştirdim. 
            </div>

            <div style={{marginLeft: "10px"}}>
              2019 yılında Hacettepe Geomatik Mühendisliğinden üçüncülükle mezun oldum. Aynı yıl bitirme projelerinde bölüm içerisinde üçüncülük ve mühendislik
              fakültesinde yapılan sergide bölüm içinde birincilik ödülünü kazandık. Bitirme projesi yanında aynı zamanda danışman hocamla beraber Tübitak
              projesinde yer alma fırsatı buldum. Projelerin ayrıntılarını 'Projelerim' sekmesinden ulaşabilrisiniz.
            </div>
            <div style={{marginLeft: "10px"}}>
              Kendimi CBS yazılımcısı olarak ifade ediyorum. Bugüne kadar Python, Javascript, VueJS gibi dilleri kullanarak uydu görüntüsü işleme, algoritma
              geliştirme, web tabanlı CBS projeleri ile kendimi geliştirme fırsatı buldum. Ayrıca openlayers, mapbox, turfjs gibi teknolojilerde çalıştım.
            </div>
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

        <About_me/>

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

//<div style={{marginBottom: "10px"}}>
//<Button primary>Primary</Button>
//<Button secondary>Secondary</Button>
//</div>
//<div><button className="ui primary button">Primary</button><button className="ui secondary button">Secondary</button></div>
