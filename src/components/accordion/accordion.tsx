import React from "react";
import styles from "./accordion.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const accordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              National
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Alberta
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              British Columbia
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Manitoba
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              New Brunswick
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Labrador and Newfoundland
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Nova Scotia
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Northwest Territories
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Nunavut
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Ontario
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Prince Edward Island
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Quebec
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Saskatchewan
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Yukon
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default accordion;
