import MainPageTableBody from '../mainPageTableBody';
import MainPageTableHeader from '../mainPageTableHeader';

const MainPageTable = () => {
  return (
    <table className="table">
      <MainPageTableHeader />
      <MainPageTableBody />
    </table>
  );
};

export default MainPageTable;
