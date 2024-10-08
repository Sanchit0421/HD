import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [energyData, setEnergyData] = useState([]);

    useEffect(() => {
        fetch('/api/energy')
            .then(response => response.json())
            .then(data => setEnergyData(data));
    }, []);

    return (
        <div>
            <h2>Energy Usage</h2>
            <ul>
                {energyData.map((item, index) => (
                    <li key={index}>
                        {item.device}: {item.usage} kWh
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;




>>>>>>> d97b2534291d017b516aeffa09f6c31137050a8b
