import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t}=useTranslation(['sidebar']);
    return (
        <div className='min-h-screen p-4'>
            <div dangerouslySetInnerHTML={{ __html: t("about") }} />
        </div>
    );
}

export default About;
