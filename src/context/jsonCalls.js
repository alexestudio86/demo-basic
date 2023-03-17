export async function getHomeProducts ( ) {
    const res   = await fetch(`https://www.blogger.com/feeds/5038678016736099105/posts/summary?alt=json`);
    const posts = await res.json();
    return { posts: posts }
}

export async function getPages ( ) {
    const res   = await fetch(`https://www.blogger.com/feeds/5038678016736099105/pages/default?alt=json`);
    const posts = await res.json();
    return { posts: posts }
}