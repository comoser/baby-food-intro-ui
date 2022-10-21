import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { HeaderActionsContext } from '~/components/templates/main-layout/main-layout';
import { HeaderActionIconName } from '~/components/atoms/icons/header-action-icon-map';

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
      <section>
        <div>Dashboard</div>
      </section>
      <section>section 2</section>
    </>
  );
});
