/* eslint-disable jsx-a11y/control-has-associated-label */

const MainPageTableHeader = () => {
  return (
    <thead className="mainPageTableHeader">
      <tr>
        <th style={{ width: '43px' }}>№</th>
        <th style={{ width: '214px' }}>Кол-во пачек</th>
        <th style={{ width: '272px' }}>Тип упаковки</th>
        <th style={{ width: '235px' }}>Дата создания</th>
        <th style={{ width: '180px' }}>Статус</th>
        <th style={{ width: '40px' }} />
        <th style={{ width: '100px' }} />
      </tr>
    </thead>
  );
};

export default MainPageTableHeader;
