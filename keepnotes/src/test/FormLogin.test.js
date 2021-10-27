import React from "react";
import '@testing-library/react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "../context/AuthContext";
import Login from "../components/Login";
import { FormLogin } from "../components/FormLogin";

afterEach(cleanup)


test('sobre el componente formulario Login', () => {
    const mockHandleLogin = jest.fn()
    render(<FormLogin handleLogin={mockHandleLogin}/>)
    const contentEmail = screen.getByPlaceholderText('ejemplo@correo.com');
    const contentPassword = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText('Iniciar Sesión');
    expect(contentEmail).toBeInTheDocument()
    expect(contentPassword).toBeInTheDocument()

    const emailValue='hola@hola.com'
    const passValue='123456'

    fireEvent.change (contentEmail,{target: {value:emailValue}})
    fireEvent.change (contentPassword,{target: {value:passValue}})
    fireEvent.click(buttonLogin)

    expect(mockHandleLogin).toHaveBeenCalledWith(emailValue,passValue)
})
