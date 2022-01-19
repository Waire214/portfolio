import React from 'react'

const SectionComponent = ({ profileLogo, icon, text, background, center, top, bottom, twitter, instagram, github }) => {
    return (
        <section>
           <img src={profileLogo} alt="" /> 
        </section>
    )
}

export default SectionComponent
