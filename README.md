# 🅿️ Parqueadero TOXI-co

**Parqueadero TOXI-co** es un sistema de gestión de parqueaderos diseñado para ofrecer una solución integral y escalable tanto para usuarios ocasionales como para vehículos con membresía. Este software está pensado para facilitar el control de entradas, salidas, facturación, tarifas y administración de espacios en diferentes ubicaciones.

## 🚀 Funcionalidades principales

- Registro de vehículos con o sin membresía.
- Administración de membresías por vehículo (similar a SmartFit).
- Gestión de empleados y turnos de trabajo.
- Control de acceso y registro de ingresos.
- Facturación automática para usuarios casuales.
- Tarifas configurables por ciudad o país.
- API RESTful construida con TypeScript y Node.js.

## 🧱 Estructura del proyecto

El proyecto está organizado por módulos, cada uno encargado de una funcionalidad específica del sistema:

- `login/`: autenticación y validación de usuarios.
- `usuario/`: administración de usuarios y roles.
- `tipo-vehiculo/`: configuración de tipos de vehículos y tarifas.
- `config/`: configuración general del servidor y la base de datos.

## 🛠️ Tecnologías usadas

- **Backend:** Node.js + TypeScript
- **Base de datos:** PostgreSQL
- **Framework:** Express.js
- **Control de versiones:** Git + Git Flow

## 🔧 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SeumaRayo/Parqueadero_TOXI-co.git
