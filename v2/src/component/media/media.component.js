import React from 'react';
import './media.css';

const Media = ({ mediaObject }) => (

    <div className={`media u-cf ${mediaObject.modifier}`}>

        <div className="media-figure">
            <img src={mediaObject.img} alt="" />
        </div>

        <div className="media-body">

            <p className="media-title">{mediaObject.title}</p>

            <p className="">{mediaObject.content}</p>

            <div className="media-footer"></div>
        </div>

    </div>
);

export default Media;
