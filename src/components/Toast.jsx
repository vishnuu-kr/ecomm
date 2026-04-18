import { useStore } from '../context/StoreContext';
import { Check } from 'lucide-react';

export default function Toast() {
  const { state } = useStore();
  if (!state.toast) return null;

  return (
    <div className="toast-notification">
      <Check size={16} strokeWidth={2} />
      <span>{state.toast.message}</span>
    </div>
  );
}
