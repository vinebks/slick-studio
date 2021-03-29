import { useCallback, useEffect, useState } from 'react';
import { USERS } from '../../../constants/Users';
import { formatDate } from '../../../utils/formatDate';
import { MainContainer, Records, RawInfo } from './styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';

export const Main: React.FC = () => {
  const [input, setInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading((loading) => !loading);
      if (event.target.value === '') {
        setFilteredUsers(USERS);
        setIsLoading((loading) => !loading);
      } else {
        setInput(event.target.value);
        setFilteredUsers(USERS.filter((user) => user.name.includes(input)));
        setIsLoading((loading) => !loading);
      }
    },
    [input]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading((prevState) => !prevState);
    }, 1000);
  }, []);

  return (
    <SkeletonTheme color={colors.grey} highlightColor={colors.lightGrey}>
      <MainContainer>
        <section>
          <Records>
            <h1>Total Records</h1>
            {isLoading ? (
              <Skeleton circle height={50} width={50} duration={1} delay={1} />
            ) : (
              <span>{USERS.length}</span>
            )}
          </Records>
          <RawInfo>
            <span>Download Raw Data</span>
            <input
              type="search"
              placeholder="It's working"
              onChange={handleChange}
            />
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
            {isLoading ? (
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, key) => (
                <tr key={key}>
                  <td>{user.name}</td>
                  <td>{user.source}</td>
                  <td>{formatDate(user.timeStamp)}</td>
                  <td>{user.errorFlag}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </MainContainer>
    </SkeletonTheme>
  );
};
