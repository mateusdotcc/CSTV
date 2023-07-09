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

// I'm seeing a lot of matches without logo, and name being returned from API
// I decided to clean these data
function removeEmptyData(payload?: MatchProps[]) {
  return (
    payload?.filter(
      (match) =>
        Boolean(match?.league?.image_url) &&
        Boolean(match?.opponents[0]?.opponent?.image_url) &&
        Boolean(match?.opponents[1]?.opponent?.image_url),
    ) ?? []
  );
}

export function useGetMatches() {
  const endpoint = 'https://api.pandascore.co/csgo/matches?sort=&page=1&per_page=10';
  const { data, error, isLoading } = useSWR<MatchProps[]>(endpoint, fetcher);

  return {
    matches: removeEmptyData(data),
    isLoading,
    isError: error,
  };
}
