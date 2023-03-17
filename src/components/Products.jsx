import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

export function ResultProducts ( ){

    const { posts } = useLoaderData();
    const items = posts.feed.entry;
    console.log(items)

    return (
        <div className="w3-row">
            { items && items.map( (item, index) => (
                    <article className="w3-col s6 w3-padding-small" key={index} >
                        <div className="w3-white">
                            <div className="w3-row">
                                <div className="w3-col s4">
                                    <img src={ item.media$thumbnail.url } alt={ item.title.$t } style={ {width: '100%'} } />
                                </div>
                                <div className="w3-rest">
                                    <header>
                                        <h1 className="w3-xlarge">{ item.title.$t }</h1>
                                    </header>
                                    <p>{ item.summary.$t }</p>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            ) }
        </div>
    )
}