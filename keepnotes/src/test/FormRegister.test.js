import React from "react";
import '@testing-library/react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "../context/AuthContext";
import Register from "../components/Login";

import { FormRegister } from "../components/FormRegister";

afterEach(cleanup)


test('sobre el componente formulario de Registro', () => {
    const mockHandleRegister = jest.fn()
    render(<FormRegister handleRegister={mockHandleRegister}/>)
    const contentEmail = screen.getByPlaceholderText('ejemplo@correo.com');
    const contentPassword = screen.getByPlaceholderText("contraseña");
    const contentConfirmPassword = screen.getByPlaceholderText("repita contraseña");
    const buttonRegister = screen.getByText('Registrar Datos');
    expect(contentEmail).toBeInTheDocument()
    expect(contentPassword).toBeInTheDocument()
    expect(contentConfirmPassword).toBeInTheDocument()

    const emailValue='correo@nuevo.com'
    const passValue='123456'
    const confirmPassValue='123456'

    fireEvent.change (contentEmail,{target: {value:emailValue}})
    fireEvent.change (contentPassword,{target: {value:passValue}})
    fireEvent.change (contentConfirmPassword,{target: {value:confirmPassValue}})
    fireEvent.click(buttonRegister)

    expect(mockHandleRegister).toHaveBeenCalledWith(emailValue,passValue,confirmPassValue)
})
