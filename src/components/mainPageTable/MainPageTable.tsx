import MainPageTableBody from '../mainPageTableBody';
import MainPageTableHeader from '../mainPageTableHeader';

const MainPageTable = () => {
  return (
    <table className="mainPageTable">
      <MainPageTableHeader />
      <MainPageTableBody />
    </table>
  );
};

export default MainPageTable;
