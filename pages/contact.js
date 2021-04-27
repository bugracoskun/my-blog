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

                <div className="mycontact">
                    <Email/>
                </div>
                
                <style jsx>{`
                    .mycontact{
                        position: fixed;
                        top: calc(50% - 200px);
                        left: calc(50% - 250px);
                        width: 100%;
                    }
                `}</style>


            </div>
        )
    }
}

export default contact;