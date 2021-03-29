import { ContentHeader } from './styles';

export const Header: React.FC = () => {
  return (
    <ContentHeader>
      <section>
        <h1>Admin Panel</h1>
        <div>
          <span>Shared with:</span>
          <span>T</span>
          <span>K</span>
        </div>
      </section>
    </ContentHeader>
  );
};
