type PlayerData = {
   success: boolean;
   response: {
      banned?: boolean;
      muted?: boolean;
      account: {
         type: string;
         username: string;
      };
      best_tag: {
         color: string;
         name: string;
      };
      clan?: {
         name: string;
         tag: string;
         tag_color: string;
      };
      connected: boolean;
      discord?: {
         name: string;
      };
      first_login?: number;
      last_login?: number;
      stats: {
         bedwars: Bedwars;
      };
   };
};

type Bedwars = {
   level?: number;
   beds_broken?: number;
   kills?: number;
   deaths?: number;
   final_kills?: number;
   final_deaths?: number;
   wins?: number;
   losses?: number;
   games_played?: number;
   winstreak?: number;
   max_winstreak?: number;
};
