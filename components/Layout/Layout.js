import React from 'react'
import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import { Container } from './Layout.style'

export default function Layout({children}){
    return(
        <Container>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </Container>
    )
}