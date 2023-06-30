import { people } from '../../../data';
import Person from './Person';

const List = () => {
  return people.map((person) => {
    return (
      <div key={person.name}>
        <Person {...person} />
      </div>
    );
  });
};
export default List;
