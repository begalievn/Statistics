import React, {FC} from 'react';
import {Table} from 'antd';
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

const {Column, ColumnGroup} = Table;

// const data = [
//   {
//     key: 1,
//     nameOPOP: "Наименование ОПОП",
//     downloadsCount: 3,
//     opop: 16,
//     comp: 2,
//     learn: 5,
//     gia: 12,
//     rpd: 34,
//     rpp: 23,
//     method: 19
//   }
// ];

export const TotalStatsTable: FC = observer(({data}): JSX.Element => {
  console.log("dataInTable", toJS(data));

  return (
    <div>
      <Table dataSource={data}>
        <Column title="Наименование ОПОП" dataIndex="nameOPOP" key="nameOPOP" />
        <Column title="Количество уникальных пользователей, скачавших ОПОП" dataIndex="downloadsCount" key="downloadsCount" />
        <ColumnGroup title="Количество уникальных пользователей скачавших отдельные элементы ОПОП">
          <Column title="Общая характеристика ОПОП" dataIndex="opop" key="opop" />
          <Column title="Компетентностная модель выпускника" dataIndex="comp" key="comp" />
          <Column title="Учебный план" dataIndex="learn" key="learn" />
          <Column title="Программа ГИА" dataIndex="gia" key="gia" />
          <Column title="РПД" dataIndex="rpd" key="rpd" />
          <Column title="РПП" dataIndex="rpp" key="rpp" />
          <Column title="Методические рекомендации" dataIndex="method" key="method" />
        </ColumnGroup>
        {/*<Column title="" />*/}
      </Table>
    </div>
  );
})
;
