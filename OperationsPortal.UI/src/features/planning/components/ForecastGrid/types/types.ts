export interface ForecastColumn {
    key: string;
    label: string;
    width?: number;
}

export interface ForecastRow {
    id: string | number;

    [key: string]: unknown;
}