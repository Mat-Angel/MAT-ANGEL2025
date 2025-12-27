import { computed, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectsDataService {
      readonly baseUrl = computed(()=> environment.gitRawUrl)

  private projectsData:CardData[] = [
    {
      title: 'App para finanzas personales',
      imageUrl: `${this.baseUrl()}smartControl_app.png`,
      url: 'https://smartcontrol.mat-angel.com/',
      urlType: 'external',
      description: 'Aplicación enfocada para control de las finanzas personales.',
      completeDescription: '<p>Esta aplicacion se encarga de mantener un registro de las finanzas del usuario para tener un control de sus gastos e ingresos, mostrando tambien los límites de crédito y fechas de pago de tarjetas, servicios, compras a meses, Etc. Mediante notificaciones, datos estadísticos y estados de cuenta generados desde la misma app.</p><p>El desarrollo de esta app está enfocada en un diseño responsive para garantizar una experiencia de usuario fluida y consistente tanto, en dispositivos de escritorio y dispositivos móviles. Diseñada con las versiones más recientes de Angular 20+, acompañada de framework de estilos de Tailwind y componentes CSS de DaisyUI</p>',
      skills: ['Angular', 'Tailwind', 'DaisyUI', 'API Rest', 'Firebase']
    },
    {
      title: 'Buscador de imágenes y stickers animados',
      imageUrl: `${this.baseUrl()}sticker_app.png`,
      url: 'https://stickersapp.mat-angel.com/',
      urlType: 'external',
      description: 'Aplicación encargada de mostrar imágenes y stickers animados más populares de la red, además de poder realizar búsquedas personalizadas.',
      completeDescription: '<p>Aplicación que implementa un visualizador de animaciones con una sección dedicada a mostrar las imágenes más populares mediante un sistema de scroll infinito. Con la ayuda de una barra inferior el usuario podra seleccionar el tipo de imagenes para mostrar. Y, en el menu lateral, en el buscador es posible cargar imagenes acorde a la preferencia del usuario, mostrando tambien una seccion de historial de busqueda para volver a ver resultados previos.</p><p>La aplicación está diseñada con un enfoque responsive, haciendo uso del framework de stilos CCS "Tailwind", garantizando una experiencia de usuario fluida y consistente tanto en dispositivos de escritorio como en dispositivos móviles.</p>',
      skills: ['Angular', 'Tailwind', 'API Rest']
    },
    {
      title: 'Contenedor de Tabs',
      imageUrl: `${this.baseUrl()}Contenedor_tabs.png`,
      url: 'https://contenedor-tabsbasic.web.app/',
      urlType: 'external',
      description: 'La aplicación permite consultar información organizada en pestañas dinámicas.',
      completeDescription: '<p>Se trata de la primera aplicación desarrollada por mí, utilizando HTML, CSS, JavaScript y el primer acercacionto que tuve con Angular Material. El objetivo fue priorizar un diseño personalizado y optimizado de acuerdo con los requerimientos del proyecto.</p><p>La aplicación permite consultar información organizada en pestañas dinámicas, que el usuario puede abrir en el orden que desee, cerrar cuando lo requiera y gestionar de manera interactiva. Además, integra un menú lateral jerárquico en forma de árbol desplegable que facilita la navegación entre los distintos submódulos.</p>',
      skills: ['Angular', "Angular Material", 'HTML', 'CSS', 'Javascript']
    },
    {
      title: 'Adivinador de números',
      imageUrl: `${this.baseUrl()}number_mentalist2.png`,
      url: '/number_mentalist',
      urlType: 'local',
      description: 'Aplicación capaz de adivinar un número elegido por el usuario y que, con base en 6 preguntas, indicará cuál es el número en cuestión.',
      completeDescription: '<p>Un truco de magia numérica que aprendí en mi infancia y que decidí plasmar en mis inicios como desarrollador Frontend.</p><p>Esta app está construida con Angular y utiliza Angular Material como biblioteca de componentes preconstruidos para la interfaz de usuario, usando principalmente un sistema de pasos para la navegación secuencial entre secciones (mat-stepper).Complementando tambien con Bootstrap para el manejo del sistema de grillas (layout responsivo)</p><p>Será capaz de adivinar un número elegido por el usuario y, con base en 6 preguntas, indicará cuál es el número en cuestión. El usuario puede jugar por sí mismo o usar este truco de magia con alguien más.</p>',
      skills: ['Angular', 'Angular Material', 'Bootstrap']
    }
  ]

  #certificatesData: CertData[] = [
    {
      title: 'Angular: de cero a experto - Edición 2025',
      skill: 'Angular',
      description: 'Curso intensivo, creado y guiado por <a target="_blank" href="https://fernando-herrera.com/course/angular-cero-experto">Fernando Herrera</a>, donde se enseña Angular desde los fundamentos hasta conceptos avanzados, adaptado al paradigma moderno de Zoneless basado en señales. ',
      imageUrl: `${this.baseUrl()}certificates/Angular_de_cero_a_experto.jpg`,
      fileUrl: `${this.baseUrl()}certificates/Certificado_Udemy_Angular_2025.pdf`,
      author: 'https://fernando-herrera.com/course/angular-cero-experto/',
    },
    {
      title: 'Universidad Excel - Básico, Intermedio y Avanzado',
      skill: 'Excel',
      description: 'Curso completo de Excel, desde nivel básico hasta avanzado, incluyendo tablas dinámicas, gráficos, Power Query y automatización con macros y VBA. Impartido por <a target="_blank" href="https://www.globalmentoring.com.mx/">Ubaldo Acosta - Global Mentoring</a>.',
      imageUrl: `${this.baseUrl()}certificates/Universidad_Excel.jpg`,
      fileUrl: `${this.baseUrl()}certificates/Certificado_Udemy_Universidad_Excel.pdf`,
      author: 'https://fernando-herrera.com/course/angular-cero-experto/',
    },
    {
      title: 'Python: Fundamentos y masterclass',
      skill: 'Python',
      description: 'Impartido en <a target="_blank" href="https://www.santanderopenacademy.com/es/courses/introduction_to_python_programming.html">Santander Open Academy</a>. Se trata de un curso introductorio al lenguaje de programación Python, diseñado para desarrollar las bases de la lógica computacional y la escritura de código limpio y estructurado.',
      imageUrl: `${this.baseUrl()}certificates/openAcademy_Python.jpg`,
      fileUrl: `${this.baseUrl()}certificates/CertificadoCursoPythonSantander.pdf`,
      author: 'https://fernando-herrera.com/course/angular-cero-experto/',
    }
  ]

  getProjectsData():CardData[]{
    return this.projectsData;
  }

  getCertsData():CertData[]{
    return this.#certificatesData;
  }

}
