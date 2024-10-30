import React from 'react';
import { Outlet } from '@tanstack/react-router';

const MasterLayout: React.FC = () => {
    return (

            <main>
                <Outlet />
            </main>

    );
};

export default MasterLayout;