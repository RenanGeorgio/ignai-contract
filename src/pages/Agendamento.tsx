import { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import FormularioAgendamento from '@components/form/FormAgendamento';
import Navbar from '@components/automation/Navbar';
import CalendarComponent from '@components/calendar/CalendarComponent';

import styles from '@styles/Agendamento.module.css';

type Event = {
  id: string;
  title: string;
  date: string;
};

type ShowInfoFunction = (eventId: string) => void;
type ListEventsFunction = () => Event[];

export type AgendamentoType = {
  className?: string;
  expanded: boolean;
  events?: Event[];
  showInfo?: ShowInfoFunction;
};

const Agendamento: FunctionComponent<AgendamentoType> = ({
  className = '',
  expanded,
  // events,
  showInfo,

}: AgendamentoType) => {

  const events = [
    {
      id: 1,
      color: '#fd3153',
      from: '2024-09-09T18:00:00+00:00',
      to: '2024-09-09T22:00:00+00:00',
      title: 'Reunião de equipe',
    },
    {
      id: 2,
      color: '#1ccb9e',
      from: '2024-09-11T14:00:00+00:00',
      to: '2024-09-12T17:00:00+00:00',
      title: 'Reunião com cliente',
    },
    {
      id: 3,
      color: '#3694DF',
      from: '2024-09-15T13:00:00+00:00',
      to: '2024-09-15:00:00+00:00',
      title: 'Reunião com fornecedor',
    },
  ];

  return (
    <div className={[styles.agendamento, className].join(' ')}>
      <Box
        ml={expanded ? '185px' : '50px'}
        transition="margin 0.3s ease"
        width="100%"
        overflowX="auto"
      >
        <section className={styles.agendamentoInner}>
          <div className={styles.agendamentoNavContainer}>
            <Navbar />
          </div>
          <div className={styles.navbarAgendamento}>
            <div
              className={styles.containerCalendario}
              style={{ marginRight: expanded ? '5%' : '0%' }}
            >
              <CalendarComponent
                events={events}
              />
            </div>
            <div className={styles.mainContentAgendamento}>
              <div className={styles.mainAgendamento}>
                <div className={styles.agendamentoContainer}>
                  <FormularioAgendamento />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
};

export default Agendamento;
