import { useTranslation } from "react-i18next";
import billete from "../../images/billete.png";
import plant from "../../images/libro_objeto_slider_nl.png";
import mercader_botanica from "../../images/mercader_plantas_nl.png";
import action from "../../images/action_nl.png";
import { SiTarget } from "react-icons/si";
import { IoExtensionPuzzle } from "react-icons/io5";
import { GiBlackBridge } from "react-icons/gi";
import { RiAuctionFill } from "react-icons/ri";
import { GiCardJoker } from "react-icons/gi";
import { GiCardBurn } from "react-icons/gi";
import { MdTipsAndUpdates } from "react-icons/md";
import icono_arma from "../../images/weapon-icon.png";
import icono_accion from "../../images/action-icon.png";

const HashibanInstructions = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-black">
      <div className="max-w-4xl p-4 mx-auto">
        <h1 className="text-3xl font-bold">{t("guide_first_title")}</h1>
        <iframe
          className="w-full my-10 rounded-md"
          sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
          height="400"
          src="https://www.youtube.com/embed/4yalVQtYpjg?rel=0&modestbranding=1&autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Section
          title={t("guide_objective_title")}
          icon={<SiTarget className="text-2xl" />}
        >
          <Paragraph>{t("guide_objective_text_1")}</Paragraph>
          <Paragraph>{t("guide_objective_text_2")}</Paragraph>
        </Section>

        <Section
          title={t("guide_components_title")}
          icon={<IoExtensionPuzzle className="text-2xl" />}
        >
          <GameComponentCard
            title={t("guide_merchants_title")}
            image={mercader_botanica}
          >
            <Paragraph>{t("guide_merchants_text")}</Paragraph>
          </GameComponentCard>
          <GameComponentCard title={t("guide_bills_title")} image={billete}>
            <div>
              <p className="text-lg">{`19 ${t("guide_bills_of")} 1000`}</p>
              <p className="text-lg">{`15 ${t("guide_bills_of")} 2000`}</p>
              <p className="text-lg">{`10 ${t("guide_bills_of")} 5000`}</p>
              <p className="text-lg">
                {`1 ${t("guide_bill_of")} 10000 (${t(
                  "guide_also_known_as_golden_token"
                )})`}
              </p>
            </div>
          </GameComponentCard>
          <GameComponentCard title={t("guide_actions_title")} image={action}>
            <Paragraph>{t("guide_actions_text")}</Paragraph>
          </GameComponentCard>
          <GameComponentCard title={t("guide_objects_title")} image={plant}>
            <Paragraph>{t("guide_objects_text")}</Paragraph>
          </GameComponentCard>
        </Section>
        <Section
          title={t("guide_game_setup_title")}
          icon={<GiCardBurn className="text-2xl" />}
        >
          <ParagraphWithNumber
            number={1}
            title={t("guide_game_setup_step_1_title")}
            items={[
              t("guide_game_setup_step_1_point_1"),
              t("guide_game_setup_step_1_point_2"),
              t("guide_game_setup_step_1_point_3"),
            ]}
          >
            {t("guide_game_setup_text_1")}
          </ParagraphWithNumber>
          <ParagraphWithNumber
            number={2}
            title={t("guide_game_setup_step_2_title")}
            items={[
              t("guide_game_setup_step_2_point_1"),
              t("guide_game_setup_step_2_point_2"),
            ]}
          >
            {t("guide_game_setup_text_2")}
          </ParagraphWithNumber>
          <DetailsSection>
            <ParagraphWithArrow>
              {t("guide_game_setup_disclaimer_1")}
            </ParagraphWithArrow>
          </DetailsSection>
          <ParagraphWithNumber
            number={3}
            title={t("guide_game_setup_step_3_title")}
            items={[
              t("guide_game_setup_step_3_point_1"),
              t("guide_game_setup_step_3_point_2"),
              t("guide_game_setup_step_3_point_3"),
            ]}
          >
            {t("guide_game_setup_text_3")}
          </ParagraphWithNumber>
          <ExclamationText>
            {t("guide_game_setup_let_the_auction_begin")}
          </ExclamationText>
        </Section>
        <Section
          title={t("guide_game_development_title")}
          icon={<RiAuctionFill className="text-2xl" />}
        >
          <div className="my-6">
            <ParagraphWithArrow>
              {t("guide_game_development_text_1")}
            </ParagraphWithArrow>
            <ParagraphWithArrow>
              {t("guide_game_development_text_2")}
            </ParagraphWithArrow>
            <ParagraphWithArrow>
              {t("guide_game_development_text_3")}
            </ParagraphWithArrow>
            <TabbedContainer>
              <List
                items={[
                  t("guide_turn_action_1_title"),
                  t("guide_turn_action_2_title"),
                  t("guide_turn_action_3_title"),
                  t("guide_turn_action_4_title"),
                ]}
              />
            </TabbedContainer>
          </div>
          <ActionCard title={t("guide_turn_action_1_title")} number={1}>
            <TabbedContainer>
              <List
                items={[
                  t("guide_turn_action_1_point_1"),
                  t("guide_turn_action_1_point_2"),
                  t("guide_turn_action_1_point_3"),
                  t("guide_turn_action_1_point_4"),
                ]}
              />
            </TabbedContainer>
            <DetailsSection>
              <ParagraphWithArrow>
                {t("guide_turn_action_1_disclaimer_1_title")}
              </ParagraphWithArrow>
              <TabbedContainer>
                <List
                  items={[
                    t("guide_turn_action_1_disclaimer_1_point_1"),
                    t("guide_turn_action_1_disclaimer_1_point_2"),
                    t("guide_turn_action_1_disclaimer_1_point_3"),
                    t("guide_turn_action_1_disclaimer_1_point_4"),
                  ]}
                />
              </TabbedContainer>

              <ParagraphWithArrow>
                {t("guide_turn_action_1_disclaimer_2_title")}
              </ParagraphWithArrow>
              <TabbedContainer>
                <List
                  items={[
                    t("guide_turn_action_1_disclaimer_2_point_1"),
                    t("guide_turn_action_1_disclaimer_2_point_2"),
                  ]}
                />
              </TabbedContainer>
            </DetailsSection>
          </ActionCard>
          <ActionCard title={t("guide_turn_action_2_title")} number={2}>
            <Paragraph>{t("guide_turn_action_2_text")}</Paragraph>
            <TabbedContainer>
              <List
                items={[
                  t("guide_turn_action_2_point_1"),
                  t("guide_turn_action_2_point_2"),
                  t("guide_turn_action_2_point_3"),
                ]}
              />
            </TabbedContainer>
            <DetailsSection>
              <ParagraphWithArrow>
                {t("guide_turn_action_2_disclaimer_1_title")}
              </ParagraphWithArrow>
              <TabbedContainer>
                <List
                  items={[
                    t("guide_turn_action_2_disclaimer_1_point_1"),
                    t("guide_turn_action_2_disclaimer_1_point_2"),
                  ]}
                />
              </TabbedContainer>
              <ParagraphWithArrow>
                {t("guide_turn_action_2_disclaimer_2_title")}
              </ParagraphWithArrow>
              <ParagraphWithArrow>
                {t("guide_turn_action_2_disclaimer_3_title")}
              </ParagraphWithArrow>
            </DetailsSection>
          </ActionCard>
          <ActionCard title={t("guide_turn_action_3_title")} number={3}>
            <Paragraph>{t("guide_turn_action_3_text")}</Paragraph>
            <TabbedContainer>
              <List
                items={[
                  t("guide_turn_action_3_point_1"),
                  t("guide_turn_action_3_point_2"),
                  t("guide_turn_action_3_point_3"),
                  t("guide_turn_action_3_point_4"),
                ]}
              />
            </TabbedContainer>
          </ActionCard>
          <ActionCard title={t("guide_turn_action_4_title")} number={4}>
            <Paragraph>{t("guide_turn_action_4_text")}</Paragraph>
            <TabbedContainer>
              <List
                items={[
                  t("guide_turn_action_4_point_1"),
                  t("guide_turn_action_4_point_2"),
                  t("guide_turn_action_4_point_3"),
                ]}
              />
            </TabbedContainer>
            <Paragraph>{t("guide_turn_action_4_text_2")}</Paragraph>
            <TabbedContainer>
              <List items={[t("guide_turn_action_4_point_5")]} />
            </TabbedContainer>
            <DetailsSection>
              <ParagraphWithArrow>
                {t("guide_turn_action_4_disclaimer_1_title")}
              </ParagraphWithArrow>
              <TabbedContainer>
                <List items={[t("guide_turn_action_4_disclaimer_1_point_1")]} />
              </TabbedContainer>
              <ParagraphWithArrow>
                {t("guide_turn_action_4_disclaimer_2_title")}
              </ParagraphWithArrow>
              <TabbedContainer>
                <List
                  items={[
                    t("guide_turn_action_4_disclaimer_2_point_1"),
                    t("guide_turn_action_4_disclaimer_2_point_2"),
                    t("guide_turn_action_4_disclaimer_2_point_3"),
                    t("guide_turn_action_4_disclaimer_2_point_4"),
                  ]}
                />
              </TabbedContainer>
            </DetailsSection>
          </ActionCard>
        </Section>
        <Section
          title={t("guide_special_objects_title")}
          icon={<GiCardJoker className="text-2xl" />}
        >
          <CardWithTitleAndText
            title={t("guide_special_objects_action_title")}
            icon={icono_accion}
          >
            <Paragraph>{t("guide_special_objects_action_text")}</Paragraph>
            <TabbedContainer>
              <List
                items={[
                  t("guide_special_objects_action_point_1"),
                  t("guide_special_objects_action_point_2"),
                  t("guide_special_objects_action_point_3"),
                  t("guide_special_objects_action_point_4"),
                ]}
              />
            </TabbedContainer>
            <DetailsSection>
              <ParagraphWithArrow>
                {t("guide_special_objects_action_disclaimer_1")}
              </ParagraphWithArrow>
              <ParagraphWithArrow>
                {t("guide_special_objects_action_disclaimer_2")}
              </ParagraphWithArrow>
            </DetailsSection>
            <ExclamationText>
              {t("guide_special_objects_action_text_2")}
            </ExclamationText>
          </CardWithTitleAndText>
          <CardWithTitleAndText
            icon={icono_arma}
            title={t("guide_special_objects_weapon_title")}
          >
            <Paragraph>{t("guide_special_objects_weapon_text")}</Paragraph>
            <TabbedContainer>
              <List
                items={[
                  t("guide_special_objects_weapon_point_1"),
                  t("guide_special_objects_weapon_point_2"),
                  t("guide_special_objects_weapon_point_3"),
                ]}
              />
            </TabbedContainer>
            <Paragraph>{t("guide_special_objects_weapon_text_2")}</Paragraph>
            <TabbedContainer>
              <List
                items={[
                  t("guide_special_objects_weapon_point_4"),
                  t("guide_special_objects_weapon_point_5"),
                  t("guide_special_objects_weapon_point_6"),
                ]}
              />
            </TabbedContainer>
            <DetailsSection>
              <ParagraphWithArrow>
                {t("guide_special_objects_weapon_disclaimer_1")}
              </ParagraphWithArrow>
            </DetailsSection>
          </CardWithTitleAndText>
        </Section>
        <Section
          title={t("guide_deals_title")}
          icon={<GiCardBurn className="text-2xl" />}
        >
          <Paragraph>{t("guide_deals_text_1")}</Paragraph>
          <TabbedContainer>
            <List
              items={[
                t("guide_deals_point_1"),
                t("guide_deals_point_2"),
                t("guide_deals_point_3"),
              ]}
            />
          </TabbedContainer>
          <DetailsSection>
            <ParagraphWithArrow>
              {t("guide_deals_disclaimer_1")}
            </ParagraphWithArrow>
            <TabbedContainer>
              <List items={[t("guide_deals_disclaimer_1_point_1")]} />
            </TabbedContainer>
          </DetailsSection>
        </Section>
        <Section
          title={t("guide_special_game_modes")}
          icon={<GiBlackBridge className="text-2xl" />}
        >
          <CardWithTitleAndText
            title={t("guide_special_game_modes_revelader_merchant_title")}
          >
            <TabbedContainer>
              <List
                items={[
                  t("guide_special_game_modes_revelader_merchant_point_1"),
                  t("guide_special_game_modes_revelader_merchant_point_2"),
                ]}
              />
            </TabbedContainer>
          </CardWithTitleAndText>
          <CardWithTitleAndText
            title={t("guide_special_game_modes_one_vs_one_title")}
          >
            <TabbedContainer>
              <List
                items={[
                  t("guide_special_game_modes_one_vs_one_point_1"),
                  t("guide_special_game_modes_one_vs_one_point_2"),
                ]}
              />
            </TabbedContainer>
          </CardWithTitleAndText>
        </Section>
        <Section
          title={t("guide_strategy_title")}
          icon={<MdTipsAndUpdates className="text-2xl" />}
        >
          <CardWithTitleAndText>
            <ParagraphWithArrow>
              {t("guide_strategy_text_1")}
            </ParagraphWithArrow>
            <TabbedContainer>
              <List
                items={[
                  t("guide_strategy_point_1"),
                  t("guide_strategy_point_2"),
                  t("guide_strategy_point_3"),
                ]}
              />
            </TabbedContainer>
            <ParagraphWithArrow>
              {t("guide_strategy_text_2")}
            </ParagraphWithArrow>
            <TabbedContainer>
              <List
                items={[
                  t("guide_strategy_point_4"),
                  t("guide_strategy_point_5"),
                ]}
              />
            </TabbedContainer>
            <ParagraphWithArrow>
              {t("guide_strategy_text_3")}
            </ParagraphWithArrow>
            <TabbedContainer>
              <List
                items={[
                  t("guide_strategy_point_6"),
                  t("guide_strategy_point_7"),
                ]}
              />
            </TabbedContainer>
            <ExclamationText>{t("guide_strategy_text_4")}</ExclamationText>
          </CardWithTitleAndText>
        </Section>
      </div>
    </div>
  );
};

const TabbedContainer = ({ children }) => {
  return <div className="px-12">{children}</div>;
};

const Paragraph = ({ className, children }) => {
  return <p className={`mb-4 text-lg ${className}`}>{children}</p>;
};

const ParagraphWithArrow = ({ children }) => (
  <p className="text-lg flex gap-2 items-start">
    <span className="text-3xl -translate-y-1">➜</span>
    {children}
  </p>
);

const ParagraphWithNumber = ({ items, title, number }) => (
  <p className="mb-4 text-lg gap-2 items-center">
    <div className="flex gap-2 items-center">
      <Number number={number} />
      <h2>{title}</h2>
    </div>
    <TabbedContainer>{items && <List items={items} />}</TabbedContainer>
  </p>
);

const Number = ({ number }) => (
  <div className="flex flex-shrink-0 items-center justify-center h-8 w-8 mx-2 font-bold text-xl bg-blue-400 rounded-md">
    {number}
  </div>
);

const Option = ({ number }) => {
  const { t } = useTranslation();
  return (
    <div className="py-2 px-3 font-bold text-xl bg-blue-400 rounded-md whitespace-nowrap">
      {t("guide_option")} {number}
    </div>
  );
};

const BigTitle = ({ children }) => {
  return (
    <h1 className="text-xl font-bold underline mb-5 flex gap-3 items-center">
      {children}
    </h1>
  );
};

const MediumTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

const List = ({ items }) => {
  return (
    <ul className="list-disc my-2 space-y-2 list-outside">
      {items.map((item) => (
        <li className="text-lg">{item}</li>
      ))}
    </ul>
  );
};

const Section = ({ title, icon, children }) => (
  <section className="my-10">
    <SectionTitle icon={icon}>{title}</SectionTitle>
    {children}
  </section>
);

const GameComponentCard = ({ title, image, children }) => (
  <div className="bg-white/10 rounded-md p-4 border-white/60 flex my-2 gap-4 items-center">
    <div className="w-20">
      <img src={image} alt={title} className="w-20" />
    </div>
    <div className="flex flex-col gap-2">
      <MediumTitle>{title}</MediumTitle>
      {children}
    </div>
  </div>
);

const CardWithTitleAndText = ({ title, icon, children }) => (
  <div className="bg-white/10 rounded-md p-4 border-white/60 my-2">
    <BigTitle>
      {icon && <img src={icon} alt={title} className="w-12 h-12 rounded-xl" />}
      {title}
    </BigTitle>
    {children}
  </div>
);

const ActionCard = ({ title, number, children }) => (
  <div className="bg-white/10 rounded-md p-4 border-white/60 my-2">
    <div className="flex gap-2 items-center mb-6">
      <Option number={number} />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    {children}
  </div>
);

const SectionTitle = ({ icon, children }) => (
  <h1 className="text-2xl font-bold my-4 p-1 border flex items-center gap-3 border-blue-400 rounded-md w-fit px-3 bg-blue-500">
    {icon} {children}
  </h1>
);

const DetailsSection = ({ children }) => (
  <div className="border border-yellow-200 p-2 py-8 rounded-md relative my-8 flex flex-col gap-3">
    {children}
  </div>
);

const ExclamationText = ({ children }) => (
  <h1 className="text-xl text-center my-10">{children}</h1>
);

export default HashibanInstructions;
