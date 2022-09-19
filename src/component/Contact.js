import React from 'react'
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (

    <section id="contact" class="contact-02 py-6 bg-grey">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
            <SectionTitle baslik="contact" aciklama="Get in touch"/>
        </div>
      </div>

      <div class="row contact-info mt-4">
        <div class="col-md-4">
            <ContactItem 
            resim="assets/img/message.svg"
            baslik="Mail Me"
            aciklama="info@gmail.com"/>
         
        </div>
        <div class="col-md-4">
            <ContactItem 
            resim="assets/img/phone-call.svg"
            baslik="Call Us On"
            aciklama="+123 456 7890"/>
        </div>

        <div class="col-md-4">
            <ContactItem 
            resim="assets/img/location.svg"
            baslik="Visit office"
            aciklama="24 Street, New York, United State."/>
        </div>


        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mt-5">
            <ContactForm/>
        </div>
      </div>
    
  </section>
    );
};

export default Contact;