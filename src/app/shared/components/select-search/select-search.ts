import { paginatorParameters } from "../interfaces/paginator.interface";

const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_SIZE = 20;

export class SelectSearch {
    protected currentPage: number = DEFAULT_PAGE_INDEX;
    protected currentSize: number = DEFAULT_SIZE;
    protected name!: string;

    protected filteredLookup: Array<{ name?: string; id?: number; groupCode?: string }> = [];

    get queryParameters(): paginatorParameters {
        const parameters: paginatorParameters = {};
        if (this.name) {
            parameters.filterName = this.name;
        }
        return parameters;
    }
}