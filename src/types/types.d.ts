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
         bedwars: BedwarsStats;
      };
   };
};

interface BedwarsStats {
   level_badge: {
      format: string;
      hex_color: string;
      min_level: string;
      symbol: string;
      type: string;
   };

   level?: string;

   beds_broken?: number;
   final_deaths?: number;
   final_kills?: number;
   kills?: number;
   deaths?: number;
   losses?: number;
   wins?: number;
   max_winstreak?: number;
   winstreak?: number;

   solo_beds_broken?: number;
   solo_deaths?: number;
   solo_final_deaths?: number;
   solo_final_kills?: number;
   solo_kills?: number;
   solo_losses?: number;
   solo_max_winstreak?: number;
   solo_wins?: number;
   solo_winstreak?: number;

   doubles_beds_broken?: number;
   doubles_deaths?: number;
   doubles_final_deaths?: number;
   doubles_final_kills?: number;
   doubles_kills?: number;
   doubles_losses?: number;
   doubles_max_winstreak?: number;
   doubles_wins?: number;
   doubles_winstreak?: number;

   "3v3v3v3_beds_broken"?: number;
   "3v3v3v3_deaths"?: number;
   "3v3v3v3_final_deaths"?: number;
   "3v3v3v3_final_kills"?: number;
   "3v3v3v3_kills"?: number;
   "3v3v3v3_losses"?: number;
   "3v3v3v3_max_winstreak"?: number;
   "3v3v3v3_wins"?: number;
   "3v3v3v3_winstreak"?: number;

   "4v4v4v4_beds_broken"?: number;
   "4v4v4v4_deaths"?: number;
   "4v4v4v4_final_deaths"?: number;
   "4v4v4v4_final_kills"?: number;
   "4v4v4v4_kills"?: number;
   "4v4v4v4_losses"?: number;
   "4v4v4v4_max_winstreak"?: number;
   "4v4v4v4_wins"?: number;
   "4v4v4v4_winstreak"?: number;

   "1v1_beds_broken"?: number;
   "1v1_deaths"?: number;
   "1v1_final_deaths"?: number;
   "1v1_final_kills"?: number;
   "1v1_kills"?: number;
   "1v1_losses"?: number;
   "1v1_max_winstreak"?: number;
   "1v1_wins"?: number;
   "1v1_winstreak"?: number;

   "2v2_beds_broken"?: number;
   "2v2_deaths"?: number;
   "2v2_final_deaths"?: number;
   "2v2_final_kills"?: number;
   "2v2_kills"?: number;
   "2v2_losses"?: number;
   "2v2_max_winstreak"?: number;
   "2v2_wins"?: number;
   "2v2_winstreak"?: number;

   "3v3_beds_broken"?: number;
   "3v3_deaths"?: number;
   "3v3_final_deaths"?: number;
   "3v3_final_kills"?: number;
   "3v3_kills"?: number;
   "3v3_losses"?: number;
   "3v3_max_winstreak"?: number;
   "3v3_wins"?: number;
   "3v3_winstreak"?: number;

   "4v4_beds_broken"?: number;
   "4v4_deaths"?: number;
   "4v4_final_deaths"?: number;
   "4v4_final_kills"?: number;
   "4v4_kills"?: number;
   "4v4_losses"?: number;
   "4v4_max_winstreak"?: number;
   "4v4_wins"?: number;
   "4v4_winstreak"?: number;
}
