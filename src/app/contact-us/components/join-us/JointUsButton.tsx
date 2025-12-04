import { FC } from "react";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import { useFormStatus } from "react-dom";

interface Props {
  canSubmit: boolean;
}

const JointUsButton: FC<Props> = ({ canSubmit }) => {
  const { pending } = useFormStatus();
  // console.log(pending);

  return (
    <Button
      isLoading={pending}
      type="submit"
      disabled={!canSubmit}
      className={classNames(
        "h-full rounded-none rounded-tr-lg rounded-br-lg bg-secondary px-6.5 text-white text-sm font-bold md:text-base md:font-medium",
        {
          "cursor-not-allowed": !canSubmit,
        }
      )}
    >
      Join
    </Button>
  );
};

export default JointUsButton;
