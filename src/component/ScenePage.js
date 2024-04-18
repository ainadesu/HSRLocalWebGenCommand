import React, { useState, useRef } from 'react';
import Select from 'react-select';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SceneID from './ScenePageDB/SceneID.json';
import MonsterID from './ScenePageDB/MonsterID.json'
import MOCStage from './ScenePageDB/MOCStage.json'

function ScenePage() {
  const [selectedOption, setSelectedOption] = useState(SceneID[0]);
  const [selectedOption2, setSelectedOption2] = useState(SceneID[0]);
  const [selectedOption3, setSelectedOption3] = useState(SceneID[0]);
  const [level, setLevel] = useState(1);

  // Handler function for select change
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSelectChange2 = (selectedOption2) => {
    setSelectedOption2(selectedOption2);
  };

  const handleSelectChange3 = (selectedOption3) => {
    setSelectedOption3(selectedOption3);
  };

  const handleLevelChange = (value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } else if (newValue > 95) {
      newValue = 95;
    }
    setLevel(newValue);
  };

  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  const handleInputClick3 = () => {
    if (inputRef3.current) {
      inputRef3.current.select();
      document.execCommand('copy');
    }
  };

  const handleInputClick4 = () => {
    if (inputRef4.current) {
      inputRef4.current.select();
      document.execCommand('copy');
    }
  };

  const handleInputClick5 = () => {
    if (inputRef5.current) {
      inputRef5.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Scene</h2>
      <p style={{ textAlign: 'center' }}>Dùng để Dịch Chuyển</p>
      <h3 style={{ fontWeight: 'bold', color: 'rgb(24, 160, 88)' }}>Scene</h3>
      <p>Tên Cảnh:</p>
      <div style={{ width: '40%' }}>
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          options={SceneID.map(scene => ({ value: scene.id, label: scene.name }))}
          placeholder="Chọn một Scene"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontWeight: 'bold' }}>Lệnh</h3>
        <div>
        
      {selectedOption && (
        <input 
          type="text"
          value={`/scene ${selectedOption.value}`}
          readOnly
          ref={inputRef3}
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
          onClick={handleInputClick3}
        />
      )}
      </div>
      </div>
      
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Spawn - Monster</h2>
      <p style={{ textAlign: 'center' }}>Dùng để Triệu Hồi Kẻ Địch</p>
      <h3 style={{ fontWeight: 'bold', color: 'rgb(24, 160, 88)' }}>Spawn</h3>
      <span style={{color:'red', fontStyle: 'italic'}}>
        * Trước khi Spawn, đảm bảo rằng bạn đang không ở Khu Vực An Toàn. <br/>
        Nếu không chắc chắn, hãy sử dụng <span style={{fontWeight: 'bold'}}>/scene 20101</span> trước khi Spawn
      </span>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ width: '40%' }}>
          <p>Tên Quái:</p>
          <Select
            value={selectedOption2}
            onChange={handleSelectChange2}
            options={MonsterID.map(monster => ({ value: monster.id, label: monster.name }))}
            placeholder="Tên Quái "
          />
        </div>

        <div style={{ width: '40%', marginLeft: '30px' }}>
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
            
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontWeight: 'bold' }}>
          Lệnh
        </h3>
        
        <p style={{color: 'red', fontStyle:'italic'}}>
          * Câu lệnh sẽ triệu hồi "Trung Úy Vân Kỵ - Yanqing (Hoàn Chỉnh)"<br/>
          Sau khi vào chiến đấu, sẽ tự động được thay đổi thành Kẻ Địch bạn đã lựa chọn
        </p>
        <div>
      {selectedOption2 && (
        <input 
          type="text"
          value={`/spawn 2004021 ${selectedOption2.value} lv${level}`}
          readOnly
          ref={inputRef4}
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
          onClick={handleInputClick4}
        />
      )}
      </div>
      <p style={{color: 'purple', fontStyle:'italic'}}>[Từ Aina] Tôi lệch Yanqing, vậy nên, hãy đánh nó. Cảm ơn !</p>
      </div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Spawn - MOC</h2>
      <p style={{ textAlign: 'center' }}>Dùng để Triệu Hồi Kẻ Địch trong MOC</p>
      <h3 style={{ fontWeight: 'bold', color: 'rgb(24, 160, 88)' }}>Spawn</h3>
      <span style={{color:'red', fontStyle: 'italic'}}>
        * Trước khi Spawn, đảm bảo rằng bạn đang không ở Khu Vực An Toàn. <br/>
        Nếu không chắc chắn, hãy sử dụng <span style={{fontWeight: 'bold'}}>/scene 20101</span> trước khi Spawn <br/>
        Không bao gồm các <span style={{fontWeight: 'bold'}}>BUFF</span> tới từ Sảnh chính thức
      </span>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ width: '40%' }}>
          <p>MOC - Kỳ: </p>
          
            <Select
              value={selectedOption3}
              onChange={handleSelectChange3}
              options={MOCStage.map(moc => ({ value: moc.id, label: moc.name }))}
              placeholder="Chọn một MOC"
            />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontWeight: 'bold' }}>
              Lệnh
            </h3>
              <p style={{color: 'red', fontStyle:'italic'}}>* Câu lệnh sẽ triệu hồi "Trung Úy Vân Kỵ - Yanqing (Hoàn Chỉnh)"<br/>
              Sau khi vào chiến đấu, sẽ tự động được thay đổi thành Kẻ Địch bạn đã lựa chọn</p>
        
            <div>
              {selectedOption3 && (
                <input 
                  type="text"
                  value={`/spawn 2004021 ${selectedOption3.value} lv${selectedOption3.value < 30018120 ? 90 : 95}`}
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
          </div>

      <div style={{marginTop: '100px'}}></div>
    </div>
  );
}

export default ScenePage;
