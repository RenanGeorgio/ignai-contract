import { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';

import Navbar from '@components/automation/Navbar';
import JurimetriaChart from '@components/graph/JurimetriaChart';
import Selection from '@components/jurimetria/selection';
import DecisoesFinais from '@components/jurimetria/decisoes';

import styles from '@styles/Jurimetria.module.css';

export type JurimetriaType = {
  className?: string;
  expanded: boolean;
};

const Jurimetria: FunctionComponent<JurimetriaType> = ({
  expanded,
}: JurimetriaType) => {
  return (
    <div className={styles.jurimetria}>
      <Box
        ml={expanded ? '200px' : '20px'}
        transition="margin 0.3s ease"
        width="100%"
      >
        <section className={styles.content}>
          <div
            style={{
              width: '55%',
              height: '30%',
              marginLeft: 'auto',
              marginTop: '10px',
              marginRight: '20px',
            }}
          >
            <Navbar />
            <Selection />
          </div>
          <div
            style={{
              width: '36.5%',
              marginLeft: '56px',
              marginTop: '-14%',
              padding: 10,
            }}
          >
            <JurimetriaChart />
          </div>
          <div
            style={{
              width: '35%',
              marginLeft: '5%',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '40px',
              padding: 10,
            }}
          >
            <DecisoesFinais />
          </div>
        </section>
      </Box>
    </div>
  );
};

export default Jurimetria;
