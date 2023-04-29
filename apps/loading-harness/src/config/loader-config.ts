import { LoaderConfig } from "@sph-loader/icon-loader";

export const LOADER_CONFIG: LoaderConfig = {
    timingOptions: {
        initialWaitTime: 300,
        minimumWaitTime: 2000,
    },
    iconPath: "/assets/lock_person_black_48dp.svg",
    viewSettings: {
        animationLength: 2500,
        iconDashLength: 75,
        iconStrokeWidth: 0.3,
        height: 48,
        width: 48,
    }
}
