import { JunologixAxionInstance } from "../index";
import { useQuery } from "react-query";

const GET_ALL_JUNOLOGIX_STATES = "GET_ALL_JUNOLOGIX_STATES";

const GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS =
  "GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS";

export type GetAllFaqType = {
  id: number;
  question: string;
  answer: string;
  position: any | null;
  createdAt: string;
  updatedAt: string;
  categoryId: number | null;
};

export type GetCategoriesFaqType = {
  id: number;
  name: string;
  position: number | null;
  createdAt: string;
  updatedAt: string;
  faqs: GetAllFaqType[];
};

export type StateType = {
  id: number;
  abr: string;
  state: string;
  return: string;
  createdAt: string;
  status: string;
  updatedAt: string;
};

const getCategoriesPaperLinkQuestions = async (
  faqsType: string
): Promise<GetCategoriesFaqType[]> => {
  const response = await JunologixAxionInstance.get<GetCategoriesFaqType[]>(
    `/categories?$sort[position]=1&for=${faqsType}`
  );
  return response.data;
};

export const useGetCategoriesPaperLinkQuestions = (faqsType: string) => {
  return useQuery([GET_ALL_CATEGORIES_PAPERLINK_QUESTIONS, faqsType], () =>
    getCategoriesPaperLinkQuestions(faqsType)
  );
};

const getGetStates = async (): Promise<{ data: StateType[] }> => {
  const response = await JunologixAxionInstance.get<{ data: StateType[] }>(
    `/junologix-states`
  );
  return response.data;
};

export const useGetState = () => {
  return useQuery([GET_ALL_JUNOLOGIX_STATES], getGetStates);
};
