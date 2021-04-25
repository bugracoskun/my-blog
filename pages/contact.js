import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/Homepage';

class contact extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>İhsan Buğra Coşkun</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav activeItem="contact"/>
                
                <div>İletişim</div>
            </div>
        )
    }
}

export default contact;