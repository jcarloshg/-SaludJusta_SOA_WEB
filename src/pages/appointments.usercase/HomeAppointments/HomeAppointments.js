import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MenuLeft } from '../../../components/MenuLeft/MenuLeft'
import { Laboratorios } from '../../common/Laboratorios/Laboratorios'
import Appointments from '../Appointments/Appointments'
import { ItemsMenu } from './models/ItemsMenu'

export const HomeAppointments = () => {
    return (
        <div className="container_menu_dashboard">

            <MenuLeft arrayItems={ItemsMenu} />

            <div className="dashboard" >
                <Routes>
                    <Route path="/" element={<Appointments />} />
                    <Route path="*" element={<Appointments />} />
                    <Route path="/laboratorios" element={<Laboratorios />} />
                </Routes>
            </div>
        </div>
    )
}
