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

***WorkTeam Admin:***
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


***Otras Herramientas***

***GitHub:***
Para el control de versiones y la colaboración en el proyecto.

***Diseño responsivo:***
La web se adapta a dispositivos móviles, tabletas y escritorios.

***Autenticación segura:***
Sistema de inicio de sesión con JWT para garantizar que solo los usuarios autorizados puedan acceder a las áreas protegidas.

***SweetAlert:***
Mensajes interactivos que indican el éxito o error de las acciones realizadas por los usuarios.

***Gestión de contenido:***
Formulario de administración para gestionar el equipo de trabajo, los servicios, testimonios y el blog.

**FROND-END**

1. React y ReactDOM

Estas son las dependencias principales para cualquier proyecto React.

react: La biblioteca principal para construir interfaces de usuario basadas en componentes.
react-dom: Esta biblioteca permite que los componentes de React se rendericen en el DOM del navegador.

*npm install react react-dom*


2. React Router (Para la navegación)

React Router es una de las dependencias más populares para la navegación en una aplicación React. Te permite definir rutas y gestionar la navegación entre páginas.

react-router-dom: Usado para aplicaciones web para manejar rutas en el navegador.

*npm install react-router-dom*


1. Estructura General

Proyecto_Full_Stack/
│
├── kalma_dental/
├── FrondEnd/Clinica_Dental
/src
├── components/        // Componentes reutilizables y pequeños
├── img/               // Imágenes y recursos visuales
├── locales/           // Archivos para la internacionalización (i18n)
├── pages/             // Páginas completas de la aplicación
├── routes/            // Rutas de la aplicación usando React Router
├── service/           // Funciones para hacer peticiones a la API
├── styles/            // Archivos de estilo CSS o SCSS
└── App.js    


1. components/

Esta carpeta contiene los componentes reutilizables y pequeños que pueden ser utilizados en diferentes partes de la aplicación. Los componentes en esta carpeta son típicamente piezas modulares de la interfaz de usuario (UI), formularios, tarjetas, etc. Pueden ser componentes tanto visuales (como botones, entradas de formulario) como lógicos (como validación de formularios o gestión de estado).

Ejemplo de lo que contiene:


FormServices.jsx: Un componente de formulario que permite crear un nuevo servicio, incluyendo campos como el nombre del servicio, descripción y URL.

Header.js: Un componente que representa la cabecera de la aplicación, que podría incluir un logo y enlaces de navegación a otras partes de la página.

Uso: Los componentes dentro de esta carpeta se usan para construir las distintas partes de la interfaz de usuario y son reutilizables a lo largo de la aplicación.


2. img/

Esta carpeta almacena todas las imágenes y otros recursos visuales estáticos que se utilizan en la interfaz de usuario, como logos, imágenes de encabezado o íconos.

Ejemplo de lo que contiene:

logo.png: El logo de la clínica Kalma Dental, que se usará en la cabecera o el pie de página.


Uso: Los archivos en esta carpeta se importan en los componentes según sea necesario para mostrar imágenes estáticas en la aplicación.


3. locales/


Esta carpeta contiene los archivos relacionados con la internacionalización (i18n) de la aplicación. Si la aplicación está disponible en varios idiomas, los archivos de esta carpeta contienen los textos en cada idioma. Esto permite que la interfaz de usuario se adapte según el idioma seleccionado.

Ejemplo de lo que contiene:

en.json: Un archivo JSON con las traducciones de los textos de la interfaz de usuario en inglés. Ejemplo de contenido:


{
  "title": "Welcome to Kalma Dental",
  "service_title": "Our Services",
  "footer": "© 2024 Kalma Dental"
}

es.json: Un archivo JSON con las traducciones de los textos de la interfaz de usuario en español. Ejemplo de contenido:


{
  "title": "Bienvenidos a Kalma Dental",
  "service_title": "Nuestros Servicios",
  "footer": "© 2024 Kalma Dental"
}


Uso: Estos archivos se cargan según el idioma seleccionado y permiten que la aplicación se muestre en diferentes lenguajes.



Aquí tienes una explicación detallada de lo que contiene cada una de las carpetas de tu proyecto React:

1. components/
Esta carpeta contiene los componentes reutilizables y pequeños que pueden ser utilizados en diferentes partes de la aplicación. Los componentes en esta carpeta son típicamente piezas modulares de la interfaz de usuario (UI), como botones, formularios, tarjetas, etc. Pueden ser componentes tanto visuales (como botones, entradas de formulario) como lógicos (como validación de formularios o gestión de estado).

Ejemplo de lo que contiene:

ServiceCard.js: Este componente representa una tarjeta que muestra la información de un servicio específico, como su nombre, descripción y URL.
ServiceForm.js: Un componente de formulario que permite crear un nuevo servicio, incluyendo campos como el nombre del servicio, descripción y URL.
Header.js: Un componente que representa la cabecera de la aplicación, que podría incluir un logo y enlaces de navegación a otras partes de la página.
Uso: Los componentes dentro de esta carpeta se usan para construir las distintas partes de la interfaz de usuario y son reutilizables a lo largo de la aplicación.

2. img/
Esta carpeta almacena todas las imágenes y otros recursos visuales estáticos que se utilizan en la interfaz de usuario, como logos, imágenes de encabezado o íconos.

Ejemplo de lo que contiene:

logo.png: El logo de la clínica Kalma Dental, que se usará en la cabecera o el pie de página.
hero-image.jpg: Una imagen principal o de bienvenida que aparece en la parte superior de la página de inicio.
icon-service.svg: Un icono relacionado con los servicios de la clínica que se puede usar en la página de servicios o en botones.
Uso: Los archivos en esta carpeta se importan en los componentes según sea necesario para mostrar imágenes estáticas en la aplicación.

3. locales/
Esta carpeta contiene los archivos relacionados con la internacionalización (i18n) de la aplicación. Si la aplicación está disponible en varios idiomas, los archivos de esta carpeta contienen los textos en cada idioma. Esto permite que la interfaz de usuario se adapte según el idioma seleccionado.

Ejemplo de lo que contiene:

en.json: Un archivo JSON con las traducciones de los textos de la interfaz de usuario en inglés. Ejemplo de contenido:


{
  "title": "Welcome to Kalma Dental",
  "service_title": "Our Services",
  "footer": "© 2024 Kalma Dental"
}
es.json: Un archivo JSON con las traducciones de los textos de la interfaz de usuario en español. Ejemplo de contenido:


{
  "title": "Bienvenidos a Kalma Dental",
  "service_title": "Nuestros Servicios",
  "footer": "© 2024 Kalma Dental"
}
Uso: Estos archivos se cargan según el idioma seleccionado y permiten que la aplicación se muestre en diferentes lenguajes.


4. pages/

La carpeta pages/ contiene los componentes principales que representan páginas completas en la aplicación. Cada archivo dentro de esta carpeta generalmente corresponde a una ruta de la aplicación, y cada uno se renderiza cuando el usuario navega a esa ruta específica.

Ejemplo de lo que contiene:

PageHome.js: Representa la página principal de la aplicación, que podría mostrar una bienvenida, los servicios destacados, etc.

PageService.js: Muestra la lista de todos los servicios ofrecidos por la clínica, donde cada servicio puede estar representado por un componente ServiceCard.

PageContact.js: Página que contiene información de contacto y un formulario para que los usuarios se pongan en contacto con la clínica.


Uso: Estas páginas están asociadas con rutas específicas (por ejemplo, /, /servicios, /contacto) y representan las vistas completas que los usuarios ven al navegar por la aplicación.


5. routes/
La carpeta routes/ se utiliza para manejar las rutas de la aplicación. Dentro de esta carpeta se definen todas las rutas principales usando React Router (una biblioteca comúnmente utilizada para la navegación en aplicaciones React). Cada ruta está asociada con un componente que se renderiza cuando el usuario visita una URL específica.

Ejemplo de lo que contiene:

index.js: Este archivo define las rutas principales de la aplicación. Utiliza React Router para asociar cada URL con su correspondiente componente.


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageService from "../pages/PageService";
import PageContact from "../pages/PageContact";

const Routes = () => {
  return (

    <Router>
    <Routes>

        <Route path="/" element={PageHome} />
        <Route path="/servicios" element={PageService} />
        <Route path="/contacto" element={PageContact} />

    </Routes>   
    </Router>

  );
};

export default Routes;

Uso: Este archivo permite que las distintas páginas se muestren según la URL que se visita, manejando la navegación interna de la aplicación.



6. service/

La carpeta service/ contiene archivos que gestionan la comunicación con el Back-End de la aplicación. Estos archivos generalmente contienen funciones que hacen solicitudes HTTP (por ejemplo, usando Fetch) para interactuar con la API de Django. Aquí se gestionan las peticiones para obtener datos, enviar datos, etc.

Ejemplo de lo que contiene:


// Función para obtener todos los servicios
export const getServices = async () => {
  try {
    const response = await fetch('/api/servicios/');  // Solicitud GET
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de servicios');
    }
    const data = await response.json();
    return data;  // Devuelve los servicios obtenidos
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
    throw error;
  }
};

// Función para crear un nuevo servicio
export const createService = async (serviceData) => {
  try {
    const response = await fetch('/api/servicios/', {
      method: 'POST',  // Método POST
      headers: {
        'Content-Type': 'application/json',  // Indicamos que el cuerpo es JSON
        'Authorization': ` Bearer ${localStorage.getItem("token")} `,  // Autenticación (si es necesario)
      },
      body: JSON.stringify(serviceData),  // Convertimos el objeto a JSON
    });

    if (!response.ok) {
      throw new Error('No se pudo crear el servicio');
    }

    const data = await response.json();
    return data;  // Devuelve el servicio recién creado
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    throw error;
  }
};


Uso: Estas funciones se importan en los componentes donde se necesita interactuar con la API (por ejemplo, obtener servicios o crear uno nuevo) y permiten la comunicación con el Back-End.


Aquí tienes una explicación detallada de lo que contiene cada una de las carpetas de tu proyecto React:

1. components/
Esta carpeta contiene los componentes reutilizables y pequeños que pueden ser utilizados en diferentes partes de la aplicación. Los componentes en esta carpeta son típicamente piezas modulares de la interfaz de usuario (UI), como botones, formularios, tarjetas, etc. Pueden ser componentes tanto visuales (como botones, entradas de formulario) como lógicos (como validación de formularios o gestión de estado).

Ejemplo de lo que contiene:

ServiceCard.js: Este componente representa una tarjeta que muestra la información de un servicio específico, como su nombre, descripción y URL.
ServiceForm.js: Un componente de formulario que permite crear un nuevo servicio, incluyendo campos como el nombre del servicio, descripción y URL.
Header.js: Un componente que representa la cabecera de la aplicación, que podría incluir un logo y enlaces de navegación a otras partes de la página.
Uso: Los componentes dentro de esta carpeta se usan para construir las distintas partes de la interfaz de usuario y son reutilizables a lo largo de la aplicación.

2. img/
Esta carpeta almacena todas las imágenes y otros recursos visuales estáticos que se utilizan en la interfaz de usuario, como logos, imágenes de encabezado o íconos.

Ejemplo de lo que contiene:

logo.png: El logo de la clínica Kalma Dental, que se usará en la cabecera o el pie de página.
hero-image.jpg: Una imagen principal o de bienvenida que aparece en la parte superior de la página de inicio.
icon-service.svg: Un icono relacionado con los servicios de la clínica que se puede usar en la página de servicios o en botones.
Uso: Los archivos en esta carpeta se importan en los componentes según sea necesario para mostrar imágenes estáticas en la aplicación.

3. locales/
Esta carpeta contiene los archivos relacionados con la internacionalización (i18n) de la aplicación. Si la aplicación está disponible en varios idiomas, los archivos de esta carpeta contienen los textos en cada idioma. Esto permite que la interfaz de usuario se adapte según el idioma seleccionado.

Ejemplo de lo que contiene:

en.json: Un archivo JSON con las traducciones de los textos de la interfaz de usuario en inglés. Ejemplo de contenido:


{
  "title": "Welcome to Kalma Dental",
  "service_title": "Our Services",
  "footer": "© 2024 Kalma Dental"
}
es.json: Un archivo JSON con las traducciones de los textos de la interfaz de usuario en español. Ejemplo de contenido:


{
  "title": "Bienvenidos a Kalma Dental",
  "service_title": "Nuestros Servicios",
  "footer": "© 2024 Kalma Dental"
}
Uso: Estos archivos se cargan según el idioma seleccionado y permiten que la aplicación se muestre en diferentes lenguajes.

4. pages/
La carpeta pages/ contiene los componentes principales que representan páginas completas en la aplicación. Cada archivo dentro de esta carpeta generalmente corresponde a una ruta de la aplicación, y cada uno se renderiza cuando el usuario navega a esa ruta específica.

Ejemplo de lo que contiene:

PageHome.js: Representa la página principal de la aplicación, que podría mostrar una bienvenida, los servicios destacados, etc.

PageService.js: Muestra la lista de todos los servicios ofrecidos por la clínica, donde cada servicio puede estar representado por un componente ServiceCard.

PageContact.js: Página que contiene información de contacto y un formulario para que los usuarios se pongan en contacto con la clínica.


Uso: Estas páginas están asociadas con rutas específicas (por ejemplo, /, /servicios, /contacto) y representan las vistas completas que los usuarios ven al navegar por la aplicación.


5. routes/

La carpeta routes/ se utiliza para manejar las rutas de la aplicación. Dentro de esta carpeta se definen todas las rutas principales usando React Router (una biblioteca comúnmente utilizada para la navegación en aplicaciones React). Cada ruta está asociada con un componente que se renderiza cuando el usuario visita una URL específica.

Ejemplo de lo que contiene:

index.js: Este archivo define las rutas principales de la aplicación. Utiliza React Router para asociar cada URL con su correspondiente componente.


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/servicios" component={ServicePage} />
        <Route path="/contacto" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default Routes;


Uso: Este archivo permite que las distintas páginas se muestren según la URL que se visita, manejando la navegación interna de la aplicación.

6. service/

La carpeta service/ contiene archivos que gestionan la comunicación con el Back-End de la aplicación. Estos archivos generalmente contienen funciones que hacen solicitudes HTTP (por ejemplo, usando Axios o Fetch) para interactuar con la API de Django. Aquí se gestionan las peticiones para obtener datos, enviar datos, etc.

Ejemplo de lo que contiene:

api.js: Un archivo que define las funciones que hacen las solicitudes API para obtener la lista de servicios, crear un nuevo servicio, etc.

// URL del API donde se crean los servicios
const apiUrl = 'http://localhost:8000/api/servicios/';

// Los datos que deseas enviar
const newService = {
  services_url: 'http://example.com/servicio',
  services_name: 'Nuevo servicio',
  description: 'Descripción del nuevo servicio',
  id_specialists: 1, // Suponiendo que es un ID válido de especialista
};

// Realiza la solicitud POST para crear un nuevo servicio
fetch(apiUrl, {
  method: 'POST', // Especifica el método HTTP (POST)
  headers: {
    'Content-Type': 'application/json', // Se especifica que los datos están en formato JSON
    'Authorization': 'Bearer tu_token_aqui' // Si es necesario un token de autenticación
  },
  body: JSON.stringify(newService), // Convierte los datos a JSON antes de enviarlos
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al crear el servicio');
    }
    return response.json();
  })
  .then(data => {
    console.log('Nuevo servicio creado:', data);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });




7. styles/

La carpeta styles/ contiene todos los archivos de estilo CSS o SCSS que controlan la apariencia visual de la aplicación. Esto puede incluir estilos globales, así como estilos específicos para ciertos componentes o páginas.

Ejemplo de lo que contiene:

main.css: Archivo de estilos globales que aplica configuraciones generales, como la tipografía, colores de fondo, márgenes, etc.

header.css: Estilos específicos para la cabecera, como la disposición de los elementos del encabezado (logo, navegación).

service.css: Estilos específicos para los componentes relacionados con los servicios, como la disposición de las tarjetas de servicio.


Uso: Los archivos en esta carpeta se importan en los componentes correspondientes para aplicar estilos visuales. En React, los estilos pueden ser globales o específicos de un componente.



**BACK-END**


1. Django:

La dependencia principal de cualquier proyecto Django. Es el framework que gestiona la estructura y las funcionalidades del proyecto.

Instalación:

*pip install django*

2. Django Rest Framework (DRF):

Si estás construyendo APIs, esta biblioteca es fundamental para trabajar con vistas basadas en clases (CBV) y serializadores, permitiendo transformar modelos Django a formatos como JSON.

Instalación:

*pip install djangorestframework*

3. Django CORS Headers:

Permite manejar los encabezados CORS (Cross-Origin Resource Sharing), lo cual es esencial si tu frontend y backend están en dominios diferentes.

Instalación:

*pip install django-cors-headers*


**Agregar a INSTALLED_APPS y MIDDLEWARE**

Una vez instalado el paquete, debes añadirlo a tu archivo de configuración settings.py.

INSTALLED_APPS:

Añade corsheaders a la lista de aplicaciones instaladas.


INSTALLED_APPS = [
    # Otras aplicaciones de Django
    'corsheaders',
    # Otras aplicaciones de tu proyecto
]


MIDDLEWARE:

Añade CorsMiddleware a la lista de middlewares, asegurándote de que esté antes de CommonMiddleware.


MIDDLEWARE = [
    # Otros middlewares de Django
    'corsheaders.middleware.CorsMiddleware',  # Debe estar antes de CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    # Otros middlewares de tu proyecto
]


1. Estructura General

Proyecto_Full_Stack/
│
├── kalma_dental/
|
├── BackEnd/clinic_app                 
│   ├── migrations/            # Carpeta de migraciones
│   ├── admin.py               # Configuración del panel de administración
│   ├── models.py              # Definición de modelos
│   ├── serializers.py         # Serializadores para las APIs
│   ├── urls.py                # Rutas específicas de la aplicación
│   ├── views.py               # Lógica para manejar las peticiones
│   └── settings.py            # Configuración específica de la aplicación
│
├── Clinic_app/              # Carpeta del proyecto principal de Django
│   ├── __init__.py            # Indica que es un paquete Python
│   ├── settings.py            # Configuración global de Django
│   ├── urls.py                # Rutas principales del proyecto
│   ├── wsgi.py                # Configuración para servir el proyecto
│   └── asgi.py                # Configuración para WebSockets (si se usa)
└── manage.py 


2. Carpeta migrations/

En Django, las migraciones son archivos que contienen instrucciones sobre cómo modificar la base de datos de acuerdo a los cambios en los modelos. Cuando creas o modificas un modelo en models.py, debes generar migraciones para actualizar la base de datos. Esta carpeta migrations/ contiene esos archivos.

**¿Qué hace?**

Cada vez que creas o modificas un modelo en Django (por ejemplo, un modelo de Especialistas, Consejos, etc...), Django genera un archivo de migración para describir esos cambios.

Las migraciones permiten que la base de datos se mantenga sincronizada con los modelos definidos en el código.

Puedes ver un archivo como 0001_initial.py, que representa la primera migración, o migraciones posteriores que contienen modificaciones en los modelos.

- Para crear nuevas migraciones, se utiliza el siguiente comando:

*python manage.py makemigrations*

- Y para aplicar esas migraciones a la base de datos, se utiliza el siguiente comando:

*python manage.py migrate*


3. Archivo models.py 


En Django, los modelos representan las tablas de la base de datos. Cada clase que se define en models.py es una tabla en la base de datos, y cada atributo de esa clase es una columna en la tabla.


**¿Qué hace?**

Define la estructura de las tablas de la base de datos (campos y relaciones).
Permite la creación de registros en las tablas mediante el ORM (Object Relational Mapping) de Django, que facilita la interacción con la base de datos utilizando Python.

Ejemplo de modelo:


*from django.db import models*

class services(models.Model):
    services_url = models.TextField()
    services_name = models.CharField(max_length=150)
    description = models.TextField()
    id_specialists = models.ForeignKey(specialists, on_delete=models.CASCADE, related_name='services')
    
    def __str__(self):
        return self.services_name


El modelo services define una tabla en la base de datos para almacenar información sobre los servicios ofrecidos por los especialistas de la clínica. Cada servicio tiene una URL (services_url), un nombre (services_name), y una descripción (description). Además, cada servicio está relacionado con un especialista a través de una clave foránea (id_specialists), lo que implica que cada servicio es proporcionado por un único especialista.



4. Archivo serializers.py


Si estás utilizando Django Rest Framework (DRF), los serializadores convierten los datos entre formatos que pueden ser fácilmente manipulados (como JSON) y objetos Python.


**¿Qué hace?**

Los serializadores permiten transformar los modelos de Django en objetos JSON y viceversa.
Son necesarios para crear APIs que los usuarios o sistemas externos puedan consumir.

Ejemplo de un serializador:


*from rest_framework import serializers*
*from .models import Paciente*


class servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = services
        fields = '__all__'


Este serializador convierte el modelo services en JSON, que puede ser utilizado en una API REST.



5. Archivo urls.py


Este archivo se encarga de definir las rutas (URLs) que corresponden a cada vista o recurso de la aplicación. Puedes definir rutas específicas para la aplicación dentro de Clinic_app, o rutas globales dentro de la configuración principal de Django.


**¿Qué hace?**


Define las URLs específicas para tu aplicación.
Permite asociar cada ruta a una vista o conjunto de vistas que manejarán las peticiones HTTP.


Ejemplo de cómo se definen las URLs:


from django.urls import path
from . import views

urlpatterns = [
    path ('servicios/', views.servicesListCreate.as_view(), name = 'servicios_list'),
    path('servicios/<int:pk>/', views.servicesDetail.as_view(), name = 'servicios'),
]


6. Archivo views.py


En Django, las vistas son responsables de procesar las solicitudes HTTP y devolver respuestas HTTP, como HTML, JSON, etc.

**¿Qué hace?**


Define la lógica detrás de cada URL o ruta.
En Django, las vistas se pueden implementar de diversas maneras: vistas basadas en funciones (FBV) o vistas basadas en clases (CBV).


Ejemplo de vista basada en función:


*from django.shortcuts import render*
*from .models import Paciente*

class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsPrincipal()]


7. Carpeta Clinic_app/

Esta es la carpeta que contiene toda la lógica y estructura de la aplicación específica de la clínica. Aquí se encuentran los archivos de configuración de la aplicación, sus vistas, modelos, y URLs. Esta aplicación es un componente modular dentro del proyecto Kalma Dental.

**¿Qué contiene?**

settings.py: Este archivo no es común en la estructura estándar de Django, pero si existe dentro de una app específica, podría incluir configuraciones relacionadas solo con esa aplicación (por ejemplo, configuraciones de autenticación, APIs específicas, etc.).

urls.py: Como se mencionó anteriormente, este archivo maneja las URLs específicas de la aplicación Clinic_app, y se suele incluir en el archivo urls.py principal del proyecto para enrutar las solicitudes correctamente.


**Conclusión**

*En este documento hemos recorrido en detalle los archivos y carpetas más importantes de tu aplicación Kalma Dental basada en Django. Cada archivo tiene un propósito específico que contribuye al funcionamiento general de la aplicación, desde la gestión de la base de datos hasta la configuración de la administración, las APIs y la lógica de las vistas.*