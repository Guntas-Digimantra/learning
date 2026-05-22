import { WhatsappIcon } from '@/icons/icons';

export default function WhatsappButton() {
  return (
    <button
      className="fixed z-50 bottom-10 right-10 rounded-full md:p-5 p-3 bg-background shadow-[0px_0px_30px_10px_#fc8a2040] hover:scale-90 active:bg-primary transition-transform duration-300"
      type="button"
    >
      <WhatsappIcon className="md:size-10 size-5" />
    </button>
  );
}
