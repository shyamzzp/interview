import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd39'),
    routes: [
      {
        path: '/docs/design-patterns',
        component: ComponentCreator('/docs/design-patterns', '0f2'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c05'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
