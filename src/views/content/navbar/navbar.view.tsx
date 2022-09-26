import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, Menu} from 'antd';
import { BrowserRoute } from '../../../routes/browser.routes';


const items: MenuProps['items'] = [
  {
    label: (
      <Link to={BrowserRoute.totalStats}>
       Общая статистика
      </Link>
    ),
    key: 'totalStats',
  },
  {
    label: 'По регионам ',
    key: 'SubMenu',
    children: [
      {
        label: 'Option 1',
        key: 'setting:1',
      },
      {
        label: 'Option 2',
        key: 'setting:2',
      },
      {
        label: 'Option 3',
        key: 'setting:3',
      },
      {
        label: 'Option 4',
        key: 'setting:4',
      },
    ],
  },

  {
    label: (
      <Link to={BrowserRoute.byPriorityAreas}>
       По приоритетным направлениям
      </Link>
    ),
    key: 'byPriorityAreas',
  },
  {
    label: (
      <Link to={BrowserRoute.placeOfWork}>
       С учетом места работы
      </Link>
    ),
    key: 'placeOfWork',
  },
  {
    label: (
      <Link to={BrowserRoute.byRegion}>
       По регионам
      </Link>
    ),
    key: 'byRegion',
  },
];

export const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
