import React, { useState, useRef } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';

function SkillIssuePeoplePage() {
  const [selectedButton, setSelectedButton] = useState('');
  const [customText, setCustomText] = useState('');
  const [customValue, setCustomValue] = useState('');
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };
  
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonNameMapping[buttonName] || buttonName);
    setShowInput(false); // Ẩn ô input number khi chọn nút mới
  };

  const handleCheckboxChange = (event) => {
    setShowInput(event.target.checked);
  };

  const handleCustomInputChange = (event) => {
    setCustomValue(event.target.value);
    setSelectedButton(selectedButton.split('@')[0] +' '+ '@' + event.target.value); // Thêm giá trị vào cuối của giá trị đã chọn
  };

  const buttonNameMapping = {
    'Nhận Toàn Bộ Nguyên Liệu': '/giveall materials',
    'Nâng Cấp Khai Phá Lên 70' : '/setlevel 70',
    'Nâng Cấp Thế Giới Lên 6' : '/worldlevel 6',
    'Nhận Toàn Bộ Nhân Vật với Lv.80, Tinh Hồn 6 và Nâng Cấp Tối Đa Toàn Bộ Thiên Phú': '/giveall avatars lv80 r6 p10 s10',
    'Nhận Toàn Bộ Nón Ánh Sáng với Lv.80, Tích Tầng Bậc 5': '/giveall lighcones lv80 r5',
    'Nhận 1.000.000 Ngọc Ánh Sao': '/give 1 x1000000',
    'Nhận 1.000.000 Mộng Ước Viễn Cổ':'/give 3 x1000000',
    'Nhận 1.000.000 Vé Tinh Cầu': '/give 101 x1000000',
    'Nhận 1.000.000 Vé Tinh Cầu Đặc Biệt': '/give 102 x1000000',
    'Nhận 1.000.000 Điểm Tín Dụng': '/give 2 x1000000',
    'Nhận Toàn Bộ Khung Chat và Ảnh Nền Điện Thoại': '/giveall usables',
    'Tất Cả Nhân Vật Hiện Có Lên Lv.80, Tinh Hồn 6, Max Thiên Phú': '/avatar all lv80 r6 p10',
    '4 Nhân Vật Ra Sân Lên Lv.80, Tinh Hồn 6, Max Thiên Phú': '/avatar lineup lv80 r6 p10',
    'Nhân Vật Ra Sân Lên Lv.80, Tinh Hồn 6, Max Thiên Phú': '/avatar cur lv80 r6 p10',
    'Xóa Toàn Bộ Di Vật +15 Chưa Được Trang Bị': '/clear relics lv15',
    'Hồi 100% Năng Lượng Cho 4 Nhân Vật Ra Sân': '/energy',
    'Tôi Muốn Gặp Bản Thân Ở Giới Tính Khác !': '/gender female',
    'HEAL !!! I NEED HEALL !!!': '/heal',
    'Acheron Của Tôi Cần Thêm Bí Kĩ': '/refill'
  };

//   const handleButtonClick = (buttonName) => {
//     setSelectedButton(buttonNameMapping[buttonName] || buttonName);
//   };

//   const handleCustomInputChange = (event) => {
//     setSelectedButton('');
//     setCustomText(event.target.value);
//   };

  return (
    <div>
      <h2 style={{fontWeight:'bold'}}>Skill Issue People</h2>
      <p>Bạn là người mới sử dụng Máy Chủ Private lần đầu? Hoặc bạn bị Skill Issue? Đây là một số lệnh cơ bản để bạn có thể dùng để setup khởi đầu của mình trong máy chủ này.</p>

      <div className="button-container">
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nâng Cấp Khai Phá Lên 70')}>Nâng Cấp Khai Phá Lên 70</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nâng Cấp Thế Giới Lên 6')}>Nâng Cấp Thế Giới Lên 6</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận Toàn Bộ Nhân Vật với Lv.80, Tinh Hồn 6 và Nâng Cấp Tối Đa Toàn Bộ Thiên Phú')}>Nhận Toàn Bộ Nhân Vật với Lv.80, Tinh Hồn 6 và Nâng Cấp Tối Đa Toàn Bộ Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận Toàn Bộ Nón Ánh Sáng với Lv.80, Tích Tầng Bậc 5')}>Nhận Toàn Bộ Nón Ánh Sáng với Lv.80, Tích Tầng Bậc 5</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận 1.000.000 Ngọc Ánh Sao')}>Nhận 1.000.000 Ngọc Ánh Sao</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận 1.000.000 Mộng Ước Viễn Cổ')}>Nhận 1.000.000 Mộng Ước Viễn Cổ</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận 1.000.000 Vé Tinh Cầu')}>Nhận 1.000.000 Vé Tinh Cầu</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận 1.000.000 Vé Tinh Cầu Đặc Biệt')}>Nhận 1.000.000 Vé Tinh Cầu Đặc Biệt</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận 1.000.000 Điểm Tín Dụng')}>Nhận 1.000.000 Điểm Tín Dụng</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận Toàn Bộ Nguyên Liệu')}>Nhận Toàn Bộ Nguyên Liệu</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhận Toàn Bộ Khung Chat và Ảnh Nền Điện Thoại')}>Nhận Toàn Bộ Khung Chat và Ảnh Nền Điện Thoại</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Tất Cả Nhân Vật Hiện Có Lên Lv.80, Tinh Hồn 6, Max Thiên Phú')}>Tất Cả Nhân Vật Hiện Có Lên Lv.80, Max Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('4 Nhân Vật Ra Sân Lên Lv.80, Tinh Hồn 6, Max Thiên Phú')}>4 Nhân Vật Ra Sân Lên Lv.80, Max Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Nhân Vật Ra Sân Lên Lv.80, Tinh Hồn 6, Max Thiên Phú')}>Nhân Vật Ra Sân Lên Lv.80, Max Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Xóa Toàn Bộ Di Vật +15 Chưa Được Trang Bị')}>Xóa Toàn Bộ Di Vật +15 Chưa Được Trang Bị</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Hồi 100% Năng Lượng Cho 4 Nhân Vật Ra Sân')}>Hồi 100% Năng Lượng Cho 4 Nhân Vật Ra Sân</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Tôi Muốn Gặp Bản Thân Ở Giới Tính Khác !')}>Tôi Muốn Gặp Bản Thân Ở Giới Tính Khác !</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('HEAL !!! I NEED HEALL !!!')}>HEAL !!! I NEED HEALL !!!</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('Acheron Của Tôi Cần Thêm Bí Kĩ')}>Acheron Của Tôi Cần Thêm Bí Kĩ</button>
      </div>
        <br/>
        <div className="selected-button">
        <p>
          <h2 style={{fontWeight: 'bold'}}>Lệnh</h2>
          
        </p>
        
        <input type="text" value={selectedButton} readOnly ref={inputRef} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '300px',
            boxSizing: 'border-box',
            padding: '6px 12px'
          }} onClick={handleInputClick} />
      </div>
    </div>
  );
}

export default SkillIssuePeoplePage;
