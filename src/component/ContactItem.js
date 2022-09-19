import React from 'react'

const ContactItem = (props) => {
  return (
    <div class="info-box">
        <div class="item-icon">
                <img src={props.resim} alt="/"/>
        </div>
            <div class="info-text">
                <h5 class=" mb-0">{props.baslik}</h5>
                <small>{props.aciklama}</small>
            </div>
    </div>
    );
};

export default ContactItem;