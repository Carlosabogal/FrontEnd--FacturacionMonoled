# FacturationMonoLegalFrontEnd

Este proyecto fue creado con  [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.
Proyecto Monolegal - Gestión de Facturas
Este es un proyecto de ejemplo en .NETque utiliza MongoDB para gestionar facturas en una base de datos llamada "monolegal" con una colección llamada "factura" y se conecta con el front en angular a travez de cors.

# Requisitos Previos

Asegúrate de tener los siguientes requisitos previos instalados en tu sistema antes de comenzar:

- [Node.js](https://nodejs.org/) (versión X.X.X o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js) o [yarn](https://yarnpkg.com/)

## Inicialización del Proyecto

Sigue estos pasos para inicializar el proyecto:

1. Clona este repositorio en tu máquina local:
   ```
git clone https://github.com/Carlosabogal/FrontEnd--FacturacionMonolegal
  
git clone https://github.com/Carlosabogal/Backend-Factura--MonoLegal ´´´

2. Navega hasta el directorio del proyecto:

Instala las dependencias del proyecto utilizando npm o yarn:

npm install
# O
yarn install

Inicia la aplicación en modo de desarrollo:

npm start
# O
yarn start

Esto abrirá la aplicación en tu navegador predeterminado. Puedes ver los cambios en tiempo real mientras trabajas en el proyecto.

3. Instalación de Material-UI y SweetAlert
Este proyecto utiliza Material-UI para el diseño de la interfaz de usuario y SweetAlert para mostrar notificaciones y alertas interactivas.

Para instalar Material-UI y SweetAlert, ejecuta los siguientes comandos:

# Instala Material-UI
npm install @mui/material @mui/icons-material

# Instala SweetAlert2
npm install sweetalert2

Una vez que hayas instalado estas bibliotecas, puedes importar y utilizar sus componentes y funciones en tu proyecto.
Esto abrirá la aplicación en tu navegador predeterminado. Puedes ver los cambios en tiempo real mientras trabajas en el proyecto.

## Barra de Navegación
La barra de navegación de la aplicación incluye las siguientes opciones:

- Crear Factura: Permite crear una nueva factura.
- Listar Facturas: Muestra la información de las facturas existentes y permite marcar si están pagadas o no. También ofrece opciones para actualizar y enviar notificaciones.
