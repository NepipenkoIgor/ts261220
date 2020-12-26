function sleep(ms: number) {
    return new Promise((resolve: any) => {
        setTimeout(resolve, ms);
    })
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}

export async function speakLikeSloth2(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item)
    }
}

