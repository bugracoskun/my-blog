import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/Homepage';

class myprojects extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>İhsan Buğra Coşkun</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav activeItem="projects"/>
                
                <div>Projem1</div>
            </div>
        )
    }
}

export default myprojects