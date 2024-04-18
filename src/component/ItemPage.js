import React, { useState, useRef } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import './ItemPage.css'
import Items from './ItemPageDB/items.json'
import characterOptions from './ItemPageDB/characterOptions.json'
import options from './ItemPageDB/options.json'


function ItemPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [characterOption, setCharacterOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [level, setLevel] = useState(1);
  const [tier, setTier] = useState(1);
  const [giveText, setGiveText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [customValue, setCustomValue] = useState('');
  const [characterLevel, setCharacterLevel] = useState(1);
  const [selectedCharacterId, setSelectedCharacterId] = useState('');
  const [showNumberInput, setShowNumberInput] = useState(false);
  const [showNumberInput3, setShowNumberInput3] = useState(false);
  const [numberInputValue, setNumberInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(Items[0]);
  const [Itemquantity, setItemQuantity] = useState(1);
  const [commandValue, setCommandValue] = useState(`/give ${Items[0].id} x1`);
  // const [showAtValueInput, setShowAtValueInput] = useState(false); // Trạng thái của checkbox
  // const [atValue, setAtValue] = useState("");
  // const [includeUID, setIncludeUID] = useState(false);
  // const [UIDValue, setUIDValue] = useState('');
  // const [commandValue2, setCommandValue2] = useState('');
  // const [characterEidolon, setCharacterEidolon] = useState(1);

  // const ItemOptions = Items.map(option => ({ value: option.name, label: option.name }));
  const [ItemOption, setItemOption] = useState(null);

  const handleItemQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
        setItemQuantity(1);
    } else {
        setItemQuantity(value);
    }
    updateCommandValue(ItemOption.value, value);
  };

  // const handleIncludeUIDChange = (e) => {
  //   setIncludeUID(e.target.checked);
  //   if (!e.target.checked) {
  //     setCommandValue(prevValue => prevValue.replace(/@\[\d+\]/g, ''));
  //   } else {
  //     setCommandValue(prevValue => prevValue + `@${UIDValue}`);
  //   }
  // };

  // const handleUIDInputChange = (e) => {
  //   setUIDValue(e.target.value);
  //   if (includeUID) {
  //     setCommandValue(prevValue => {
  //       // Lấy giá trị lệnh hiện tại, loại bỏ bất kỳ chuỗi UID nào khác và thêm chuỗi mới
  //       const newValue = prevValue.replace(/@\[\d+\]/g, '') + `@[${e.target.value}]`;
  //       return newValue;
  //     });
  //   }
  // };
  

  // const handleCommandInputChange = (e) => {
  //   setCommandValue(e.target.value);
  // };

//   const handleCheckboxChange3 = (e) => {
//     setShowAtValueInput(e.target.checked);
//     if (!e.target.checked) {
//         updateCommandValue(ItemOption.value, quantity, "");
//         setAtValue("");
//     } else {
//         updateCommandValue(ItemOption.value, quantity, atValue);
//     }
// };

// const handleAtValueChange = (e) => {
//   const value = parseInt(e.target.value);
//   if (!isNaN(value)) {
//       setAtValue(value);
//       updateCommandValue(ItemOption.value, quantity, value);
//   }
// };

// const updateCommandValue2 = (itemName, quantityValue, atValue) => {
//   const itemId = Items.find(item => item.name === itemName).id;
//   let updatedCommand = `/give ${itemId} x${quantityValue}`;
//   if (atValue !== "") {
//       updatedCommand += ` @${atValue}`;
//   }
//   setCommandValue(updatedCommand);
// };

  const handleItemChange = (selectedOption) => {
    setItemOption(selectedOption);
    updateCommandValue(selectedOption.value, quantity);
    setSelectedItem(Items.find(item => item.name === selectedOption.value));
};
const updateCommandValue = (itemName, quantityValue) => {
  const itemId = Items.find(item => item.name === itemName).id;
  setCommandValue(`/give ${itemId} x${quantityValue}`);
};

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const updateCommand = () => {
    let command = '';
  
    if (selectedCharacterId) {
      command = `/give ${selectedCharacterId} lv${characterLevel} r6 p10`;
  
      if (showNumberInput && numberInputValue !== '') {
        command += ` @${numberInputValue}`;
      }
    }
  
    return command;
  };


  

  // const handleCheckboxChange2 = () => {
  //   setShowNumberInput(!showNumberInput);
  // };

  // const handleNumberInputChange = (event) => {
  //   setNumberInputValue(event.target.value);
  // };

  const handleCharacterChange = (characterOption) => {
    setCharacterOption(characterOption);
    setCharacterLevel(1); 
    const characterId = characterOption ? findIdByName(characterOption.value, characterOptions) : '';
    setSelectedCharacterId(characterId); 
  };

  const findIdByName = (name, options) => {
    const option = options.find(option => option.name === name);
    return option ? option.id : '';
  };

  // const findIdByCharName = (name, options) => {
  //   const option = options.find(option => option.name === name);
  //   return option ? option.id : '';
  // };


  // Function to copy the giveText value to clipboard
  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };

  const handleInputClick2 = () => {
    if (inputRef2.current) {
      inputRef2.current.select();
      document.execCommand('copy');
    }
  };

  const handleInputClick3 = () => {
    if (inputRef3.current) {
      inputRef3.current.select();
      document.execCommand('copy');
    }
  };

  const handleCharacterLevelChange = (value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } else if (newValue > 80) {
      newValue = 80;
    }
    setCharacterLevel(newValue);
  };

  

  

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    updateGiveText(selectedOption, quantity, level, tier);
  };

  // const handleQuantityChange = (value) => {
  //   const newValue = parseInt(value);
  //   if (!isNaN(newValue) && newValue >= 1) {
  //     setQuantity(newValue);
  //     updateGiveText(selectedOption, newValue, level, tier);
  //   } else {
  //     setQuantity(1);
  //     updateGiveText(selectedOption, 1, level, tier);
  //   }
  // };

  const handleLevelChange = (value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } else if (newValue > 80) {
      newValue = 80;
    }
    setLevel(newValue);
    updateGiveText(selectedOption, quantity, newValue, tier);
  };

  // const handleTierChange = (value) => {
  //   let newValue = parseInt(value);
  //   newValue = Math.max(1, Math.min(newValue, 5));
  //   if (!isNaN(newValue)) {
  //     setTier(newValue);
  //     updateGiveText(selectedOption, quantity, level, newValue);
  //   } else {
  //     setTier(1);
  //     updateGiveText(selectedOption, quantity, level, 1);
  //   }
  // };

  // const handleCheckboxChange = (e) => {
  //   setShowInput(e.target.checked);
  //   updateGiveText(selectedOption, quantity, level, tier, e.target.checked ? customValue : '');
  // };
  
  // const handleCustomValueChange = (e) => {
  //   const newValue = e.target.value;
  //   setCustomValue(newValue);
  //   updateGiveText(selectedOption, quantity, level, tier, showInput ? newValue : '');
  // };
  
  const updateGiveText = (selectedOption, quantity, level, tier, customValue) => {
    const id = selectedOption ? findIdByName(selectedOption.value, options) : '';
    let text = `/give ${id} x${quantity} lv${level} r${tier}`;
    if (showInput && customValue !== '') {
      text += ` @${customValue}`;
    }
    setGiveText(text);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    updateGiveText(selectedOption, quantity + 1, level, tier);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateGiveText(selectedOption, quantity - 1, level, tier);
    }
  };

  const incrementTier = () => {
    setTier(Math.min(tier + 1, 5));
    updateGiveText(selectedOption, quantity, level, tier + 1);
  };

  const decrementTier = () => {
    setTier(Math.max(tier - 1, 1));
    updateGiveText(selectedOption, quantity, level, tier - 1);
  };

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Give</h2>
      <h3 style={{ fontWeight: 'bold', color: 'rgb(24, 160, 88)' }}>Nón Ánh Sáng</h3>
      
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%' }}>
          <p>Tên Nón Ánh Sáng: </p>
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            options={options.map(option => ({ value: option.name, label: option.name }))}
            placeholder="Tên Nón Ánh Sáng"
          />
        </div>

        <div style={{ marginLeft: '30px', width: '300px' }}>
          <p>Số Lượng:</p>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '300px',
              boxSizing: 'border-box',
              padding: '6px 12px'
            }}>
            <button onClick={decrementQuantity} 
              style={{ 
                fontSize: '16px', 
                border: 'none', 
                backgroundColor: 'transparent', 
                cursor: 'pointer' 
                }}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span 
              style={{ 
                margin: '0 10px', 
                fontSize: '16px' 
                }}>
                {quantity}</span>
            <button onClick={incrementQuantity} 
              style={{ 
                fontSize: '16px', 
                border: 'none', 
                backgroundColor: 'transparent', 
                cursor: 'pointer' 
                }}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <div style={{ marginLeft: '30px', width: '200px' }}>
          <p>Level:</p>
          <input
            type="number"
            value={level}
            onChange={(e) => handleLevelChange(e.target.value)}
            min={1}
            max={80}
            style={{
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '200px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginLeft: '30px', width: '300px' }}>
          <p>Tích Tầng:</p>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '30px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '300px',
              boxSizing: 'border-box',
              padding: '6px 12px'
            }}>
            <button onClick={decrementTier} 
              style={{ 
                fontSize: '16px', 
                border: 'none', 
                backgroundColor: 'transparent', 
                cursor: 'pointer' 
              }}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span style={{ margin: '0 10px', fontSize: '16px' }}>{tier}</span>
            <button onClick={incrementTier} style={{ fontSize: '16px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    <div style={{ marginTop: '20px' }}>
    <div>
    
    <p>
        <h2 style={{fontWeight: 'bold'}}>Lệnh</h2>
        
    </p>
    
    </div>
        <input type="text" value={giveText} readOnly ref={inputRef} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '25px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '40%',
            boxSizing: 'border-box',
            padding: '6px 12px',
            fontWeight: 'bold'
          }} onClick={handleInputClick} />
    </div><br/>
    <h3 style={{ fontWeight: 'bold', color: 'rgb(24, 160, 88)' }}>Nhân Vật</h3>
    <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ width: '40%' }}>
          <p>Tên Nhân Vật: </p>
          <Select
            value={characterOption}
            onChange={handleCharacterChange}
            options={characterOptions.map(option => ({ value: option.name, label: option.name }))}
            placeholder="Tên Nhân Vật"
          />
        </div>
    <div style={{ marginLeft: '30px', width: '200px' }}>
      <p>Level Nhân Vật:</p>
      <input
        type="number"
        value={characterLevel}
        onChange={(e) => handleCharacterLevelChange(e.target.value)}
        min={1}
        max={90}
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '200px',
          boxSizing: 'border-box'
        }}
      />
    </div>
    
    </div>
    <div style={{ marginTop: '20px' }}></div>
    <p>
    <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontWeight: 'bold' }}>Lệnh</h3>
        <div>
        
        
      </div>
        <input 
          type="text"
          value={updateCommand()}
          readOnly ref={inputRef2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '25px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '40%',
            boxSizing: 'border-box',
            padding: '6px 12px',
            fontWeight: 'bold',
            marginTop: '15px'
          }} onClick={handleInputClick2}
        />
      </div><br/>
      <h3 style={{fontWeight: 'bold', color: 'rgb(24, 160, 88)'}}>Khác</h3>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ width: '40%' }}>
          <p>Tên Vật Phẩm:</p>
          <div>
              <Select
                  id="item"
                  value={ItemOption}
                  onChange={handleItemChange}
                  options={Items.map(option => ({ value: option.name, label: option.name }))}
                  placeholder="Tên Vật Phẩm"
                  
              />
          </div>
          
        </div>
        <div style={{ marginLeft: '30px', width: '200px' }}>
                <label htmlFor="quantity">Số lượng:</label>
                <input
                    type="number"
                    id="quantity"
                    value={Itemquantity}
                    onChange={handleItemQuantityChange}
                    min={1}
                    max={90}
                    style={{
                      padding: '8px',
                      fontSize: '16px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      width: '200px',
                      boxSizing: 'border-box',
                      marginTop: '16px'
                    }}
                />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontWeight: 'bold' }}>Lệnh</h3>
        <div>
        
        
        
      </div>
        <input 
          type="text"
          value={commandValue}
          readOnly ref={inputRef3}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '25px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '40%',
            boxSizing: 'border-box',
            padding: '6px 12px',
            fontWeight: 'bold',
            marginTop: '15px'
          }} onClick={handleInputClick3}
        />
      </div><br/>

    </p>

    <div style={{marginBottom: '100px'}}/>
    </div>
  );
}

export default ItemPage;
