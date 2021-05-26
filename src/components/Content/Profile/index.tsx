import {
  Container,
  ManagerProfileComponent,
  HeaderComponent,
  BodyComponent,
} from "./styles";

export const ProfileComponent: React.FC = () => {
  return (
    <Container>
      <ManagerProfileComponent>
        <HeaderComponent>
          <div>
            <h1>Adriana Torres Coutinho</h1>
          </div>
          <img
            src="https://img2.gratispng.com/20180806/uvr/kisspng-byu-marriott-school-of-business-professional-certi-home-5b67e6c9b3bfb9.8993363715335359457363.jpg"
            alt="gestor_profile"
          />
        </HeaderComponent>
        <BodyComponent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              maxWidth: "10rem",
            }}
          >
            <div>
              <h4>Matricula</h4>
              <input
                type="text"
                placeholder="u3004221"
                style={{
                  display: "flex",
                }}
                disabled
              ></input>
            </div>
            <div>
              <h4>Data da Contratacao</h4>
              <input
                type="text"
                placeholder="10/03/2015"
                style={{ width: "10rem" }}
                disabled
              ></input>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              maxWidth: "10rem",
            }}
          >
            <div>
              <h4>E-mail *</h4>
              <input
                type="text"
                placeholder="adrinata.coutinho@ernstyoung.com.br"
                style={{ width: "24rem" }}
                disabled
              ></input>
            </div>
            <div>
              <h4>Ramal interno</h4>
              <input
                type="text"
                placeholder="201"
                style={{ width: "6rem" }}
                disabled
              ></input>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              maxWidth: "10rem",
            }}
          >
            <div>
              <h4>Cargo</h4>
              <input
                type="text"
                placeholder="Gerencia"
                disabled
                style={{ width: "9.5rem" }}
              ></input>
            </div>
            <div>
              <h4>Setor</h4>
              <input
                type="text"
                placeholder="Recursos Humanos"
                style={{ width: "14rem" }}
                disabled
              ></input>
            </div>
          </div>

          <div>
            <div>
              <h4>Unidade</h4>
              <input
                type="text"
                placeholder="Brasil"
                style={{ width: "7rem" }}
                disabled
              ></input>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "58rem",
              marginTop: "3rem",
            }}
          >
            <button type="submit">Alterar Senha</button>
            <button type="submit">Salvar</button>
          </div>
        </BodyComponent>
      </ManagerProfileComponent>
    </Container>
  );
};
