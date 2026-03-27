import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "../../server";

const app = createServer();
export default app;
