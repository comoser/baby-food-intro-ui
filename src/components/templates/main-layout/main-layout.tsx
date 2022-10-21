import {
  component$,
  createContext,
  Slot,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import Header from '~/components/organisms/header/header';

export type HeaderAction = {
  href: string;
  iconName: string;
};

type HeaderActions = {
  headerActions: HeaderAction[];
};

export const HeaderActionsContext = createContext<HeaderActions>(
  'headerActionsContext'
);

export default component$(() => {
  const store = useStore<HeaderActions>({
    headerActions: [],
  });

  useContextProvider(HeaderActionsContext, store);

  return (
    <>
      <Header />
      <main class="p-4 pt-20">
        <Slot />
      </main>
    </>
  );
});
