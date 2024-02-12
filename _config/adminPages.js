export default {
  //Home Page
  index: {
    permission: 'ibanners.positions.manage',
    activated: true,
    path: '/banners/index',
    name: 'qbanner.admin.positions',
    crud : import('modules/qbanner/_crud/positions'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ibanners.cms.sidebar.adminBanner',
    icon: 'fa-light fa-rectangle-history-circle-plus',
    authenticated: true,
    subHeader: {refresh: true}
  },
  showBanner: {
    permission: 'ibanners.banners.index',
    activated: true,
    path: '/banners/show/:id',
    name: 'qbanner.admin.positions.show',
    page: () => import('modules/qbanner/_pages/admin/positions/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ibanners.cms.sidebar.adminBannerEdit',
    icon: 'fa-light fa-image',
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
    page: () => import('modules/qbanner/_pages/admin/banner/create.vue'),
    layout: () => import('layouts/master.vue'),
    title: 'ibanners.cms.sidebar.adminIndex',
    icon: 'fa-light fa-image',
    authenticated: true,
  },
  updateBanner: {
    permission: 'ibanners.banners.update',
    activated: true,
    path: '/banners/update/:positionId/:id',
    name: 'qbanner.admin.banner.update',
    page: () => import('modules/qbanner/_pages/admin/banner/show.vue'),
    layout: () => import('layouts/master.vue'),
    title: 'ibanners.cms.sidebar.adminIndex',
    icon: 'fa-light fa-image',
    authenticated: true,
  },
}
