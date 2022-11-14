import { Company, GetListed, Useful } from "../data";
import { ColumnTitle, FooterColumns, FooterLink } from "../style";
import Accordion from "./Accordion";

const MobileFooter = () => {
  const accordionItems = [
    {
      title: <ColumnTitle>Company</ColumnTitle>,
      content: (
        <FooterColumns>
            {Company.map((el: { link: string; title: string }) => (
              <FooterLink href={el.link} key={el.title}>
                {el.title}
              </FooterLink>
            ))}
          </FooterColumns>
      ),
    },
    {
      title:  <ColumnTitle>Get Listed</ColumnTitle>,
      content: (
        <FooterColumns>
        {GetListed.map((el: { link: string; title: string }) => (
          <FooterLink href={el.link} key={el.title}>
            {el.title}
          </FooterLink>
        ))}
      </FooterColumns>
      ),
    },
    {
      title: <ColumnTitle>Useful</ColumnTitle>,
      content: (
        <FooterColumns>
            {Useful.map((el: { link: string; title: string }) => (
              <FooterLink key={el.title} href={el.link}>
                {el.title}
              </FooterLink>
            ))}
          </FooterColumns>
      ),
    },
  ];

  return (
    <div className="container">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default MobileFooter;
