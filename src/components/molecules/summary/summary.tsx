import { component$ } from '@builder.io/qwik';
import Text from '~/components/atoms/text/text';
import { SwitchIcon } from '~/components/atoms/icons/switch';

export default component$(() => (
  <div className="flex flex-col min-h-36 rounded-2xl bg-gradient-to-bl from-indigo-700 via-fuchsia-800 to-amber-800">
    <div className="p-4 flex flex-row">
      <div className="flex flex-grow">
        <Text color="text-white" fontSize="text-3xl">
          My Olívia,
        </Text>
      </div>
      <div className="flex justify-end">
        <a href="babies" className="mt-1">
          <SwitchIcon color="white" />
        </a>
      </div>
    </div>
    <div className="p-4 flex flex-grow flex-col">
      <Text color="text-white">7 months and counting.</Text>
      <Text color="text-white">
        2 food introductions in the last week with no complications!
      </Text>
    </div>
  </div>
));
