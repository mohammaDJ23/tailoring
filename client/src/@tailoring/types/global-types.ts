import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Store } from "redux";
import { AppActions } from ".";
import { RootState } from "../redux";

export interface GlobalObj<T extends unknown = unknown> {
  [key: string]: T;
}

export interface InputObj<T extends unknown = unknown> {
  value: T;
  errorText?: string;
}

export interface TryObj<T extends unknown> {
  data?: T;
  error?: string;
}

export type GetServerSidePropsData<T extends unknown = unknown> = GetServerSideProps<TryObj<T>>;

export type AppStore = Store<RootState, AppActions>;

export interface ServerProps {
  store: AppStore;
  context: GetServerSidePropsContext;
}
