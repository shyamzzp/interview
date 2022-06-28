import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/interview/__docusaurus/debug',
    component: ComponentCreator('/interview/__docusaurus/debug', '5f5'),
    exact: true
  },
  {
    path: '/interview/__docusaurus/debug/config',
    component: ComponentCreator('/interview/__docusaurus/debug/config', '11c'),
    exact: true
  },
  {
    path: '/interview/__docusaurus/debug/content',
    component: ComponentCreator('/interview/__docusaurus/debug/content', '661'),
    exact: true
  },
  {
    path: '/interview/__docusaurus/debug/globalData',
    component: ComponentCreator('/interview/__docusaurus/debug/globalData', 'fe0'),
    exact: true
  },
  {
    path: '/interview/__docusaurus/debug/metadata',
    component: ComponentCreator('/interview/__docusaurus/debug/metadata', '608'),
    exact: true
  },
  {
    path: '/interview/__docusaurus/debug/registry',
    component: ComponentCreator('/interview/__docusaurus/debug/registry', '9f3'),
    exact: true
  },
  {
    path: '/interview/__docusaurus/debug/routes',
    component: ComponentCreator('/interview/__docusaurus/debug/routes', '613'),
    exact: true
  },
  {
    path: '/interview/docs',
    component: ComponentCreator('/interview/docs', '297'),
    routes: [
      {
        path: '/interview/docs/data-structures',
        component: ComponentCreator('/interview/docs/data-structures', 'e9f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/algorithms',
        component: ComponentCreator('/interview/docs/data-structures/algorithms', '146'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/arrays',
        component: ComponentCreator('/interview/docs/data-structures/arrays', '2d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/bit-manipulation',
        component: ComponentCreator('/interview/docs/data-structures/bit-manipulation', 'd78'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/common-problems',
        component: ComponentCreator('/interview/docs/data-structures/common-problems', 'e59'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/comparators',
        component: ComponentCreator('/interview/docs/data-structures/comparators', '266'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/complexity',
        component: ComponentCreator('/interview/docs/data-structures/complexity', 'cb7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/dequeue',
        component: ComponentCreator('/interview/docs/data-structures/dequeue', '722'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/dfs',
        component: ComponentCreator('/interview/docs/data-structures/dfs', '924'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/graph',
        component: ComponentCreator('/interview/docs/data-structures/graph', '7f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/linked-list',
        component: ComponentCreator('/interview/docs/data-structures/linked-list', '795'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/map',
        component: ComponentCreator('/interview/docs/data-structures/map', 'e8a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/math',
        component: ComponentCreator('/interview/docs/data-structures/math', '862'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/priority-queue',
        component: ComponentCreator('/interview/docs/data-structures/priority-queue', '528'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/search-algorithms',
        component: ComponentCreator('/interview/docs/data-structures/search-algorithms', 'be3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/snippets',
        component: ComponentCreator('/interview/docs/data-structures/snippets', '9c2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/sorting-algorithms',
        component: ComponentCreator('/interview/docs/data-structures/sorting-algorithms', '7b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/tree',
        component: ComponentCreator('/interview/docs/data-structures/tree', '773'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/data-structures/trie',
        component: ComponentCreator('/interview/docs/data-structures/trie', 'e07'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/interview/docs/design-patterns',
        component: ComponentCreator('/interview/docs/design-patterns', '4b0'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/interview/',
    component: ComponentCreator('/interview/', '7cc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
