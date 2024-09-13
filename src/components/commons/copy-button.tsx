'use client';
import { CopyIcon } from '../icons/copy-icon';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex justify-center items-center"
      aria-label="Copiar"
    >
      <CopyIcon title="Clique aqui para copiar" className=" fill-white" />
    </button>
  );
};
