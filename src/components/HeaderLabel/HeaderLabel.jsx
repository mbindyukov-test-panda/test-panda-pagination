import './HeaderLabel.css';
import ArrowUp from '../../assets/arrow-up-circle.svg';
import ArrowDown from '../../assets/arrow-down-circle.svg';

export const HeaderLabel = ({ label, handleCLick, sort, sortAsc }) => {
  return (
    <div onClick={handleCLick} className="header-label">
      <span>{label}</span>
      {label === sort ? (
        <img
          src={sortAsc ? ArrowUp : ArrowDown}
          alt="Sort"
          width="16"
          height="16"
        />
      ) : (
        ''
      )}
    </div>
  );
};
