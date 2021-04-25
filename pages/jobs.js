import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/Homepage';


class jobs extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>İhsan Buğra Coşkun</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav activeItem="jobs"/>
                
                <div>İş Tecrübelerim</div>
            </div>
        )
    }
}

export default jobs;