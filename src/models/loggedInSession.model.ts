import { TLoggedInSession } from "@/types/loggedInSession/loggedInSessions";
import { model, models, Schema } from "mongoose";

const loggedInSessionSchema = new Schema<TLoggedInSession>(
  {
    tokenId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const LoggedInSession =
  models.logged_in_session || model("logged_in_session", loggedInSessionSchema);
