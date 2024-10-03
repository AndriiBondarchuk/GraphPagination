import { Button } from "@mui/material";
import { useNotifications } from "@toolpad/core/useNotifications";
import { MUTATION_WITH_ERROR } from "../TableWithPagination/mutation/errorMutation";
import { useMutation } from "@apollo/client";

const ErrorMutationButton = () => {
  const notifications = useNotifications();

  const [mutation] = useMutation(MUTATION_WITH_ERROR, {
    variables: { id: "1232" },
    onError: (error) => {
      notifications.show(error.message, {
        severity: "error",
        autoHideDuration: 3000,
      });
    },
    errorPolicy: "all",
  });

  return (
    <Button sx={{ marginTop: "16px" }} onClick={() => mutation()}>
      Call mutation error
    </Button>
  );
};

export default ErrorMutationButton;
