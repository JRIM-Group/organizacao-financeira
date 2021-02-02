import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { Header, Section, Title } from './style';

const sections = {
  "destinationOrganization": "destinationOrganization",
  "investmentPortfolio": "investmentPortfolio",
  "variableIncomePortfolio": "variableIncomePortfolio",
};

interface IDestinationOrganization {
  retirement?: number;
  emergency?: number;
  education?: number;
  shortTermGoals?: number;
  mediumTermGoals?: number;
  longTermGoals?: number;
  needs?: number;
  recreation?: number;
  decision?: string;
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

export interface IPercentagePercentage {
  destinationOrganization: IDestinationOrganization;
  investmentPortfolio: IInvestmentPortfolio;
  variableIncomePortfolio: IVariableIncomePortfolio;
}

interface ITotal {
  destinationOrganization: number;
  investmentPortfolio: number;
  variableIncomePortfolio: number;
}

interface IHandleTotal {
  section: string;
  value: number;
  oldValue: number;
}

const Conta: React.FC = () => {

  const [percentage, setPercentage] = useState<IPercentagePercentage>(() => {
      const storagedPlanning = localStorage.getItem(
        '@MyPlanning:percentage',
      );

      if (storagedPlanning) {
        return JSON.parse(storagedPlanning);
      }
      return {
        destinationOrganization: {} as IDestinationOrganization,
        investmentPortfolio: {},
        variableIncomePortfolio: {},
      } as IPercentagePercentage;
  })
  const [totais, setTotais] = useState<ITotal>({
    destinationOrganization: 0,
    investmentPortfolio: 0,
    variableIncomePortfolio:0
  } as ITotal)

  useEffect(() => {
    localStorage.setItem(
      '@MyPlanning:percentage',
      JSON.stringify(percentage),
    );
  }, [percentage]);

  useEffect(() => {
    const storagedPlanning = localStorage.getItem(
      '@MyPlanning:percentage',
    );

    if (storagedPlanning) {
      const p = JSON.parse(storagedPlanning);

      if(p.destinationOrganization){

        const arrayPercentage: (number | undefined)[]= Object.values(p.destinationOrganization)
          .map(a => {
            if(typeof a === 'number'){
              return a;
            }
            return undefined;
          });

        const total = arrayPercentage.reduce((a, b) => {
          console.log(`a:${a} b${b}`)
          if(a && b) {
            return a + b;
          }else if (a){
            return a;
          }else if(b){
            return b;
          }
          return undefined;
        }, 0);
        console.log(total);

        setTotais((oldState) => ({
            ...oldState,
            destinationOrganization: total || 0
        }));
      }
      if(p.investmentPortfolio){
        // const total = Object.values(p.investmentPortfolio)
        //   .filter(a => typeof a === 'number')
        //   .reduce((a, b) => a + b, 0);

        //   setTotais((oldState) => ({...oldState, investmentPortfolio: total}));
      }
      if(p.variableIncomePortfolio){
        // const total = Object.values(p.variableIncomePortfolio)
        //   .filter(a => typeof a === 'number')
        //   .reduce((a, b) => a + b, 0);

        //   setTotais((oldState) => ({...oldState, variableIncomePortfolio: total}));
      }
    }
  }, []);

  const handleTotal = useCallback(({section, value, oldValue}: IHandleTotal) => {

    if(section === 'destinationOrganization'){
      if(percentage.destinationOrganization){
        const total = Object.values(percentage.destinationOrganization)
          .filter(a => typeof a === 'number')
          .reduce((a, b) => a + b, 0) + value - oldValue;

          setTotais({
            ...totais,
            destinationOrganization:total,
          });
      }
    }else if(section === 'investmentPortfolio'){
      if(percentage.investmentPortfolio){
        const total = Object.values(percentage.investmentPortfolio)
          .filter(a => typeof a === 'number')
          .reduce((a, b) => a + b, 0) + value - oldValue;

          setTotais({
            ...totais,
            destinationOrganization:total,
          });
      }
    }else if(section === 'variableIncomePortfolio'){
      if(percentage.variableIncomePortfolio){
        const total = Object.values(percentage.variableIncomePortfolio)
          .filter(a => typeof a === 'number')
          .reduce((a, b) => a + b, 0) + value - oldValue;

          setTotais({
            ...totais,
            destinationOrganization:total,
          });
      }
    }

  }, [percentage, totais]);



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
          <p>{`${totais.destinationOrganization}%`}</p>
        </header>
        <div>
          <div>
            <input
              value={percentage.destinationOrganization?.retirement || ''}
              placeholder="10,00%"
              onChange={(e) => {
                var value: number = parseFloat(e.target.value);
                if (parseFloat(e.target.value) <= 0){
                  value = value  * -1;
                }else if (isNaN(value)){
                  value = 0;
                }

                var oldValue = percentage.destinationOrganization?.retirement || 0;

                handleTotal({
                  section: sections.destinationOrganization,
                  value,
                  oldValue
                });

                setPercentage({
                  ...percentage,
                  destinationOrganization: {
                    ...percentage.destinationOrganization,
                    retirement: value,
                  }
                });
              }}
              type="text"
            />
            <label htmlFor="">Aposentadoria (Património)</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.emergency || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

              const oldValue = percentage.destinationOrganization?.emergency || 0;
              handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });

              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });

               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   emergency: value,
                 }
               });
             }}
             type="text"/>
            <label htmlFor="">Reserva de Emergência</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.education || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

               var oldValue = percentage.destinationOrganization?.education || 0;
               handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });

              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });


               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   education: value,
                 }
               });
             }}
             type="text"/>
            <label htmlFor="">Educação</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.shortTermGoals || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

               var oldValue = percentage.destinationOrganization?.shortTermGoals || 0;
               handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });

              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });


               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   shortTermGoals: value,
                 }
               })
             }}
             type="text"/>
            <label htmlFor="">Metas de Curto Prazo</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.mediumTermGoals || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

               var oldValue = percentage.destinationOrganization?.mediumTermGoals || 0;
               handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });


              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });


               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   mediumTermGoals: value,
                 }
               });
             }}
             type="text"/>
            <label htmlFor="">Metas de Médio Prazo</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.longTermGoals || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

               var oldValue = percentage.destinationOrganization?.longTermGoals || 0;
               handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });


              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });


               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   longTermGoals: value,
                 }
               });
             }}
             type="text"/>
            <label htmlFor="">Metas de Longo Prazo</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.needs || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

               var oldValue = percentage.destinationOrganization?.needs || 0;
               handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });


              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });


               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   needs: value,
                 }
               });
             }}
             type="text"/>
            <label htmlFor="">Gastos e necessidades</label></div>
          <div>
            <input
             value={percentage.destinationOrganization?.recreation || ''}
             placeholder="10,00%"
             onChange={(e) => {
               var value: number = parseFloat(e.target.value);
               if (parseFloat(e.target.value) <= 0){
                 value = value  * -1;
               }else if (isNaN(value)){
                 value = 0;
               }

               var oldValue = percentage.destinationOrganization?.recreation || 0;
               handleTotal({
                section: sections.destinationOrganization,
                value,
                oldValue
              });


              setPercentage({
                ...percentage,
                destinationOrganization: {
                  ...percentage.destinationOrganization,
                  retirement: value,
                }
              });


               setPercentage({
                 ...percentage,
                 destinationOrganization: {
                   ...percentage.destinationOrganization,
                   recreation: value,
                 }
               });
             }}
             type="text"/>
            <label htmlFor="">Gastos com o que quiser</label></div>
        </div>
        <div>
          <header>Decido pelas opções acima porque:</header>
          <textarea
          value={percentage.destinationOrganization?.decision || ''}
          placeholder="Estou definindo esse valores por..."
          onChange={(e) => {
            setPercentage({
              ...percentage,
              destinationOrganization: {
                ...percentage.destinationOrganization,
                decision: e.target.value,
              }
            })
          }}
          ></textarea>
        </div>
      </Section>
{/*

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
        </ContaInfo>

*/}

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
