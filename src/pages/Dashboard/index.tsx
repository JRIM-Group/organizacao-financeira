import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FiChevronRight } from 'react-icons/fi';
import { Link as LinkRouterDOM } from 'react-router-dom';
import Logo from '../../components/Logo';
import { IPercentagePercentage } from '../PoliticasDeInvestimento';
import { Aside, Header, Main, Title } from './style';

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

interface ISeries{
  name: string,
  data: any
}

const Dashboard: React.FC = () => {

  const [incomeDivision, setIncomeDivision] = useState<null | number[]>(null);

  useEffect(() => {
    const storagedPlanning = localStorage.getItem(
      '@MyPlanning:percentage',
    );

    if (storagedPlanning) {
      const p: IPercentagePercentage =  JSON.parse(storagedPlanning);
      const names = Object.values(destination);

      if(p.destinationOrganization){
        const data = Object.values(p.destinationOrganization)
          .filter(a => typeof a === 'number');

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

      <Main>
          {incomeDivision && (
            <Aside>
              <ReactApexChart
                type="donut"
                options={{
                  chart: {
                    type: 'donut',
                    width: '100%',
                  },
                  title: {
                    text: 'Divisão de Renda',
                    style: {
                      fontSize:  '24px',
                      fontFamily: 'Roboto, Helvetica, Arial',
                    },
                  },
                  legend: {
                    fontSize: '16px',
                    fontFamily: 'Roboto, Helvetica, Arial',
                  },
                  labels: Object.values(destination),

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
                series={incomeDivision}
              />
            </Aside>
          )}
      </Main>
    </>
  );
};

export default Dashboard;
