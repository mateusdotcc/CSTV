import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import { useState } from 'react';

export type MatchProps = {
  begin_at: string;
  league_id: number;
  status: 'canceled' | 'finished' | 'not_started' | 'postponed' | 'running';
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

function sortByRunning(payload?: MatchProps[]) {
  const running = payload?.filter((match) => match.status === 'running') ?? [];
  const all = payload?.filter((match) => match.status !== 'running') ?? [];
  return [...running, ...all];
}

// TODO: not used
// I'm seeing a lot of matches without logo, and name being returned from API
// I decided to clean these data
function removeEmptyData(payload?: MatchProps[]) {
  return payload?.filter(
    (match) =>
      Boolean(match?.league?.image_url) &&
      Boolean(match?.opponents[0]?.opponent?.image_url) &&
      Boolean(match?.opponents[1]?.opponent?.image_url),
  );
}

export function useGetMatches() {
  const [page, setPage] = useState(1);
  const endpoint = `https://api.pandascore.co/csgo/matches?page=${page}&per_page=10`;
  const { data, error, isLoading, mutate } = useSWR<MatchProps[]>(endpoint, fetcher);

  return {
    matches: sortByRunning(data),
    isLoading,
    isError: error,
    mutate,
    setPage,
  };
}
