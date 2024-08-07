export type heroType = {
    id: string;
    name: string;
    films: string[];
    starships: string[];
};

export type nodesType = {
    id: string;
    data: {
        label: string;
    };
    position: {
        x: number;
        y: number;
    };
};

export type edgesType = {
    id: string;
    source: string;
    target: string;
};

export type HeroListElementType = {
    id?: number;
    name: string;
};



