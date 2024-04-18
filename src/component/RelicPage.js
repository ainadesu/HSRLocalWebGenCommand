import React, { useState, useRef } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import options from './RelicPageDB/relic.json'
import subAffix from './RelicPageDB/subAffix.json'

function RelicPage() {

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(subAffix[0]);
  const [selectedOption3, setSelectedOption3] = useState(subAffix[0]);
  const [selectedOption4, setSelectedOption4] = useState(subAffix[0]);
  const [selectedOption5, setSelectedOption5] = useState(subAffix[0]);
  const [subOptions, setSubOptions] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState(null); // State mới để lưu trữ sub option đã chọn
  const [level2, setLevel2] = useState(1);
  const [level3, setLevel3] = useState(1);
  const [level4, setLevel4] = useState(1);
  const [level5, setLevel5] = useState(1);

  const inputRef5 = useRef(null);
  const handleInputClick5 = () => {
    if (inputRef5.current) {
      inputRef5.current.select();
      document.execCommand('copy');
    }
  };

  const handleLevelChange2 = (value2) => {
    let newValue2 = parseInt(value2);
    if (isNaN(newValue2) || newValue2 < 1) {
      newValue2 = 1;
    } 
    setLevel2(newValue2);
  };

  const handleLevelChange3 = (value3) => {
    let newValue3 = parseInt(value3);
    if (isNaN(newValue3) || newValue3 < 1) {
      newValue3 = 1;
    } 
    setLevel3(newValue3);
  };

  const handleLevelChange4 = (value4) => {
    let newValue4 = parseInt(value4);
    if (isNaN(newValue4) || newValue4 < 1) {
      newValue4 = 1;
    } 
    setLevel4(newValue4);
  };

  const handleLevelChange5 = (value5) => {
    let newValue5 = parseInt(value5);
    if (isNaN(newValue5) || newValue5 < 1) {
      newValue5 = 1;
    } 
    setLevel5(newValue5);
  };
  
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    updateSubOptions(selectedOption);
    setSelectedSubOption(null); // Reset selected sub option khi chọn một option mới
  };

  const handleSelectChange2 = (selectedOption2) => {
    setSelectedOption2(selectedOption2);
  };

  const handleSelectChange3 = (selectedOption3) => {
    setSelectedOption3(selectedOption3);
  };

  const handleSelectChange4 = (selectedOption4) => {
    setSelectedOption4(selectedOption4);
  };

  const handleSelectChange5 = (selectedOption5) => {
    setSelectedOption5(selectedOption5);
  };

  const handleSubOptionChange = (selectedSubOption) => {
    setSelectedSubOption(selectedSubOption);
  };

  const updateSubOptions = (selectedOption) => {
    const type = selectedOption && selectedOption.type;
    switch (type) {
      case "Nón":
        setSubOptions([{ label: "HP", value: "1" }]);
        break;
      case "Tay":
        setSubOptions([{ label: "Tấn Công", value: "1" }]);
        break;
      case "Áo":
        setSubOptions([
          { label: "HP %", value: "1" },
          { label: "Tấn Công %", value: "2" },
          { label: "Phòng Ngự %", value: "3" },
          { label: "Tỷ Lệ Bạo Kích", value: "4" },
          { label: "ST Bạo Kích", value: "5" },
          { label: "Tăng Lượng Trị Liệu", value: "6" },
          { label: "Chính Xác Hiệu Ứng", value: "7" }
        ]);
        break;
      case "Giày":
        setSubOptions([
          { label: "HP %", value: "1" },
          { label: "Tấn Công %", value: "2" },
          { label: "Phòng Ngự %", value: "3" },
          { label: "Tốc Độ", value: "4" }
        ]);
        break;
      case "Cầu":
          setSubOptions([
          { label: "HP %", value: "1" },
          { label: "Tấn Công %", value: "2" },
          { label: "Phòng Ngự %", value: "3" },
          { label: "Tăng ST Vật Lý", value: "4" },
          { label: "Tăng ST Hỏa", value: "5" },
          { label: "Tăng ST Băng", value: "6" },
          { label: "Tăng ST Lôi", value: "7" },
          { label: "Tăng ST Phong", value: "8" },
          { label: "Tăng ST Lượng Tử", value: "9" },
          { label: "Tăng ST Số Ảo", value: "10" }
        ]);
        break;
      case "Dây":
          setSubOptions([
          { label: "Tấn Công Kích Phá", value: "1" },
          { label: "Hiệu Suất Hồi Năng Lượng", value: "2" },
          { label: "HP %", value: "3" },
          { label: "Tấn Công %", value: "4" },
          { label: "Phòng Ngự %", value: "5" }
      ]);
        break;
      default:
        setSubOptions([]);
    }
  };

  const groupedOptions = options.reduce((acc, option) => {
    const group = option.group;
    acc[group] = acc[group] || [];
    acc[group].push(option);
    return acc;
  }, {});

  const groupedOptionsArray = Object.entries(groupedOptions).map(([group, options]) => ({
    label: group,
    options: options,
  }));

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Give</h2>
      <h3 style={{ fontWeight: 'bold', color: 'rgb(24, 160, 88)' }}>Di Vật</h3>
      <div style={{ width: '40%' }}>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={groupedOptionsArray}
          placeholder="Chọn một"
          isClearable={true}
        />
      </div>


        <div style={{ width: '20%' }}>
          <p style={{fontWeight: 'bold'}}>Thuộc tính Chính:</p>
          <Select
            options={subOptions}
            placeholder="Chọn một"
            isClearable={true}
            onChange={handleSubOptionChange}
          />
          <br/>
        </div>

        <div style={{ width: '40%', display:'flex' }}>
          <div style={{ width: '50%' }}>
              <p style={{fontWeight: 'bold'}}>Thuộc tính Phụ:</p>
              
              <Select
                  value={selectedOption2}
                  onChange={handleSelectChange2}
                  options={subAffix.map(affix => ({ value: affix.id, label: affix.name }))}
                  placeholder="Thuộc tính Phụ 1"
              />
              <Select
                value={selectedOption3}
                onChange={handleSelectChange3}
                options={subAffix.map(affix => ({ value: affix.id, label: affix.name }))}
                placeholder="Thuộc tính Phụ 2"
              />
              <Select
                value={selectedOption4}
                onChange={handleSelectChange4}
                options={subAffix.map(affix => ({ value: affix.id, label: affix.name }))}
                placeholder="Thuộc tính Phụ 3"
              />
              <Select
                value={selectedOption5}
                onChange={handleSelectChange5}
                options={subAffix.map(affix => ({ value: affix.id, label: affix.name }))}
                placeholder="Thuộc tính Phụ 4"
              />
            </div>
            <div style={{ width: '50%', marginLeft: '20px' }}>
              <p style={{fontWeight: 'bold'}}>Bước Nhảy:</p>
              <input
                type="number"
                value={level2}
                onChange={(e) => handleLevelChange2(e.target.value)}
                style={{
                  padding: '6px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '200px',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="number"
                value={level3}
                onChange={(e) => handleLevelChange3(e.target.value)}
                style={{
                  padding: '6px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '200px',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="number"
                value={level4}
                onChange={(e) => handleLevelChange4(e.target.value)}
                style={{
                  padding: '6px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '200px',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="number"
                value={level5}
                onChange={(e) => handleLevelChange5(e.target.value)}
                style={{
                  padding: '6px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '200px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
          <br/>
          <h3 style={{ fontWeight: 'bold' }}>
              Lệnh
          </h3>
          {selectedSubOption && selectedOption && (
            <input 
            type="text"
            value={`/give ${selectedOption.value} lv15 s${selectedSubOption.value} ${selectedOption2.value}:${level2} ${selectedOption3.value}:${level3} ${selectedOption4.value}:${level4} ${selectedOption5.value}:${level5} -maxsteps`}
            readOnly
            ref={inputRef5}
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
            }}
            onClick={handleInputClick5}
          />
        )}
    </div>
  );
}

export default RelicPage;
