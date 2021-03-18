export const SEARCH = 'SEARCH';
export const RENDER = 'RENDER';

export function search(value) {
    return { type: SEARCH, value };
};

export function renderData(data) {
    return { type: RENDER, data };
};

