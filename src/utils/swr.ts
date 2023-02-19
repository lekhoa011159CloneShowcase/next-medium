import axios, { AxiosRequestConfig } from "axios";
import useSWR, { SWRConfiguration } from "swr";

const baseURL = process.env.NEXT_PUBLIC_RAPID_API_HOST;
const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

async function fetcher([url, options]: [string?, AxiosRequestConfig?]) {
  const { data }: any = await axios.request({
    url,
    headers: { "X-RapidAPI-Key": apiKey, "X-RapidAPI-Host": baseURL },
    ...options,
  });

  return data || {};
}

export default function useFetcher(
  endpoint?: string,
  fetchConfigs?: AxiosRequestConfig,
  swrConfigs?: SWRConfiguration
) {
  const url = `https://${baseURL}${endpoint}`;
  return useSWR(url, () => fetcher([url, fetchConfigs]), {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    ...swrConfigs,
  });
}
