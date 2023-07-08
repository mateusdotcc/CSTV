import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';

export type MatchProps = {
  begin_at: string;
  league_id: number;
  league: {
    name: string;
    image_url: string | null;
  };
  serie_id: number;
  serie: {
    name: string;
  };
  opponents: {
    opponent: {
      id: number;
      name: string;
      image_url: string | null;
    };
  }[];
};

export function useGetMatches() {
  const endpoint = 'https://api.pandascore.co/csgo/matches?sort=&page=1&per_page=10';
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    matches: data,
    isLoading,
    isError: error,
  };
}
