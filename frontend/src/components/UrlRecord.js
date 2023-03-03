import React, { useState } from 'react';


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Text copied to clipboard:", text);
        })
        .catch((error) => {
            console.error("Error copying text to clipboard:", error);
        });
}

const UrlRecord = ({ origin, subpart }) => {
    // compose new shortened url in format <domain>/<subpart>
    // TODO: replace href link for regular <domain> name
    const shortUrl = `http://be.beetly.com/${subpart}`;

    return (
        <>
            <div className="url-item">
                <span className="">{origin}</span>
                <a
                    href={`http://localhost:3000/${subpart}`}
                    target="_blank"
                    className="url-short">{shortUrl}</a>
                {/* single url record */}
                <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                        // copy shortened url to clipboard
                        copyToClipboard(shortUrl);
                    }}>Copy</button>
            </div>
        </>

    );
};

export default UrlRecord;