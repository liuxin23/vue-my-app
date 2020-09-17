export default [
  {
    path: '/',//主页
    name: 'home',
    component: () => import('@/views/home')
  },
  { path: '*', redirect: '/404' }
];