export type MatchProps = {
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
  const endpoint = 'https://api.pandascore.co/csgo/matches?sort=&page=1&per_page=1';
  // const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    // matches: data,
    matches: [
      {
        begin_at: '2023-07-11T00:00:00Z',
        detailed_stats: true,
        draw: false,
        end_at: null,
        forfeit: false,
        game_advantage: null,
        games: [
          {
            begin_at: null,
            complete: false,
            detailed_stats: true,
            end_at: null,
            finished: false,
            forfeit: false,
            id: 108540,
            length: null,
            match_id: 806814,
            position: 1,
            status: 'not_started',
            winner: {
              id: null,
              type: 'Team',
            },
            winner_type: 'Team',
          },
          {
            begin_at: null,
            complete: false,
            detailed_stats: true,
            end_at: null,
            finished: false,
            forfeit: false,
            id: 108541,
            length: null,
            match_id: 806814,
            position: 2,
            status: 'not_started',
            winner: {
              id: null,
              type: 'Team',
            },
            winner_type: 'Team',
          },
          {
            begin_at: null,
            complete: false,
            detailed_stats: true,
            end_at: null,
            finished: false,
            forfeit: false,
            id: 108542,
            length: null,
            match_id: 806814,
            position: 3,
            status: 'not_started',
            winner: {
              id: null,
              type: 'Team',
            },
            winner_type: 'Team',
          },
        ],
        id: 806814,
        league: {
          id: 5022,
          image_url: null,
          modified_at: '2023-07-08T14:34:32Z',
          name: 'Thunderpick World Championship',
          slug: 'cs-go-thunderpick-world-championship',
          url: '',
        },
        league_id: 5022,
        live: {
          opens_at: null,
          supported: false,
          url: null,
        },
        match_type: 'best_of',
        modified_at: '2023-07-08T14:34:21Z',
        name: 'WITHOUTWARNING vs Wildcard Gaming',
        number_of_games: 3,
        opponents: [
          {
            opponent: {
              acronym: null,
              id: 133080,
              image_url: null,
              location: 'US',
              modified_at: '2023-07-08T14:29:29Z',
              name: 'WITHOUTWARNING',
              slug: 'withoutwarning',
            },
            type: 'Team',
          },
          {
            opponent: {
              acronym: null,
              id: 133154,
              image_url:
                'https://cdn.pandascore.co/images/team/image/133154/600px_wildcard_gaming_allmode.png',
              location: 'US',
              modified_at: '2023-07-08T14:29:20Z',
              name: 'Wildcard Gaming',
              slug: 'wildcard-gaming-cs-go',
            },
            type: 'Team',
          },
        ],
        original_scheduled_at: '2023-07-11T00:00:00Z',
        rescheduled: false,
        results: [
          {
            score: 0,
            team_id: 133080,
          },
          {
            score: 0,
            team_id: 133154,
          },
        ],
        scheduled_at: '2023-07-11T00:00:00Z',
        serie: {
          begin_at: '2023-07-10T15:00:00Z',
          end_at: '2023-07-18T19:00:00Z',
          full_name: 'North America season 1 2023',
          id: 6088,
          league_id: 5022,
          modified_at: '2023-07-08T14:29:31Z',
          name: 'North America',
          season: '1',
          slug: 'cs-go-thunderpick-world-championship-north-america-1-2023',
          winner_id: null,
          winner_type: null,
          year: 2023,
        },
        serie_id: 6088,
        slug: 'withoutwarning-vs-wildcard-gaming-2023-07-11',
        status: 'not_started',
        streams_list: [],
        tournament: {
          begin_at: '2023-07-10T15:00:00Z',
          end_at: '2023-07-18T20:00:00Z',
          has_bracket: true,
          id: 10923,
          league_id: 5022,
          live_supported: false,
          modified_at: '2023-07-08T14:30:41Z',
          name: 'Playoffs',
          prizepool: '25000 United States Dollar',
          serie_id: 6088,
          slug: 'cs-go-thunderpick-world-championship-north-america-1-2023-round-1-match-1',
          tier: 'c',
          winner_id: null,
          winner_type: 'Team',
        },
        tournament_id: 10923,
        videogame: {
          id: 3,
          name: 'CS:GO',
          slug: 'cs-go',
        },
        videogame_version: null,
        winner: null,
        winner_id: null,
        winner_type: 'Team',
      },
    ],
    // isLoading,
    // isError: error,
  };
}
