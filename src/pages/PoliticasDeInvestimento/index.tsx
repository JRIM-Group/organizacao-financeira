import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from '../../components/Logo';
import api from '../../services/api';
import { Header, Section, Title, Transacao } from './style';

const sections = {
  "destinationOrganization": "destinationOrganization",
  "investmentPortfolio": "investmentPortfolio",
  "variableIncomePortfolio": "variableIncomePortfolio",
};

const destination = {
  "retirement": "retirement",
  "emergency": "emergency",
  "education": "education",
  "shortTermGoals": "shortTermGoals",
  "mediumTermGoals": "mediumTermGoals",
  "longTermGoals": "longTermGoals",
  "needs": "needs",
  "fixedIncome": "fixedIncome",
  "variableIncome": "variableIncome",
  "scrip": "scrip",
  "fiis": "fiis",
  "stocks": "stocks",
  "reit": "reit",
  "ownBusiness": "ownBusiness",
  "immobilized": "immobilized",
  "cryptocurrencies": "cryptocurrencies",
  "metals": "metals",
  "rebalancingReserve": "rebalancingReserve",
  "detour": "detour",
};


interface IDestinationOrganization {
  retirement: number;
  emergency: number;
  education: number;
  shortTermGoals: number;
  mediumTermGoals: number;
  longTermGoals: number;
  needs: number;
  recreation: number;
  decision: string;
}

interface IInvestmentPortfolio {
  fixedIncome: number;
  variableIncome: number;
  detour: number;
  decision: string;
}

interface IVariableIncomePortfolio {
  scrip: number;
  fiis: number;
  stocks: number;
  reit: number;
  ownBusiness: number;
  immobilized: number;
  cryptocurrencies: number;
  metals: number;
  rebalancingReserve: number;
  detour: number;
  decision: string;
}

interface IPercentagePercentage {
  destinationOrganization: IDestinationOrganization;
  investmentPortfolio: IInvestmentPortfolio;
  variableIncomePortfolio: IVariableIncomePortfolio;
}

const Conta: React.FC = () => {
  const [percentage, setPercentage] = useState<IPercentagePercentage>({} as IPercentagePercentage)

  useEffect(() => {

      // [sections.destinationOrganization][destination.retirement]
      setPercentage({
        ...percentage,
        destinationOrganization: {
          retirement: 10,
        }
      })
      console.log(percentage)

  }, []);


  const handlePort = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event);

  },[]);

  return (
    <>
      <Header>
        <Logo />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Title>Políticas de Investimentos</Title>

      <Section>
        <header>
          <p>
          De tudo que eu recebo, organizo da seguinte forma:
          </p>
          <p>100%</p>
        </header>
        <div>
          <div>
            <input
              id={destination.retirement}
              className={sections.destinationOrganization}
              value=""
              placeholder="10,00"
              onChange={(e) => setPercentage({...percentage})}
              type="text"
            />
            <label htmlFor="">Aposentadoria (Património)</label></div>
          <div><input value="5" type="text"/><label htmlFor="">Reserva de Emergência</label></div>
          <div><input value="5" type="text"/><label htmlFor="">Educação</label></div>
          <div><input value="5" type="text"/><label htmlFor="">Metas de Curto Prazo</label></div>
          <div><input value="5" type="text"/><label htmlFor="">Metas de Médio Prazo</label></div>
          <div><input value="10" type="text"/><label htmlFor="">Metas de Longo Prazo</label></div>
          <div><input value="50" type="text"/><label htmlFor="">Gastos e necessidades</label></div>
          <div><input value="10" type="text"/><label htmlFor="">Gastos com o que quiser</label></div>
        </div>
        <div>
          <header>Decido pelas opções acima porque:</header>
          <textarea>Teste</textarea>
        </div>
      </Section>

      <Section>
        <header>
          <p>
            Minha carteira de investimentos deve estar balanceada da seguinte forma entre as classes de ativos:
          </p>
          <p>100%</p>
        </header>
        <div>
          <div><input value="30,00" type="text"/><label htmlFor="">Renda Fixa</label></div>
          <div><input value="70,00" type="text"/><label htmlFor="">Renda Variável</label></div>
        </div>
        <div>
          <header>Aceito um desvio padrão para rebalanceamento de:</header>
          <div><input value="8" type="text"/><label htmlFor=""></label></div>
        </div>
        <div>
          <header>Decido pelas opções acima porque:</header>
          <textarea>Teste</textarea>
        </div>
      </Section>

      <Section>
        <header>
          <p>
          Minha carteira de Renda Variável (Previdenciaria) deve estar balanceada da seguinte forma:
          </p>
          <p>100%</p>
        </header>
        <div>
          <div><input value="25,00" type="text"/><label htmlFor="">Ações</label></div>
          <div><input value="30,00" type="text"/><label htmlFor="">FIIs</label></div>
          <div><input value="00,00" type="text"/><label htmlFor="">Fundos de Investimento em Ações</label></div>
          <div><input value="5,00" type="text"/><label htmlFor="">Stocks</label></div>
          <div><input value="00,00" type="text"/><label htmlFor="">REIT</label></div>
          <div><input value="20,00" type="text"/><label htmlFor="">Negócios Próprios</label></div>
          <div><input value="00,00" type="text"/><label htmlFor="">Imobilizado</label></div>
          <div><input value="5,00" type="text"/><label htmlFor="">Reserva em Criptomoedas</label></div>
          <div><input value="5,00" type="text"/><label htmlFor="">Reserva em Metais</label></div>
          <div><input value="10,00" type="text"/><label htmlFor="">Reserva de Renda Fixa de Liquidez</label></div>
        </div>
        <div>
          <header>Aceito um desvio padrão para rebalanceamento de:</header>
          <div><input value="2" type="text"/><label htmlFor=""></label></div>
        </div>
        <div>
          <header>Decido pelas opções acima porque:</header>
          <textarea>Teste</textarea>
        </div>
      </Section>

        {
        /* <ContaInfo status={conta.flagAtivo}>
          <header>
            <img
              src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="Capa conta"
            />
            <div>
              <strong>{conta.pessoa.nome}</strong>
              <p>{ typeContaAllowed[conta.tipoConta] }</p>
            </div>
          </header>
          <ul>
            <li>
            <strong>{Number(conta.saldo).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</strong>
              <p>Saldo</p>
            </li>
            <li>
            <strong>{Number(conta.limiteSaqueDiario).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency' , currency: 'BRL' })}</strong>
              <p>Limite Saque Diário</p>
            </li>
            <li>
              {conta.flagAtivo ? <strong>Ativada</strong> : <strong>Desativada</strong>}
              <p>Status</p>
            </li>
            <li>
              {conta.flagAtivo ?(
                <button type="button" onClick={() => handleStatus(true)} >Desativar</button>
              ):(
                <button type="button" onClick={() => handleStatus(false)}>Ativar</button>
              )}
            </li>
          </ul>
        </ContaInfo>*/
      }

      {/* <Form onSubmit={handleFilter}>
        <h2>Extrato</h2>
        <div>
          <div>
            <div>
              <span>Data Inicial</span>
              <input
                value={filterDate.initial}
                onChange={(e) => setFilterDate({...filterDate, initial: e.target.value})}
                placeholder="10/07/2003"
                type="date"
                />
            </div>
            <div>
              <span>Data Final</span>
              <input
                value={filterDate.final}
                onChange={(e) => setFilterDate({...filterDate, final: e.target.value})}
                placeholder="17/12/2020"
                type="date"
              />
            </div>
          </div>
          <button type="submit">Filtrar</button>
          </div>
      </Form> */}

      {/* {transacoes.map((transacao, i) => (
        <Transacao key={i} entrada={Number(transacao.valor) > 0}>
          <strong>{Number(transacao.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</strong>
          <p>{transacao.dataTransacao}</p>
        </Transacao>
      ))}
      {transacoes.length === 0 && (
         <strong>Nenhuma movimentação neste período</strong>
      )} */}
    </>
  );
};

export default Conta;
