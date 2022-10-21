import { component$, useContext } from '@builder.io/qwik';
import { HeaderActionsContext } from '~/components/templates/main-layout/main-layout';
import HeaderAction from '~/components/atoms/header-action/header-action';

export default component$(() => {
  const headerActionsContext = useContext(HeaderActionsContext);

  return (
    <div className="flex flex-row items-center">
      {headerActionsContext.headerActions.map((headerAction) => (
        <HeaderAction {...headerAction} />
      ))}
    </div>
  );
});
