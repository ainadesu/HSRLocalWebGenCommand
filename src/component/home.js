// App.js
import React, { useState } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import ItemPage from './ItemPage';
import ScenePage from './ScenePage';
import SkillIssuePeoplePage from './SkillIssuePeoplePage';
import RelicPage from './RelicPage';

function Item() {
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <div className="App">
        <header className="header">
          <div className="slidebar" style={{textAlign: 'center', padding: '0px', paddingTop: '10px'}}>

            <Link to="/skillissuepeople" onClick={() => handleItemClick('Skill Issue People')}>
                <div 
                    style={{
                        // color: 'rgb(24, 160, 88)', 
                        fontWeight: 'bold', 
                        fontSize: '37.5px'
                    }}>Skill Issue People</div>
            </Link>

            <Link to="/item" onClick={() => handleItemClick('Item')}>
                <div 
                    style={{
                        // color: 'rgb(24, 160, 88)', 
                        fontWeight: 'bold', 
                        fontSize: '37.5px'
                    }}>Item</div>
            </Link>

            <Link to="/scene" onClick={() => handleItemClick('Scene')}>
                <div 
                    style={{
                        // color: 'rgb(24, 160, 88)', 
                        fontWeight: 'bold', 
                        fontSize: '37.5px'
                    }}>Scene</div>
            </Link>

            <Link to="/relic" onClick={() => handleItemClick('Relic')}>
                <div 
                    style={{
                        // color: 'rgb(24, 160, 88)', 
                        fontWeight: 'bold', 
                        fontSize: '37.5px'
                    }}>Relic</div>
            </Link>

            
          </div>
        </header>
        <hr/>
        <div className="content">
          <Routes>
            <Route path="/item" element={<ItemPage />} />
            <Route path="/scene" element={<ScenePage />} />
            <Route path="/skillissuepeople" element={<SkillIssuePeoplePage/>}/>
            <Route path="/" element={<SkillIssuePeoplePage/>}/>
            <Route path="/relic" element={<RelicPage />} />
          </Routes>
        </div>
      </div>
    );
  }

export default Item;
