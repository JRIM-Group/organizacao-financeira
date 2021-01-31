import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FiChevronRight } from 'react-icons/fi';
import { Link as LinkRouterDOM } from 'react-router-dom';
import Logo from '../../components/Logo';
import { IPercentagePercentage } from '../PoliticasDeInvestimento';
import { Aside, Header, Main, Title, Section } from './style';

const destination = {
  "retirement": "Aposentadoria",
  "emergency": "Reserva de Emergência",
  "education": "Educação",
  "shortTermGoals": "Metas Curto Prazo",
  "mediumTermGoals": "Metas Médio Prazo",
  "longTermGoals": "Metas Logo Prazo",
  "needs": "Necessidades",
  "recreation": "Lazer"
};

interface Item{
  name: string,
  data: any,
}

const Dashboard: React.FC = () => {

  const [incomeDivision, setIncomeDivision] = useState<null | Item[]>(null);
  const [income, setIncome] = useState<string>('1000');

  useEffect(() => {
    const storagedPlanning = localStorage.getItem(
      '@MyPlanning:percentage',
    );

    if (storagedPlanning) {
      const p: IPercentagePercentage =  JSON.parse(storagedPlanning);
      const names = Object.values(destination);

      if(p.destinationOrganization){
        const data = Object.values(p.destinationOrganization)
          .filter(a => typeof a === 'number')
          .map((a, i) => ({
            name: names[i],
            data: a
          }))

          console.log(data);

        setIncomeDivision(data)
      }
    }

  },[]);


  return (
    <>
      <Header>
        <Logo />
        <LinkRouterDOM to="/politicas-de-investimento">
          Políticas de Investimento
          <FiChevronRight size={16} />
        </LinkRouterDOM>
      </Header>

      <Title>Meu Dashboard</Title>

      {incomeDivision && (
        <Main>
          <Section>
            <header>
              <p>
                Eu Recebi esse mês:
              </p>
              <p>R$ 1000,00</p>
            </header>
            <div>
              <header>Minha grana vai ficar balanceada assim: </header>
              <div className="division">
                {incomeDivision.map(p => {
                    var  input = parseFloat(income);

                    if (input < 0){
                      input = input * -1;
                    }else if (isNaN(input)){
                      input = 0;
                    }
                    const value = (input * p.data / 100).toFixed(2);

                    return <div><p>{`R$ ${value} para ${p.name}`}</p></div>
                })}
              </div>
            </div>
          </Section>

          <Aside>
            <ReactApexChart
              type="donut"
              options={{
                chart: {
                  type: 'donut',
                  width: '100%',
                  height: '1000px',
                },
                title: {
                  text: 'Divisão de Renda',
                  style: {
                    fontSize:  '24px',
                    fontFamily: 'Roboto, Helvetica, Arial',
                  },
                },
                legend: {
                  show: false,
                  position: 'bottom',
                  fontSize: '16px',
                  fontFamily: 'Roboto, Helvetica, Arial',
                },
                labels: incomeDivision.map(a => a.name),
                responsive: [{
                  breakpoint: 650,
                  options: {
                    chart: {
                      width: '100%',

                    },
                    legend: {
                      show: false,
                      fontSize: '4px'
                      // position: 'bottom',
                      // horizontalAlign: 'left',
                      // width: 200,
                      // height: 300,
                      // itemMargin: {
                      //   vertical: 4,
                      // },
                    }
                  }
                },{
                  options:{
                    breakpoint: 550,
                    dataLabels: {
                        fontSize: '50px',
                    }
                  }
                }],
              }}
              series={incomeDivision.map(a => a.data)}
            />
          </Aside>
        </Main>
      )}
    </>
  );
};

export default Dashboard;
