import { Status } from '../../types/Status';

type Props = {
  status: Status;
  onStatusChange: (status: Status) => void;
};

export const TodoFilter: React.FC<Props> = ({ status, onStatusChange }) => {
  return (
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${status === Status.All ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => onStatusChange(Status.All)}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${status === Status.Active ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => onStatusChange(Status.Active)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${status === Status.Completed ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => onStatusChange(Status.Completed)}
      >
        Completed
      </a>
    </nav>
  );
};
