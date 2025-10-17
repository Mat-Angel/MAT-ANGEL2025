import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuDataService {

  socialNetworks: MenuItem[] = [
    {
      id: 'linkedin',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/mat-angel/',
      type: 'menuUrl',
      icon: 'fa-brands fa-linkedin'
    },
    {
      id: 'whatsApp',
      name: 'WhatsApp',
      link: 'https://api.whatsapp.com/send?phone=5658922731&text=¡Te%20comparto%20que%20he%20visitado%20tu%20pagina!',
      type: 'menuUrl',
      icon: 'fa-brands fa-whatsapp fa-lg'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      link: 'https://www.facebook.com/MAT.Angel.Dev',
      type: 'menuUrl',
      icon: 'fa-brands fa-facebook fa-lg'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      link: 'https://www.instagram.com/mat_angel_/',
      type: 'menuUrl',
      icon: 'fa-brands fa-instagram'
    },
    {
      id: 'x-twitter',
      name: 'X',
      link: 'https://twitter.com/MAT__Angel',
      type: 'menuUrl',
      icon: 'fa-brands fa-square-x-twitter fa-lg'
    },
    // {
    //   id: 'youtube',
    //   name: 'Youtube',
    //   link: 'https://www.youtube.com/channel/UC2pWsYadGXXmoNzLP8-Rj-Q',
    //   type: 'menuUrl',
    //   icon: 'fa-brands fa-youtube fa-lg'
    // },
    // {
    //   id: 'paginaParaPruebas',
    //   name: 'Pagina para pruebas',
    //   link: '/prueba',
    //   type: 'menuRoute',
    //   icon: 'fa-solid fa-gears fa-lg'
    // }
  ];

  menuData: MenuItem[] = [
    {
      type: 'menuRoute',
      id: 'initial',
      name: 'Inicio',
      link: '/',
      icon: 'fa-regular fa-house',
    },
    {
      type: 'menuTrigger',
      id: 'proyectosMenu',
      name: 'Proyectos',
      link: '/proyectos',
      icon: 'fa-solid fa-briefcase',
      child: [
        {
          name: 'Contenedor de Tabs',
          id: 'contenedorTabs',
          type: 'menuUrl',
          icon: 'fa-solid fa-up-right-from-square',
          link: 'https://contenedor-tabsbasic.web.app'
        },
        {
          name: 'Buscador de gifs',
          id: 'buscadorGifs',
          type: 'menuUrl',
          icon: 'fa-solid fa-up-right-from-square',
          link: 'https://stickersapp.mat-angel.com'
        },
        // {
        //   type: 'menuRoute',
        //   id: '',
        //   name: 'Agenda',
        //   link: '/agenda'
        // },
        // {
        //   type: 'menuRoute',
        //   id: '',
        //   name: 'Control de gastos',
        //   link: '/control_de_gastos'
        // },
        // {
        //   type: 'menuRoute',
        //   id: '',
        //   name: 'Proyecto Sist. 1er Orden',
        //   link: '/sist_1er_orden'
        // },
        {
          type: 'menuRoute',
          id: 'test',
          name: 'Sitio de Pruebas',
          link: '/test',
          icon: 'fa-solid fa-gears',
        }
      ],
    },
    /*
    {
      type: 'menuUrl',
      id: 'muse',
      name: 'MUSE',
      link: 'https://www.muse.mu/',
      icon: 'fa-solid fa-arrow-up-right-from-square'
    },
    */
    {
      type: 'menuTrigger',
      id: 'playMenu',
      name: 'MiniGames',
      link: '/play',
      icon: 'fa-solid fa-gamepad',
      child: [
        {
          id: 'playMenu',
          name: 'Adivinador de números',
          link: '/number_mentalist',
          type: 'menuRoute',
          icon: 'fa-solid fa-dice'
        }
      ]
    },
    {
      type: 'menuTrigger',
      id: 'angularFeatures',
      name: 'Angular',
      link: '/angular_features',
      icon: 'fa-brands fa-angular',
      child: [
        {
          id: 'changeDetection',
          subtitle: 'Funcionalidades',
          name: 'Change Detection',
          link: 'https://projects.mat-angel.com/angular_features/change_detection',
          type: 'menuUrl',
          icon: 'fa-solid fa-gear'
        },
        {
          id: 'controlFlow',
          name: 'Control Flow',
          link: 'https://projects.mat-angel.com/angular_features/control_flow',
          type: 'menuUrl',
          icon: 'fa-solid fa-gear'
        },
        {
          id: 'deferOptions',
          name: 'Defer Options',
          link: 'https://projects.mat-angel.com/angular_features/defer_options',
          type: 'menuUrl',
          icon: 'fa-solid fa-gear'
        },
        {
          id: 'deferViews',
          name: 'Defer Views',
          link: 'https://projects.mat-angel.com/angular_features/defer_views',
          type: 'menuUrl',
          icon: 'fa-solid fa-gear'
        },
        {
          id: 'userList',
          name: 'User List',
          link: 'https://projects.mat-angel.com/angular_features/user_list',
          type: 'menuUrl',
          icon: 'fa-solid fa-gear'
        },
        {
          id: 'viewTransitions',
          name: 'View Transitions',
          link: 'https://projects.mat-angel.com/angular_features/view_transitions1',
          type: 'menuUrl',
          icon: 'fa-solid fa-gear'
        }
      ]
    },
    {
      type: 'menuTrigger',
      id: 'contactoMenu',
      name: 'Contacto',
      link: '/contacto',
      icon: 'fa-solid fa-address-card',
      child: this.socialNetworks
    }
  ];
}
