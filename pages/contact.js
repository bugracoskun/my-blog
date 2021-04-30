import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/Homepage';
import Email from '../components/email';

class contact extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>İhsan Buğra Coşkun</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav activeItem="contact"/>

                <section id="home" className="main-contact parallax-section">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                    <h1>Benimle İletişim Kurun</h1>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="mycontact">
                    <Email/>
                </div>
                
                
                <style jsx>{``}</style>


            </div>
        )
    }
}

export default contact;