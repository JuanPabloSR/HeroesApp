export interface Character {
  id?: string;
  character: string;
  bounty: string;
  devil_fruit: string;
  first_appearance: string;
  affiliations: Affiliations;
  alt_img?: string;
}

export enum Affiliations {
  StrawHatPiratesFourEmperors = 'Straw Hat Pirates, Four Emperors',
  StrawHatPiratesStrawHatGrandFleet = 'Straw Hat Pirates, Straw Hat Grand Fleet',
}
