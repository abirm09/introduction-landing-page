import { TErrorMessage, TErrorResponse, TSuccessResponse } from "@/types";

const ErrorResponse = (
  status: number,
  message: string = "Something went wrong",
  errorMessages?: TErrorMessage[]
) => {
  const responseData: TErrorResponse = {
    success: false,
    message,
    errorMessages,
  };

  return new Response(JSON.stringify(responseData), {
    status: status,
    headers: { "Content-Type": "application/json" },
  });
};

const SuccessResponse = (
  status: number,
  message: string = "Operation successful!",
  data?: Record<string, unknown>
) => {
  const responseData: TSuccessResponse = {
    success: true,
    message,
    data,
  };

  return new Response(JSON.stringify(responseData), {
    status: status,
    headers: { "Content-Type": "application/json" },
  });
};

export { ErrorResponse, SuccessResponse };
