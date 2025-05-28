import * as Comlink from 'comlink';

export function heavyComputation(arg: number): number {
    const startTime = performance.now()

    let rand = Math.random() * 5_000_000_000
    for (let i = 0; i < rand; i++) { }

    const endTime = performance.now()
    console.log(`Call to heavyComputation took ${endTime - startTime} milliseconds`)

    return arg;
}

Comlink.expose(heavyComputation)