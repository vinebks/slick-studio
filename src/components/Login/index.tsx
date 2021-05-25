import { LoginFormComponent, Container, Footer, LinkLogin } from "./styles";
import { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "styled-components";

export const LoginComponent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <SkeletonTheme color={colors.grey} highlightColor={colors.lightGrey}>
      <Container>
        <LoginFormComponent>
          <img
            src="https://www.quinlanandassociates.com/wp-content/uploads/2018/07/EY_logo_slogan.png"
            alt="gestor_profile"
          />

          <input type="username" placeholder="Username" />

          <input type="password" placeholder="Password" />
          <LinkLogin href="#">Forgot your password ?</LinkLogin>
          <LinkLogin href="/" passHref>
            <button type="submit" value="Login">
              Login
            </button>
          </LinkLogin>
        </LoginFormComponent>
      </Container>
      <Footer>
        <h6>
          EY refere-se à organização global e pode se referir a uma ou mais das
          firmas-membro da Ernst & Young Global Limited, cada uma das quais é
          uma entidade legal separada. A Ernst & Young Global Limited, uma
          empresa do Reino Unido limitada por garantia, não presta serviços aos
          clientes. A EY cumpre e observa todas as normas legais e regulatórias
          profissionais. Consulte a EY Br para saber quais serviços são
          oferecidos no Brasil. A EY Br não presta serviços advocatícios no
          Brasil.
        </h6>
      </Footer>
    </SkeletonTheme>
  );
};
