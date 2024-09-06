import { FunctionComponent } from "react";
import styles from "@styles/Agendamento.module.css";
import { Box } from "@chakra-ui/react";
import FormularioAgendamento from "@components/form/FormAgendamento";
import Navbar from "@components/automation/Navbar";
import CalendarComponent from "@components/calendar/CalendarComponent";

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
  events: Event[];
  showInfo: ShowInfoFunction;
  listEvents: ListEventsFunction;
};

const Agendamento: FunctionComponent<AgendamentoType> = ({
  className = "",
  expanded,
  events,
  showInfo,
  listEvents
}) => {
  return (
    <div className={[styles.agendamento, className].join(" ")}>
      <Box
        ml={expanded ? "220px" : "50px"}
        transition="margin 0.3s ease"
        width="100%"
        overflowX="auto"
      >
        <section className={styles.agendamentoInner}>
          <div className={styles.agendamentoNavContainer}>
            <Navbar />
          </div>
          <div className={styles.navbarAgendamento}>
            <div className={styles.containerCalendario}>
              <CalendarComponent
                events={events}
                showInfo={showInfo}
                listEvents={listEvents}
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
