import { useState } from 'react';
import './App.css';
import MachineCard from './Components/MachineCard';
import MachineRegistration from './Components/MachineRegistration';
function App() {
  let [macineName, setMachineName] = useState("");
  let [machineId, setMachineId] = useState("");
  let [code, setCode] = useState("");
  let [additional, setAdditionalData] = useState("");
  const [image, setSelectedImage] = useState(null);
  const [allData, setData] = useState([])
  const handleSubmit = () => {
    let oldState = [...allData];

    const data = {
      machineName: macineName,
      machineId: machineId,
      code: code,
      additional: additional,
      image: image ? URL.createObjectURL(image) : ''

    };
    oldState.push(data);

    setData(oldState)







  }

  const deleteByIndex = (index) => {
    const oldState = [...allData];
    oldState.splice(index, 1);
    setData(oldState)

  }
  const deleteByMachineId = (id) => {
    const oldState = [...allData];
    let newState = oldState.filter(el => el.machineId !== id)
    setData(newState)
  }

  return (
    <div className="container">
      <div className='row'>
        <MachineRegistration macineName={macineName} setMachineName={setMachineName} machineId={machineId} setMachineId={setMachineId} code={code} setCode={setCode} additional={additional} setAdditionalData={setAdditionalData} handleSubmit={handleSubmit} image={image} setSelectedImage={setSelectedImage} />
      </div>
      <div className='row'>
        <MachineCard allData={allData} deleteByIndex={deleteByIndex} deleteByMachineId={deleteByMachineId} />
      </div>

    </div>
  );
}

export default App;
