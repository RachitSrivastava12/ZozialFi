import React from 'react';

const ImageContainer = () => {
    return (
        <div className="image-container">
            <picture>
                <source media="(max-width: 768px)" srcSet="/images/PAHLA.jpg" />
                <source media="(min-width: 769px)" srcSet="/images/trading1.jpg" />
                <img src="/images/trading1.jpg" alt="Professional trader analyzing charts, modern office setting" />
            </picture>
            <picture>
                <source media="(max-width: 768px)" srcSet="/images/DUSRA.jpg" />
                <source media="(min-width: 769px)" srcSet="/images/crypto.jpg" />
                <img src="/images/crypto.jpg" alt="Cryptocurrency coins with digital background, futuristic" />
            </picture>
            <picture>
                <source media="(max-width: 768px)" srcSet="/images/TISRA.jpg" />
                <source media="(min-width: 769px)" srcSet="/images/forex.jpg" />
                <img src="/images/forex.jpg" alt="Forex trading board with currency pairs, financial district" />
            </picture>
            <picture>
                <source media="(max-width: 768px)" srcSet="/images/CHAUTHA.jpg" />
                <source media="(min-width: 769px)" srcSet="/images/gold.jpg" />
                <img src="/images/gold.jpg" alt="Gold bars stacked, luxury investment concept" />
            </picture>
            <picture>
                <source media="(max-width: 768px)" srcSet="/images/PACHVA.jpg" />
                <source media="(min-width: 769px)" srcSet="/images/success.jpg" />
                <img src="/images/success.jpg" alt="Successful businessman celebrating, urban skyline view" />
            </picture>
        </div>
    );
};

export default ImageContainer;