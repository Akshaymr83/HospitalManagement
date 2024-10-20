import React from 'react';
import img from "../Img/pill2.jpg";
import '../Frontpage.js/frontpage.css'

const TextBox = () => {
    return (
        <div className='text-box' style={{ background: 'white', padding: '1rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div className='div1' style={{ flex: '1 1 300px', margin: '0.5rem' }}>
                    <img alt='img' style={{ borderRadius: '1rem', objectFit: 'cover', width: '100%', height: 'auto' }} src={img} />
                </div>
                
                <div className='div2' style={{ flex: '1 1 300px', margin: '0.5rem', overflow: 'hidden' }}>
                    <h3 style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>50 years of caring for patients.</h3>
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>
                        A legacy of compassion, dedication, and excellence. Since our inception half a century ago, we've been committed to providing exceptional healthcare services tailored to the needs of our community. Over the years, we've embraced innovation, expanded our facilities, and attracted top-tier medical professionals, all with one goal in mind: your well-being. As we celebrate this milestone, we reaffirm our unwavering commitment to continue delivering personalized care, advanced treatments, and a healing environment that fosters hope and resilience. Thank you for entrusting us with your health for the past five decades, and here's to many more years of partnership in your health journey.
                    </p>
                </div>

                <div className='div3' style={{ flex: '1 1 300px', margin: '0.5rem', overflow: 'hidden' }}>
                    <h3 style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>ACHIEVEMENTS</h3>
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>
                        At MediCare, our relentless pursuit of excellence has garnered widespread recognition and numerous prestigious awards in the healthcare industry. With a steadfast commitment to patient care, innovation, and community service, we have consistently been honored as a leader in healthcare. Our hospital has been the recipient of multiple awards, including the Healthcare Excellence Award, Patient Safety Achievement Award, and Innovation in Healthcare Award, recognizing our dedication to clinical excellence, patient safety, and healthcare innovation. These accolades stand as a testament to the hard work and dedication of our talented team of healthcare professionals who continually strive for excellence in every aspect of their work. Additionally, MediCare has been recognized for its outstanding contributions to the community through initiatives such as [Community Outreach Program Name] and [Health Education Initiative Name]. As we reflect on these achievements, we remain committed to upholding the highest standards of care, driving innovation, and making a positive impact on the health and well-being of our patients and community.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TextBox;
