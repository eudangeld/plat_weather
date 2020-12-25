export type WeatherProps = {
  iplocation:boolean;
  name: string;
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather:[{
    main: string;
    description: string;
    icon: string;
  }]
};

export type GeoCordinates = {
  lat: number;
  lng: number;
};

export type NavigationProps = {
  currentTopic?: string;
  defaultAction?: () => void;
};
