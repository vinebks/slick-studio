import { Header } from './Header';
import { Main } from './Main';
import { ContentContainer, Border } from './styles';

export const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Header />
      <Border />
      <Main />
    </ContentContainer>
  );
};
