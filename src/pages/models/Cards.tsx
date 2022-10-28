export interface OverviewCardModel {
    image: string;
    heading: string;
    value: string;
}
export interface CustomerCardModel {
    percentage: string;
    heading: string;
    value: string;
    isIncrease: boolean;
}
export interface DefaultCardModel {
    percentage: string | null;
    heading: string;
    value: string;
    isIncrease: boolean;
    image: string;
}