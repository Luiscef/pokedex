import React from 'react';

export const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#8FA3B6] p-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
                <img
                    src="/imagenes/axd.jpg"
                    alt="Imagen de Perfil"
                    className="w-25 h-33 rounded-[2vw] mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">Luis Enrique Franco Cartagena</h1>
                <p className="text-gray-700 mb-4">
                    Desarrollador Web
                    <br />
                    enriquefranco2003@gmail.com
                    <br />
                    +504 95064502
                </p>
                <a className="text-gray-700 mb-4" href="https://github.com/Luiscef" target='_blank'>Github</a>
                <p className="text-sm text-gray-500">Desarrollo de Portales Web II 2025</p>
            </div>
        </div>
    );
};
