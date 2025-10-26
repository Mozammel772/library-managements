import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface ActionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  icon?: React.ReactNode;
  isDeleteButton?: boolean;
  title?: string;
}

const ActionButton = ({
  onClick,
  disabled,
  title,
  icon,
  isDeleteButton,
}: ActionButtonProps) => {
  return (
    <Button
      title={title}
      asChild
      variant="secondary"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        isDeleteButton && "bg-red-500 hover:text-red-800",
        "w-4 bg-stone-100 hover:font-black cursor-pointer text-stone-900"
      )}
    >
      {icon && <span>{icon}</span>}
    </Button>
  );
};

export default ActionButton;
