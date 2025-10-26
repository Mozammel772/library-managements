import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";

const NotFound = ({ url, btnLabel }: { url: string; btnLabel: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Not Found</h2>
      <p className="text-gray-500 mb-4">
        Sorry, we couldn't find anything that you're looking for.
        <br />
        It might have been removed or the link is incorrect.
      </p>
      <Button onClick={() => navigate({ to: url })} className="mt-2 cursor-pointer">
        {btnLabel}
      </Button>
    </div>
  );
};

export default NotFound;
