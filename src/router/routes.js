
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/PageHome.vue'),
        name: 'Home'
      },
      {
        path: '',
        component: () => import('pages/Home.vue'),
        name: 'Meninas Super Protegidas'
      },
      {
        path: '/questionario',
        component: () => import('pages/Questionario.vue'),
        name: 'Questionario'
      },
      {
        path: '/gps',
        component: () => import('pages/Gps.vue'),
        name: 'Gps'
      },
      {
        path: '/panico',
        component: () => import('pages/Panico.vue'),
        name: 'Panico'
      },
      {
        path: '/amigofiel',
        component: () => import('pages/AmigoFiel.vue'),
        name: 'AmigoFiel'
      },
      {
        path: '/maps',
        component: () => import('pages/Maps.vue'),
        name: 'Maps'
      },
      {
        path: '/Camera',
        component: () => import('pages/Camera.vue'),
        name: 'Camera'
      },      
      {
        path: '/Contato',
        component: () => import('pages/Contato.vue'),
        name: 'Contato'
      },
      {
        path: '/Informacoes',
        component: () => import('pages/Informacoes.vue'),
        name: 'Informacoes'
      },
      
      // {
      //   path: '/Login',
      //   component: () => import('pages/Login.vue'),
      //   name: 'login'
      // },      
      // {
      //   path: '/Users',
      //   component: () => import('pages/Users.vue'),
      //   name: 'users'
      // },
      {
        path: '/about',
        component: () => import('pages/PageAbout.vue'),
        name: 'About'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
