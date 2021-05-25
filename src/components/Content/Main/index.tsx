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
            <h1>Total de Usuarios</h1>
            {isLoading ? (
              <Skeleton circle height={50} width={50} duration={1} delay={1} />
            ) : (
              <span>{USERS.length}</span>
            )}
          </Records>
          <RawInfo>
            <input
              type="search"
              placeholder="Buscar ..."
              onChange={handleChange}
            />
          </RawInfo>
        </section>
          
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Usuario</th>
              <th>E-mail</th>
              <th>Setor</th>
              <th>Cargo</th>
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
                <td>
                  <Skeleton />
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, key) => (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.setor}</td>
                  <td>{user.cargo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </MainContainer>
    </SkeletonTheme>
  );
};
