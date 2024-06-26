// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [glassesData, setGlassesData] = useState([
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        }
    ]);

    const [selectedGlasses, setSelectedGlasses] = useState(null);

    const handleSelectGlasses = (glasses) => {
        setSelectedGlasses(glasses);
    };

    return (
        <div className="app">
            <h1>TRY GLASSES APP ONLINE</h1>
            <div className="model-display">
                <div className="model-item">
                    <img src={selectedGlasses ? selectedGlasses.url : '../public/glassesImage/model.jpg'} alt="Model" />
                    {selectedGlasses && (
                        <div className="glasses-info">
                            <h2>{selectedGlasses.name}</h2>
                            <p>{selectedGlasses.desc}</p>
                        </div>
                    )}
                </div>
                <div className="model-item">
                    <img src="../public/glassesImage/model.jpg" alt="Model" />
                </div>
            </div>
            <div className="glasses-list">
                {glassesData.map((glasses) => (
                    <div key={glasses.id} className="glasses-item" onClick={() => handleSelectGlasses(glasses)}>
                        <img src={glasses.url} alt={glasses.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
