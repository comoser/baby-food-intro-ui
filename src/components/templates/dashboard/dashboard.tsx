import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { HeaderActionsContext } from '~/components/templates/main-layout/main-layout';
import { HeaderActionIconName } from '~/components/atoms/icons/header-action-icon-map';
import PageHeader from '~/components/atoms/page-header/page-header';
import Section from '~/components/atoms/section/section';
import Summary from '~/components/molecules/summary/summary';

export default component$(() => {
  const headerActionsContext = useContext(HeaderActionsContext);

  useClientEffect$(() => {
    headerActionsContext.headerActions = [
      {
        href: 'new-food-intro',
        iconName: HeaderActionIconName.plus,
      },
    ];
  });

  return (
    <>
      <PageHeader>Hello David,</PageHeader>
      <Section>
        <Summary />
      </Section>
      <Section></Section>
    </>
  );
});
