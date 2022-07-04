import React from 'react';
import Banner from '../components/UI/Banner';
import updateBanner from '../assets/img/update.png';

const Updates = () => {
  return (
    <React.Fragment>
      <Banner 
        bannerTitle="Updates" 
        bannerDescription ="The DG3 Portal aims to help the production by providing copies
        of updates, procedures, news and other important EDGAR information. Templates and codes are also provided to help EDGAR staffs maintain and maximize consistency in every job."
        bannerImage={updateBanner}
        alt='Update Page Banner'

      />
    </React.Fragment>
  )
}

export default Updates
