export default {
  //Home Page
  index: {
    permission: 'ibanners.positions.index',
    activated: true,
    path: '/banners/index',
    name: 'qbanner.admin.positions',
    crud : import('@imagina/qbanner/_crud/positions'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qbanner.sidebar.adminBanner',
    icon: 'fas fa-photo-video',
    authenticated: true,
    subHeader: {refresh: true}
  },
  showBanner: {
    permission: 'ibanners.banners.index',
    activated: true,
    path: '/banners/show/:id',
    name: 'qbanner.admin.positions.show',
    page: () => import('@imagina/qbanner/_pages/admin/positions/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qbanner.sidebar.adminBannerEdit',
    icon: 'fas fa-image',
    authenticated: true,
    subHeader : {
      refresh: true,
      breadcrumb: ['qbanner.index']
    }
  },
  createBanner: {
    permission: 'ibanners.banners.create',
    activated: true,
    path: '/banners/create/:positionId',
    name: 'qbanner.admin.banner.create',
    page: () => import('@imagina/qbanner/_pages/admin/banner/create.vue'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qbanner.sidebar.adminIndex',
    icon: 'fas fa-images',
    authenticated: true,
  },
  updateBanner: {
    permission: 'ibanners.banners.update',
    activated: true,
    path: '/banners/update/:positionId/:id',
    name: 'qbanner.admin.banner.update',
    page: () => import('@imagina/qbanner/_pages/admin/banner/show.vue'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qbanner.sidebar.adminIndex',
    icon: 'fas fa-images',
    authenticated: true,
  },
}
