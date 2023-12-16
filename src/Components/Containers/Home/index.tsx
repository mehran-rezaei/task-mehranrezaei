import React from 'react';
import Navbar from '@/Components/shared/Navbar';
import FooterContainer from '../../shared/footer'
import HeroSerctionContainer from './heroSection'
const index = () => {
    return (
        <main>
            <Navbar />
            <HeroSerctionContainer />
            <FooterContainer />
        </main>
    );
};

export default index;