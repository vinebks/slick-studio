import { USERS } from '../../../constants/Users';
import { formatDate } from '../../../utils/formatDate';
import { MainContainer, Records, RawInfo } from './styles';

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <section>
        <Records>
          <h1>Total Records</h1>
          <span>1</span>
        </Records>
        <RawInfo>
          <span>Download Raw Data</span>
          <input type="search" placeholder="Search" />
        </RawInfo>
      </section>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Source</th>
            <th>Time Stamp</th>
            <th>Error Flag</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.source}</td>
              <td>{formatDate(user.timeStamp)}</td>
              <td>{user.errorFlag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainContainer>
  );
};
