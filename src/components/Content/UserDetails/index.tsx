import {
  Container,
  UserProfileComponent,
  HeaderComponent,
  BodyComponent,
} from "./styles";
import { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "styled-components";

export const UserDetailsPage: React.FC = () => {
  const { colors } = useTheme();

  return (
    <SkeletonTheme color={colors.grey} highlightColor={colors.lightGrey}>
      <Container>
        <UserProfileComponent>
          <HeaderComponent>
            <div>
              <h1>Joao Lucas Bastos da Silva</h1>
            </div>
            <img
              src="https://img2.gratispng.com/20180802/oxx/kisspng-stock-photography-happiness-happy-man-image-royalt-crossconnected-vision-ict-amp-telecom-5b62d6b70b08f2.0965069115332041510452.jpg"
              alt="gestor_profile"
            />
          </HeaderComponent>
          <BodyComponent>
            <h1 style={{ paddingBottom: "2rem" }}>Dados Pessoais</h1>
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
                  placeholder="u3421827"
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
                  placeholder="10/06/2018"
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
                  placeholder="joao.silva@ernstyoung.com.br"
                  style={{ width: "24rem" }}
                  disabled
                ></input>
              </div>
              <div>
                <h4>Ramal interno</h4>
                <input
                  type="text"
                  placeholder=" - "
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
                  placeholder="Programador"
                  disabled
                  style={{ width: "11rem" }}
                ></input>
              </div>
              <div>
                <h4>Setor</h4>
                <input
                  type="text"
                  placeholder="Desenvolvimento"
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
            ></div>
          </BodyComponent>
          <BodyComponent>
            <h1 style={{ paddingBottom: "2rem" }}>Dados como Colaborador</h1>
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
                <h4>Equipe / Time</h4>
                <input
                  type="text"
                  placeholder="Canais"
                  style={{
                    display: "flex",
                  }}
                  disabled
                ></input>
              </div>
              <div>
                <h4>Gestor Responsavel</h4>
                <input
                  type="text"
                  placeholder="Rafael Dantas"
                  style={{ width: "11rem" }}
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
                <h4>Projeto Atual</h4>
                <input
                  type="text"
                  placeholder="Segregacao Portal Atendimento"
                  style={{ width: "24rem" }}
                  disabled
                ></input>
              </div>
              <div>
                <h4>Entrega Prevista</h4>
                <input
                  type="text"
                  placeholder="10/08/2021"
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
                <h4>Funcao no Time</h4>
                <input
                  type="text"
                  placeholder="Desenvolvedor Front-end"
                  disabled
                  style={{ width: "17rem" }}
                ></input>
              </div>

              <div>
                <h4>Periodo Trabalhado</h4>
                <input
                  type="text"
                  placeholder="8:00 - 17:00"
                  disabled
                  style={{ width: "10rem" }}
                ></input>
              </div>
            </div>
          </BodyComponent>
          <BodyComponent>
            <h1 style={{ paddingBottom: "2rem" }}>
              Evolucao Profissional Interna
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "11rem",
                }}
              >
                <h4>Cargo</h4>
                <input
                  type="text"
                  placeholder="Aprendiz"
                  disabled
                  style={{ width: "9.5rem" }}
                ></input>
              </div>
              <div
                style={{
                  minWidth: "22rem",
                }}
              >
                <h4>Setor</h4>
                <input
                  type="text"
                  placeholder="Treinamento e Desenvolvimento"
                  style={{ width: "21rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4 style={{ color: "yellow" }}>Salario</h4>
                <input
                  type="text"
                  placeholder="$ 890,00"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Periodo</h4>
                <input
                  type="text"
                  placeholder="02/02/2019 - 01/01/2020"
                  style={{ width: "16rem" }}
                  disabled
                ></input>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "11rem",
                }}
              >
                <h4>Cargo</h4>
                <input
                  type="text"
                  placeholder="Estagiario"
                  disabled
                  style={{ width: "9.5rem" }}
                ></input>
              </div>
              <div
                style={{
                  minWidth: "22rem",
                }}
              >
                <h4>Setor</h4>
                <input
                  type="text"
                  placeholder="Desenvolvimento"
                  style={{ width: "21rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4 style={{ color: "yellow" }}>Salario</h4>
                <input
                  type="text"
                  placeholder="$ 1.500,00"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Periodo</h4>
                <input
                  type="text"
                  placeholder="02/02/2020 - 10/04/2021"
                  style={{ width: "16rem" }}
                  disabled
                ></input>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "10rem",
                }}
              >
                <h4>Cargo</h4>
                <input
                  type="text"
                  placeholder="Programador"
                  disabled
                  style={{ width: "10rem" }}
                ></input>
              </div>
              <div
                style={{
                  minWidth: "22rem",
                }}
              >
                <h4>Setor</h4>
                <input
                  type="text"
                  placeholder="Desenvolvimento"
                  style={{ width: "21rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4 style={{ color: "yellow" }}>Salario</h4>
                <input
                  type="text"
                  placeholder="$ 3.000,00"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Periodo</h4>
                <input
                  type="text"
                  placeholder="10/05/2021 ~"
                  style={{ width: "16rem" }}
                  disabled
                ></input>
              </div>
            </div>
            {/* ------------------------------------ */}
          </BodyComponent>
          <BodyComponent>
            <h1 style={{ paddingBottom: "2rem" }}>Validacao de Mercado</h1>

            {/* ------------------------------------ */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "18rem",
                }}
              >
                <h4>Cargo</h4>
                <input
                  type="text"
                  placeholder="Programador Front-End"
                  style={{ width: "17rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "12rem",
                }}
              >
                <h4 style={{ color: "yellow" }}>Salario na EY</h4>
                <input
                  type="text"
                  placeholder="$ 3.000,00"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "13rem",
                }}
              >
                <h4>Salario do Mercado</h4>
                <input
                  type="text"
                  placeholder="$ 2.500,00"
                  style={{ width: "10rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Status</h4>
                <input
                  type="text"
                  placeholder="Acima do Mercado"
                  style={{
                    width: "14rem",
                  }}
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
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "18rem",
                }}
              >
                <h4>Aumento Salarial</h4>
                <input
                  type="text"
                  placeholder="Valor da Alteracao"
                  style={{ width: "14rem", color: "white" }}
                ></input>
              </div>
            </div>
            <div
              style={{
                minWidth: "6rem",
              }}
            >
              <button
                type="submit"
                value="comentarios"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20rem",
                }}
              >
                Propor Alteracao
              </button>
            </div>
          </BodyComponent>
          <BodyComponent>
            <h1 style={{ paddingBottom: "2rem" }}>Metas Individuais</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "5rem",
                }}
              >
                <h4>Status</h4>
                <input
                  type="text"
                  placeholder="1"
                  disabled
                  style={{ width: "2rem", backgroundColor: "yellow" }}
                ></input>
              </div>
              <div
                style={{
                  minWidth: "22rem",
                }}
              >
                <h4>Meta</h4>
                <input
                  type="text"
                  placeholder="Gerar Relatorios de Rotina"
                  style={{ width: "21rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Ano</h4>
                <input
                  type="text"
                  placeholder="2019"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Porcentagem de Conclusao</h4>
                <input
                  type="text"
                  placeholder=" 88% - Completa Parcialmente"
                  style={{ width: "20rem" }}
                  disabled
                ></input>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "5rem",
                }}
              >
                <h4>Status</h4>
                <input
                  type="text"
                  placeholder="1"
                  disabled
                  style={{ width: "2rem", backgroundColor: "green" }}
                ></input>
              </div>
              <div
                style={{
                  minWidth: "22rem",
                }}
              >
                <h4>Meta</h4>
                <input
                  type="text"
                  placeholder="Cobertura de Testes Min. 90%"
                  style={{ width: "21rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Ano</h4>
                <input
                  type="text"
                  placeholder="2020"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Porcentagem de Conclusao</h4>
                <input
                  type="text"
                  placeholder=" 100% - Completa"
                  style={{ width: "20rem" }}
                  disabled
                ></input>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "5rem",
                }}
              >
                <h4>Status</h4>
                <input
                  type="text"
                  placeholder="1"
                  disabled
                  style={{ width: "2rem", backgroundColor: "yellow" }}
                ></input>
              </div>
              <div
                style={{
                  minWidth: "22rem",
                }}
              >
                <h4>Meta</h4>
                <input
                  type="text"
                  placeholder="Deploy Projeto na AWS"
                  style={{ width: "21rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Ano</h4>
                <input
                  type="text"
                  placeholder="2021"
                  style={{ width: "9rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Porcentagem de Conclusao</h4>
                <input
                  type="text"
                  placeholder=" 60% - Em Andamento"
                  style={{ width: "20rem" }}
                  disabled
                ></input>
              </div>
            </div>
          </BodyComponent>
          <BodyComponent>
            <h1 style={{ paddingBottom: "2rem" }}>Comentarios de Gestores</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "10rem",
              }}
            >
              <div
                style={{
                  minWidth: "15rem",
                }}
              >
                <h4>Gestor Responsavel</h4>
                <input
                  type="text"
                  placeholder="Rafael Dantas"
                  style={{ width: "12rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "15rem",
                }}
              >
                <h4>Data</h4>
                <input
                  type="text"
                  placeholder="10/03/2021"
                  style={{ width: "10rem" }}
                  disabled
                ></input>
              </div>
              <div
                style={{
                  minWidth: "6rem",
                }}
              >
                <h4>Comentario :</h4>
                <h6 style={{ width: "23rem", height: "2rem" }}>
                  O profissional desempenha bem o trabalho em equipe, e tem um
                  desenvolvimento rapido dentro das necessidades da equipe
                </h6>
              </div>
            </div>
            <div
              style={{
                minWidth: "6rem",
              }}
            >
              <button
                type="submit"
                value="comentarios"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20rem",
                }}
              >
                Adicionar Comentario
              </button>
            </div>
          </BodyComponent>
        </UserProfileComponent>
      </Container>
    </SkeletonTheme>
  );
};
