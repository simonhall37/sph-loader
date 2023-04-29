export interface LoaderConfig {
    timingOptions: {
        initialWaitTime: number,
        minimumWaitTime: number
    },
    iconPath: string,
    viewSettings: {
        iconStrokeWidth: number,
        iconDashLength: number,
        animationLength: number,
        height: number,
        width: number
    }
}