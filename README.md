- CRUD App Backend con Node.js, Express y MongoDB
  Este proyecto es una API RESTful para gestionar productos, creada con Node.js, Express y MongoDB. Permite crear, leer, actualizar y eliminar productos, sirviendo como una base para aprender el stack MERN.

- Características
  · CRUD Completo: Operaciones para crear, leer, actualizar y eliminar productos.
  · API RESTful: Endpoints organizados y fáciles de consumir.
  · MongoDB: Almacenamiento NoSQL con Mongoose como ODM.
  · Estructura Escalable: Separación de responsabilidades con rutas, controladores y modelos.

- Tecnologías Usadas
  · Node.js y Express para el backend y el manejo de rutas.
  · MongoDB como base de datos.
  · Mongoose para modelado de datos.

- Instalación
  · Clona el repositorio:
  git clone https://github.com/Jorge-coder02/crud-app-backend.git
  cd crud-app-backend

· Instala las dependencias:
npm install

· Configura la conexión a MongoDB:
Asegúrate de tener MongoDB corriendo localmente o usa MongoDB Atlas.
Configura la cadena de conexión en el archivo de configuración o en una variable de entorno.

· Ejecuta el servidor:

npm start
El servidor correrá en http://localhost:3001.

- Endpoints de la API
  GET /api/products - Obtener todos los productos
  GET /api/products/:id - Obtener un producto por ID
  POST /api/products - Crear un nuevo producto
  PUT /api/products/:id - Actualizar un producto existente
  DELETE /api/products/:id - Eliminar un producto por ID

Las solicitudes de esta app han sido testeadas con:
· Postman
· REST Client de VSCode
· Insomnia

- Contribución
  ¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva característica').
Envía tus cambios (git push origin feature/nueva-caracteristica).
Abre un Pull Request.

<!-- Licencia
Este proyecto está bajo la licencia MIT. -->
