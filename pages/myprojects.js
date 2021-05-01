import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/Homepage';
import Projects from '../components/projects';
import { sendData } from 'next/dist/next-server/server/api-utils';

class myprojects extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>İhsan Buğra Coşkun</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav activeItem="projects"/>

                <section id="home" className="main-projects parallax-section">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                    <h1>Projelerim</h1>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="projects">
                    <div className="ui link cards">
                        
                        <Projects 
                            title="2019 OSGeo UN Committee Educational Challenge"
                            date="2019"
                            detail="OsGeo tarafından yürtülen açık veri projesi kapsamında veri toplama projesi geliştirilmiş ve eğitim materyali hazırlanmıştır."
                            link="https://wiki.osgeo.org/wiki/Training_Material_for_2019_UN_Open_GIS_Challenge_2_-_Open_geospatial_data_and_software_for_UN_SDG_16,_Peace_justice_and_open_institutions"
                            img="/projects/osgeo_2019.png"
                            meta="OsGEO"
                            techs={["JavaScript","Openlayers","NodeJS","Postgres"]}
                        />

                        <Projects 
                            title="Büyük Ölçekli Taksi Veri Kümesinde PostgreSQL ve MongoDB'nin Sorgu Performans Analizi"
                            date="2018-2019"
                            detail="Pyhton programlama dili kullanılarak Postgres ve MongoDB veritabanlarının performans karşılaştırılması yapılmıştır."
                            link="https://github.com/bugracoskun/TUBITAK_1002_118Y282"
                            img="/projects/tubitak_2019.png"
                            meta="Tübitak"
                            techs={["Python","Postgres","PostGIS","MongoDB"]}
                        />

                        <Projects 
                            title="Lisans Bitirme Projesi"
                            date="2018-2019"
                            detail="Unity üzerinde Mapbox kullanılarak Arttırılmış Gerçeklikle Navigasyon Uygulaması Geliştirilmiştir. Geliştirilen proje mühendislik fakültesi sergisinde bölüm içerisinde birincilik ödülü almıştır."
                            link="https://www.linkedin.com/posts/ihsan-bu%C4%9Fra-co%C5%9Fkun-959088138_ar-navigation-bachelor-degree-final-project-activity-6583693742627143680-lR-W"
                            img="/projects/ar_navigation.png"
                            meta="Bitirme Projesi"
                            techs={["Unity","MapboxAR","C#"]}
                        />

                        <Projects 
                            title="Artırılmış Gerçeklik Web Sitesi"
                            date="2020"
                            detail=" Güncel Arttırılmış Gerçeklik Çalışmaları İçin İnternet Sitesi tasarlanmıştır. "
                            link="http://ar.hacettepe.edu.tr/"
                            img="/projects/ar_web.png"
                            meta="Web Sitesi, AR"
                            techs={["Unity","MapboxAR","C#","Javascript"]}
                        />

                        <Projects 
                            title="Artırılmış Gerçeklikle Kampüs Uygulaması"
                            date="2020"
                            detail="Hacettepe Üniversitesi Beytepe Kampüsü için AR Kampüs Uygulaması geliştirilmiştir. Proje ayrıntısına http://ar.hacettepe.edu.tr adresinden ulaşabilirsiniz."
                            link="https://drive.google.com/drive/folders/1CuDeCQh2SBYSE0whY0MBZrfca7C8GICn"
                            img="/projects/campusar.png"
                            meta="ArCampus"
                            techs={["Unity","MapboxAR","C#"]}
                        />

                        <Projects 
                            title="En Kısa Yol Algoritması"
                            date="2018"
                            detail="Dijkstra algoritması kullanarak en kısa yolu bulan bir kod geliştirildi."
                            link="https://drive.google.com/drive/folders/1CuDeCQh2SBYSE0whY0MBZrfca7C8GICn"
                            img="/projects/dijsktra.png"
                            meta="Algoritma"
                            techs={["Python"]}
                        />
                    </div>
                </div>
                
                <style jsx>{`
                    .projects{
                        margin-top: 20px;
                        margin-right: 10px;
                        margin-left: 10px;
                    }
                `}</style>
            </div>
        )
    }
}

export default myprojects