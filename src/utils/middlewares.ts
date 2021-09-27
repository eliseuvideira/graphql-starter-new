import express from "express";
import cors from "cors";
import { apollo } from "./apollo";
import { exception, notFound } from "@ev-fns/errors";

export interface MiddlewaresProps {
  app: express.Express;
}

export const middlewares = async ({ app }: MiddlewaresProps) => {
  app.use(cors());

  if (process.env.NODE_ENV !== "production") {
    app.get("/", (_, res) => res.redirect("/graphql"));
  }

  app.use(apollo.middleware());

  app.use(notFound);
  app.use(exception);
};
