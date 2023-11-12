import Head from "next/head";

export const SEO = () => {
  return (
    <Head>
      <title>Currency Converter</title>
      <meta
        name="description"
        content="Get the rates for any currency you need! Made for school."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Thanks Wes ❤️ */}
      <link rel="icon" href="https://fav.farm/💸" />
    </Head>
  );
}