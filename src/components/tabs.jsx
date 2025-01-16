import { useState, useCallback, useEffect } from 'react';
import Card from './card';
import { IPropertie } from '../types/propertie';
import * as api from '../services/api';

const HomeCardComponent = () => {

  const [properties, setProperties] = useState([]);

  const getProperties = useCallback(async () => {
    try {
      const { data } = await api.getProperties();
      setProperties(data);
    } catch (error) {
      console.log(error);
    }
  }, [api]);

  useEffect(() => {
    getProperties();
  }, [getProperties])

  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5 ">
      {
        properties.map((item) => {
          return (
            <Card 
              title={item.title}
              price={item.price}
              pretension={item.pretension}
              description={item.description}
            />
          )
        })
      }
    </div>
  );
};

const ApartmentCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5  ">

    </div>
  );
};

const tabs = [
  { label: 'Casa', content: <HomeCardComponent /> },
  { label: 'Apartamento', content: <ApartmentCardComponent /> },
  { label: 'Comercial', content: <HomeCardComponent /> },
  { label: 'Rural', content: <ApartmentCardComponent /> },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="flex ">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'border-b-2 border-orange-500 text-orange-500 '
                : 'text-black hover:text-gray-700 dark:text-black dark:hover:text-black-500'
            } px-2 font-normal py-4 sm:px-6 sm:font-medium focus:outline-none ${
              idx === 3 && 'hidden sm:flex'
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
