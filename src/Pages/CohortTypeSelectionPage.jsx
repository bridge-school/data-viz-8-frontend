import React from "react";
import { useTranslation } from 'react-i18next'
import BasicLinkList from '../Components/BasicLinkList'

const CohortTypeSelectionPage = () => {
  const { t } = useTranslation()

  const options = [
    {
      name: t('frontend_dev'),
      disabled: false,
      route: "/fed"
    },
    {
      name: t('backend_dev'),
      disabled: true,
      route: "",
    },
    {
      name: t('design'),
      disabled: true,
      route: "",
    },
  ];

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <BasicLinkList title={t('bridge_school_programs')} data={options} />
        </div>
      </div>
    </>
  )
}

export default CohortTypeSelectionPage;
