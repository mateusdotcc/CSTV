import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';

export type MatchProps = {
  wasLoaded?: boolean; // flag to check if the card came from paging
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

const initialPage = 1;

function sortByRunning(payload?: MatchProps[]) {
  const running = payload?.filter((match) => match.status === 'running') ?? [];
  const all = payload?.filter((match) => match.status !== 'running') ?? [];
  return [...running, ...all];
}

export function useGetMatches() {
  const [page, setPage] = useState(initialPage);
  const [matches, setMatches] = useState<MatchProps[]>([]);

  const endpoint = `https://api.pandascore.co/csgo/matches?page=${page}&per_page=5`;

  const { data, error, isLoading, mutate } = useSWR<MatchProps[]>(endpoint, fetcher);

  function dispose() {
    setPage(initialPage);
    setMatches([]);
  }

  useEffect(
    function updateListData() {
      const mergeData = sortByRunning([...matches, ...(data! ?? [])]);
      setMatches(mergeData.map((item) => ({ ...item, wasLoaded: page >= 3 })));
    },
    [page, data],
  );

  return {
    matches,
    isLoading,
    isError: error,
    mutate,
    dispose,
    setPage,
  };
}
