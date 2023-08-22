import React, { useState } from 'react';
import DistrictList from './DistrictList';
import {stateDistricts} from './dummyData';
import StatedropDown from '../../components/layouts/StatedropDown';

const App = () => {
  const [ setSelectedState] = useState('');
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedDistricts(stateDistricts[state] || []);
  };

  return (
    <div>
      <h1>State and District Mapping</h1>
      <StatedropDown states={Object.keys(stateDistricts)} onSelectState={handleStateSelect} />
      
      <DistrictList districts={selectedDistricts} />
    </div>
  );
};

export default App;
