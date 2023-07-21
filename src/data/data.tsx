import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa';
import { v4 } from 'uuid';

const sublinks = [
  {
    pageId: v4(),
    page: 'product',
    links: [
      {
        id: v4(),
        label: 'community',
        icon: <Fa500Px />,
        url: '/product/community',
      },
      {
        id: v4(),
        label: 'content',
        icon: <FaAccusoft />,
        url: '/product/content',
      },
      {
        id: v4(),
        label: 'roles',
        icon: <FaAdversal />,
        url: '/product/roles',
      },
    ],
  },
  {
    pageId: v4(),
    page: 'solutions',
    links: [
      {
        id: v4(),
        label: 'developers',
        icon: <FaAvianex />,
        url: '/solutions/developers',
      },
      {
        id: v4(),
        label: 'content managers',
        icon: <FaBitcoin />,
        url: '/solutions/content-managers',
      },
      {
        id: v4(),
        label: 'business teams',
        icon: <FaBtc />,
        url: '/solutions/business teams',
      },
      {
        id: v4(),
        label: 'ecommerce',
        icon: <FaCodiepie />,
        url: '/solutions/ecommerce',
      },
    ],
  },
  {
    page: 'resources',
    pageId: v4(),
    links: [
      {
        id: v4(),
        label: 'starters',
        icon: <FaDocker />,
        url: '/resources/starters',
      },
      {
        id: v4(),
        label: 'showcase',
        icon: <FaGithubSquare />,
        url: '/resources/showcase',
      },
    ],
  },
];

export default sublinks;
