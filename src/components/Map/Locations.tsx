export interface Location {
  id: string,
  location: string,
  lat: number,
  lng: number
}

const SYDHAVN: Location = {
  id: "A",
  location: "Sydhavn",
  lat: 55.63,
  lng: 12.52
}

const AMAGER_STRANDPARK: Location = {
  id: "B",
  location: "Amager Strandpark",
  lat: 55.65886353,
  lng: 12.64678645
}

export const Locations: Location[] = [
  SYDHAVN,
  AMAGER_STRANDPARK
]
