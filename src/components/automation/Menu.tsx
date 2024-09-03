import { FunctionComponent } from "react";
import styles from "../../styles/automation/Menu.module.css";

export type MenuType = {
  className?: string;
};

const Menu: FunctionComponent<MenuType> = ({ className = "" }) => {
  return (
    <div className={[styles.menu, className].join(" ")}>
      <div className={styles.list}>
        <img
          className={styles.chartBarIcon}
          loading="lazy"
          alt=""
          src="/chartbar.svg"
        />
        <div className={styles.estatsticas}>Estatísticas</div>
      </div>
      <div className={styles.section}>
        <div className={styles.atendimento}>ate</div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.list1}>
          <img className={styles.mailIcon} alt="" src="/mail.svg" />
          <div className={styles.email}>Email</div>
          <div className={styles.badge}>
            <div className={styles.danger}>48</div>
          </div>
        </div>
        <div className={styles.list2}>
          <img
            className={styles.messageCircle2Icon}
            alt=""
            src="/messagecircle2.svg"
          />
          <div className={styles.chat}>Chat</div>
          <div className={styles.badge1}>
            <div className={styles.danger1}>22</div>
          </div>
        </div>
        <div className={styles.list3}>
          <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
          <div className={styles.calendario}>Calendario</div>
          <div className={styles.badge2}>
            <div className={styles.danger2}>17</div>
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.vendas}>ven</div>
      </div>
      <div className={styles.apps}>
        <div className={styles.list4}>
          <img
            className={styles.layoutSidebarIcon}
            alt=""
            src="/layoutsidebar.svg"
          />
          <div className={styles.leads}>Leads</div>
          <div className={styles.badge3}>
            <div className={styles.danger3}>14</div>
          </div>
        </div>
        <div className={styles.list5}>
          <img className={styles.book2Icon} alt="" src="/book2.svg" />
          <div className={styles.contatos}>Contatos</div>
          <div className={styles.badge4}>
            <div className={styles.danger4}>10</div>
          </div>
        </div>
        <div className={styles.list6}>
          <img className={styles.componentsIcon} alt="" src="/components.svg" />
          <div className={styles.negcios}>Negócios</div>
        </div>
        <div className={styles.list7}>
          <img
            className={styles.fileDollarIcon}
            alt=""
            src="/filedollar@2x.png"
          />
          <div className={styles.faturas}>Faturas</div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.funilDeVendasContainer}>
          <span>FUN</span>
          <span>{` `}</span>
        </div>
      </div>
      <div className={styles.pages}>
        <div className={styles.list8}>
          <img
            className={styles.textWrapDisabledIcon}
            loading="lazy"
            alt=""
            src="/textwrapdisabled@2x.png"
          />
          <div className={styles.formulrio}>Formulário</div>
        </div>
        <div className={styles.list9}>
          <img
            className={styles.smartHomeIcon}
            loading="lazy"
            alt=""
            src="/smarthome.svg"
          />
          <div className={styles.automaoEMail}>Automação E-mail</div>
        </div>
        <div className={styles.list10}>
          <img
            className={styles.copyIcon}
            loading="lazy"
            alt=""
            src="/copy.svg"
          />
          <div className={styles.disparoWhatsapp}>Disparo WhatsApp</div>
        </div>
        <div className={styles.list11}>
          <img
            className={styles.layoutNavbarIcon}
            loading="lazy"
            alt=""
            src="/layoutnavbar.svg"
          />
          <div className={styles.campanhaAds}>{`Campanha Ads `}</div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.ajuda}>AJU</div>
      </div>
      <div className={styles.chartsMaps}>
        <div className={styles.list12}>
          <img
            className={styles.settingsIcon}
            loading="lazy"
            alt=""
            src="/settings.svg"
          />
          <div className={styles.configuraes}>Configurações</div>
        </div>
        <div className={styles.list13}>
          <img className={styles.headphonesIcon} alt="" src="/headphones.svg" />
          <div className={styles.suporte}>Suporte</div>
        </div>
        <div className={styles.list14}>
          <img
            className={styles.fileTextIcon}
            loading="lazy"
            alt=""
            src="/filetext.svg"
          />
          <div className={styles.faq} />
        </div>
      </div>
    </div>
  );
};

export default Menu;