import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';

export type PlayerProps = {
  id: number;
  name: string;
  first_name: string;
  image_url: string;
};

export type TeamProps = {
  players: PlayerProps[];
};

type Props = {
  teamId: number;
};

export function useGetTeam({ teamId }: Props) {
  const endpoint = `https://api.pandascore.co/teams/${teamId}`;
  const { data, error, isLoading } = useSWR<TeamProps>(endpoint, fetcher);

  return {
    team: data,
    isLoading,
    isError: error,
  };
}
