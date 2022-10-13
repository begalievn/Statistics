// modules
import React, {FC, useContext, useEffect} from "react";
import { Table } from 'antd';
import { toJS } from 'mobx';
import {observer } from "mobx-react-lite";
import { appStoreContext } from "../../../stores/context.store";
import { BarChart } from './components/bar-chart';
import {TotalStatsTable} from "./components/total-stats-table";

// components

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const TotalStats: FC = observer((): JSX.Element => {
  const { regions } = useContext(appStoreContext);
  const { regionsData } = regions;

  const handleClick = () => {
    console.log("Clicked");
    // appContext.regions.getRegionsData();
  };


  console.log("regions", toJS(regionsData));

  useEffect(() => {
    // console.log("Total Stats");
    regions.getRegionsData({regionId: '633bb84ef98652a4d97f2cf1' });
  }, []);


  return (
    <div>
      <h1>Общая статистика</h1>
      {/*<Table dataSource={dataSource} columns={columns} />*/}
      {
        regionsData && (<TotalStatsTable data={regionsData} />)
      }
      {/*<BarChart />*/}
    </div>
  );
}
);
