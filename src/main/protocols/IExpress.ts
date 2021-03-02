import { Express, Request, Response, NextFunction, RequestHandler } from 'express';
import express, { Router } from 'express';

export type IExpress =  Express;
export type IRequest = Request;
export type IResponse = Response;
export type INext = NextFunction;
export type IRequestHandler = RequestHandler;

export const app = express();
export const router = Router();