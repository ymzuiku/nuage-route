declare const route: {
    target: HTMLDivElement;
    loading: () => string;
    errorPath: string;
    nowRenderPath: string;
    routerMap: any;
    /** return isCanRender */
    beforeRender: (path: string) => string | boolean;
    use: (path: string, component: any, delay?: number | undefined) => void;
    saveScrollTop: (ele?: HTMLElement | undefined) => void;
    replaceScrollTop: (ele?: HTMLElement | undefined) => Promise<number>;
    getLastScrollTop: () => number;
    push: (path: string) => void;
    pop: () => void;
    replace: (path: string) => void;
    getPath: () => string;
    render: () => Promise<void>;
};
export default route;
