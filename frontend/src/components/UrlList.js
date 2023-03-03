import React, { useState } from 'react';
import UrlRecord from './UrlRecord';

const UrlList = ({ urls }) => {
    return (
        <section>
            <div>
                {urls.map((url) => {
                    return <UrlRecord key={url._id} {...url}/>;
                })}
            </div>
        </section>
    );
};

export default UrlList;