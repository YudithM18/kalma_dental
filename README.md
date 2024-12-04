***README - Kalma Dental***
***¡Bienvenido a Kalma Dental! 😁***

Este es un proyecto para la página web de Kalma Dental, una clínica dedicada a ofrecer los mejores servicios dentales y educación 
sobre salud bucal. Utilizamos React para el frontend y Django para el backend, lo que nos permite ofrecer una experiencia de usuario
fluida y profesional. En este README te explicamos cómo está organizado el proyecto, las tecnologías que usamos, cómo instalarlo y 
cómo puedes contribuir.

***Descripción del Proyecto***
Kalma Dental no solo se dedica a brindar servicios dentales de calidad, sino también a educar a sus pacientes sobre cómo cuidar su salud
bucal. La página web está diseñada para ofrecer una experiencia completa, que incluye información sobre los servicios, el equipo de trabajo,
videos informativos sobre los procedimientos, y consejos prácticos para mantener una buena higiene dental.

***En la web encontrarás:***

***Servicios***: 
Información detallada sobre los tratamientos que ofrecemos.
Consejos de salud bucal: Artículos y videos educativos.
Equipo de trabajo: Conoce a nuestros especialistas y su experiencia.
Testimonios: Opiniones de nuestros pacientes sobre la calidad de la atención que reciben.
Blog: Artículos sobre temas relacionados con la salud bucal, incluyendo guías y videos explicativos.
***Estructura de la Web***
La página está organizada en secciones claras para facilitar la navegación. Aquí te dejamos un resumen de las principales secciones:

***Home:***
Página principal que presenta la clínica,los testimonios,  los miembros del equipo y accesos directos a otras páginas.

***Services:***
Lista completa de los tratamientos y servicios que ofrecemos, como ortodoncia, blanqueamiento dental, entre otros.

***Contact:*** 
Información para contactar a la clínica y un formulario para solicitar citas o hacer preguntas.

***Equipo de Trabajo:***
Presentación de nuestros especialistas y su trayectoria.

***Sobre Nosotros:*** 
Historia de Kalma Dental, su misión y valores.

***Blog:*** 
Espacio para artículos educativos sobre salud bucal y videos explicativos.

***Términos y Condiciones:***
Información legal sobre el uso de la web y los servicios.

***Política de Privacidad:***
Detalles sobre cómo gestionamos los datos personales de los usuarios.


***Páginas Protegidas (Área de Administración)***


En la plataforma, también contamos con un área de administración protegida, donde solo los usuarios autenticados con permisos de administrador pueden
acceder a ciertas secciones. Estas páginas están diseñadas para facilitar la gestión del contenido en la web. Aquí tienes una descripción de cada una:

***Administración General:***
Página donde el administrador puede gestionar el equipo de trabajo. Aquí se encuentra un formulario para agregar nuevos miembros al equipo,
con su información personal y profesional (especialidad, formación, etc.).

***Servicios Admin:***
Formulario para añadir nuevos servicios a la clínica, como ortodoncia, endodoncia, etc. El formulario permite cargar una imagen del servicio, especificar
el especialista encargado y los tratamientos asociados a cada servicio.

***Equipo de Trabajo Admin:***
Página donde el administrador puede agregar, editar o eliminar miembros del equipo de trabajo, con detalles de sus especialidades y trayectoria.

***Testimonios Admin:***
Formulario donde los administradores pueden añadir los testimonios de los pacientes. Los pacientes pueden dejar sus comentarios sobre la experiencia
en la clínica, lo que ayuda a construir la confianza de los futuros pacientes.

***Editor de Blog:***
Un espacio donde el administrador puede crear, editar y publicar artículos en el blog de la web. El formulario permite agregar consejos sobre cuidado
bucal, procedimientos y videos educativos para que los pacientes aprendan a mantener su salud dental.

***Funciones Adicionales: SweetAlert para Mensajes de Éxito y Error***

En la web utilizamos SweetAlert para mejorar la interacción con el usuario. Esta librería se usa para mostrar alertas visuales que informan al usuario 
sobre el estado de sus acciones, como la validación de formularios o la confirmación de éxito o error en ciertas acciones.

***Mensajes de éxito:***
Se muestran alertas verdes con un mensaje de éxito cuando un formulario se ha enviado correctamente, como por ejemplo al registrar un nuevo miembro del
equipo o añadir un servicio.

***Mensajes de error:***
Cuando ocurre algún problema (por ejemplo, un formulario no se llena correctamente), se muestra una alerta roja que informa al usuario sobre el error y
lo que debe corregir.

Esto asegura que los usuarios tengan una experiencia clara y agradable al interactuar con la web.

***Tecnologías Usadas***


***Frontend***

***React:***
Utilizado para crear una interfaz de usuario dinámica y eficiente. React permite manejar el estado de la aplicación de manera sencilla y reactiva.

***CSS:***
Para diseñar la página de forma modular y organizada. Usamos SCSS para tener un mejor control sobre los estilos y facilitar la reutilización.

***Fetch API:*** 
Utilizamos Fetch para hacer peticiones HTTP desde el frontend hacia el backend. Esta API nativa de JavaScript nos permite enviar datos y
recibir respuestas de manera sencilla.

***SweetAlert:*** 
Librería para mostrar mensajes de éxito, error y confirmación de manera atractiva y fácil de entender. Esto mejora la experiencia del usuario
al proporcionar información visual clara.

***React Hooks:***
Usamos los hooks de React (como useState, useEffect) para manejar el estado y los efectos secundarios de los componentes, mejorando la organización y
eficiencia del código.


***Backend***

***Django:***
Framework de Python que usamos para el desarrollo del backend. Django nos proporciona una estructura robusta y segura para manejar todo lo relacionado
con el servidor y la base de datos.

***Django REST Framework (DRF):***
Utilizamos DRF para crear APIs RESTful que permiten la comunicación entre el frontend y el backend.

***SQLite / PostgreSQL:***
Utilizamos SQLite para el desarrollo local y PostgreSQL en producción para manejar la base de datos de la aplicación.

***JWT (JSON Web Tokens):***
Usamos JWT para la autenticación y autorización de los usuarios, asegurando que solo los usuarios autenticados puedan acceder a las áreas protegidas.

***Otras Herramientas***

***GitHub:***
Para el control de versiones y la colaboración en el proyecto.


***Características***


***Diseño responsivo:***
La web se adapta a dispositivos móviles, tabletas y escritorios.

***Interactividad con React:***
Uso de formularios dinámicos y validación en tiempo real.

***Contenido educativo:***
Artículos y videos para educar a los pacientes sobre el cuidado bucal.

***Autenticación segura:***
Sistema de inicio de sesión con JWT para garantizar que solo los usuarios autorizados puedan acceder a las áreas protegidas.

***SweetAlert:***
Mensajes interactivos que indican el éxito o error de las acciones realizadas por los usuarios.

***Gestión de contenido:***
Formulario de administración para gestionar el equipo de trabajo, los servicios, testimonios y el blog.
