import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams } : {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;

    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: { _id: 1, name: 'Adrian' },
        _id: 1,
        description: 'This is a description.',
        image:
            "https://unsplash.com/photos/a-glass-sculpture-of-a-man-and-a-woman-facing-each-other-rs-tSzJvpBs",
        category: "Robots",
        title: "We Robots",
    }]

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Note on Pitches, and Get Noticed in Virtual Competitions.
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType, index: number) => (
                            <StartupCard key={post?.id} post={post} />
                        ))
                    ) : (
                        <p className="no-result">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
